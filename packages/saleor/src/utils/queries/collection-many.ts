export const CollectionMany = /* GraphQL */ `
  query CollectionMany($first: Int!, $channel: String) {
    collections(first: $first, channel: $channel) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`
