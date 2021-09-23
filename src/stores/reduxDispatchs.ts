import { bindActionCreators } from 'redux';
import { createNewsRequest } from './modules/newsletter/actions';

const actions = {
    createNewsRequest,
};

export const buildMapStateToProps = (state: any, fields: any = null) => {
    if (fields === null) {
        return {
            storeNews: state.storeNews,
        };
    }

    return fields.reduce(
        (result: any, current: any) => ({
            ...result,
            [current]: state[current],
        }),
        {}
    );
};

export const buildmapDispatchToProps = (dispatch: any) =>
    bindActionCreators(actions, dispatch);
