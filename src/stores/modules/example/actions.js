import { EXAMPLE_TYPE_REQUEST } from './types'

export const exampleRequest = ({ id = null }) => ({
    type: EXAMPLE_TYPE_REQUEST,
    payload: { id },
})
