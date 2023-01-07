import * as fragment from '../fragments'

export const CheckoutLineUpdate = /* GraphQL */ `
  mutation CheckoutLineUpdate(
    $checkoutId: ID!
    $lines: [CheckoutLineUpdateInput!]!
  ) {
    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {
      errors {
        code
        field
        message
      }
      checkout {
        ...CheckoutDetails
      }
    }
  }
  ${fragment.CheckoutDetails}
`
