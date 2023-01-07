import type { OperationContext } from '@vercel/commerce/api/operations'
import { ProductCountableEdge } from '../../../schema'
import type { Provider, SaleorConfig } from '..'

import { getAllProductsPathsQuery } from '../../utils/queries'

export type GetAllProductPathsResult = {
  products: Array<{ path: string }>
}

export default function getAllProductPathsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllProductPaths({
    query = getAllProductsPathsQuery,
    config,
    variables,
  }: {
    query?: string
    config?: SaleorConfig
    variables?: any
  } = {}): Promise<GetAllProductPathsResult> {
    const { fetch, storeChannel } = commerce.getConfig(config)

    const { data }: any = await fetch(query, {
      variables: {
        ...variables,
        channel: storeChannel,
      },
    })

    return {
      products: data?.products?.edges?.map(
        ({ node: { slug } }: ProductCountableEdge) =>
          ({
            path: `/${slug}`,
          } ?? [])
      ),
    }
  }

  return getAllProductPaths
}
