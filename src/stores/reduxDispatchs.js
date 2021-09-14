import { bindActionCreators } from 'redux'
import * as exampleActions from './modules/example/actions'

const actions = {
    ...exampleActions,
}

export const buildMapStateToProps = (state, fields = null) => {
    if (fields === null) {
        return {
            storeExample: state.storeExample,
        }
    }

    return fields.reduce(
        (result, current) => ({
            ...result,
            [current]: state[current],
        }),
        {}
    )
}

export const buildmapDispatchToProps = (dispatch) =>
    bindActionCreators(actions, dispatch)
