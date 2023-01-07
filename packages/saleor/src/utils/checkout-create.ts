import Cookies from 'js-cookie'
import { API_CHANNEL } from '../const'
import * as mutation from './mutations'
import { CheckoutCreate } from '../../schema'
import { CHECKOUT_ID_COOKIE } from '../const'

export const checkoutCreate = async (fetch: any): Promise<CheckoutCreate> => {
  const data = await fetch({
    query: mutation.CheckoutCreate,
    variables: {
      input: {
        channel: API_CHANNEL,
        lines: [],
      },
    },
  })
  const checkout = data.checkoutCreate?.checkout
  const checkoutId = checkout?.id
  const checkoutToken = checkout?.token

  const value = `${checkoutId}:${checkoutToken}`

  if (checkoutId) {
    const options = {
      expires: 60 * 60 * 24 * 30,
    }
    Cookies.set(CHECKOUT_ID_COOKIE, value, options)
  }

  return checkout
}

export default checkoutCreate
