import * as fragment from '../fragments'

export const CheckoutLineAdd = /* GraphQL */ `
  mutation CheckoutLineAdd($id: ID!, $lines: [CheckoutLineInput!]!) {
    checkoutLinesAdd(id: $id, lines: $lines) {
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
