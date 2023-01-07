import { Fetcher } from '@vercel/commerce/utils/types'
import { API_URL } from './const'
import { getToken, handleFetchResponse } from './utils'
import { SALEOR_TOKEN } from './const'

const fetcher: Fetcher = async ({
  url = API_URL,
  method = 'POST',
  variables,
  query,
}) => {
  const token = getToken()

  return handleFetchResponse(
    await fetch(url!, {
      method,
      body: JSON.stringify({ query, variables }),
      headers: {
        ...(token && {
          'Authorization-Bearer': token,
        }),
        'Content-Type': 'application/json',
      },
    })
  )
}

export default fetcher
