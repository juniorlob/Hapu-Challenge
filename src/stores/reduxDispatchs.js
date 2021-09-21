import { bindActionCreators } from 'redux';
import { exampleRequest } from './modules/example/actions';

const actions = {
    exampleRequest,
};

export const buildMapStateToProps = (state, fields = null) => {
    if (fields === null) {
        return {
            storeExample: state.storeExample,
        };
    }

    return fields.reduce(
        (result, current) => ({ ...result, [current]: state[current] }),
        {}
    );
};

export const buildmapDispatchToProps = (dispatch) =>
    bindActionCreators(actions, dispatch);
