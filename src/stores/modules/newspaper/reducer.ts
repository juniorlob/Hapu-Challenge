import produce from 'immer';
import initialState from './store';

/* NOTE
	Examples for requests LIST/SINGLE
*/

import {
    CREATE_NEWS_REQUEST,
    CREATE_NEWS_SUCCESS,
    CREATE_NEWS_FAIL,
    Action,
} from './types';

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case CREATE_NEWS_REQUEST:
            return produce(state, (draft: any) => {
                draft.loaded = false;
                draft.error = {};
                draft.success = '';
            });

        case CREATE_NEWS_SUCCESS:
            return produce(state, (draft) => {
                draft.loaded = true;
                draft.success = 'Newsletter subscription successful';
            });

        case CREATE_NEWS_FAIL:
            return produce(state, (draft) => {
                draft.loaded = true;
                draft.error = action.payload.err;
            });
        default:
            return state;
    }
};
