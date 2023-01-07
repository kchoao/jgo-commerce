import type { OperationContext } from '@vercel/commerce/api/operations'
import { normalizeProduct } from '../../utils'
import type { Provider, SaleorConfig } from '..'

import * as Query from '../../utils/queries'

type Variables = {
  slug: string
  channel?: string
}

type ReturnType = {
  product: any
}

export default function getProductOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getProduct({
    query = Query.ProductOneBySlug,
    variables,
    config,
  }: {
    query?: string
    variables: Variables
    // variables: any
    config?: Partial<SaleorConfig>
    preview?: boolean
  }): Promise<ReturnType> {
    const { fetch, locale, storeChannel } = commerce.getConfig(config)

    const { data } = await fetch<any, Variables>(
      query,
      {
        variables: {
          ...variables,
          channel: storeChannel,
        },
      }
      // {
      //   ...(locale && {
      //     'Accept-Language': locale,
      //   }),
      // }
    )

    return {
      product: data && data.product ? normalizeProduct(data.product) : null,
    }
  }

  return getProduct
}
