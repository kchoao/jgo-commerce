import * as fragment from '../fragments'

export const CheckoutCreate = /* GraphQL */ `
  mutation CheckoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
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
