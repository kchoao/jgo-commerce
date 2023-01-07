import * as fragment from '../fragments'

// TODO: Change it back to collectionId instead of categoryId
export const CollectionOne = /* GraphQL */ `
  query getProductsFromCollection(
    $categoryId: ID = "Q29sbGVjdGlvbjo2"
    $first: Int = 50
    $channel: String = "channel-jgo-hk"
  ) {
    collection(id: $categoryId, channel: $channel) {
      id
      products(first: $first) {
        ...ProductConnection
      }
    }
  }
  ${fragment.ProductConnection}
`
