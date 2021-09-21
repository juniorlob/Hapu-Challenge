import produce from 'immer';
import initialState from './store';

/* NOTE
	Examples for requests LIST/SINGLE
*/

import {
    EXAMPLE_TYPE_REQUEST,
    EXAMPLE_TYPE_SUCCESS,
    EXAMPLE_TYPE_FAIL,
} from './types';

export default (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_TYPE_REQUEST:
            return produce(state, (draft) => {
                draft.loaded = false;
                draft.error = {};
                draft.success = '';
                if (action.payload.id) draft.currentExample = '';
                else draft.currentExamples = [];
            });

        case EXAMPLE_TYPE_SUCCESS:
            return produce(state, (draft) => {
                const { example, examples } = action.payload;
                draft.loaded = true;

                if (example) {
                    draft.currentExample = example;
                    draft.success = 'Some success message for single request';
                } else {
                    draft.currentExamples = examples;
                    draft.success = 'Some success message list request';
                }
            });

        case EXAMPLE_TYPE_FAIL:
            return produce(state, (draft) => {
                draft.loaded = true;
                draft.error = action.payload.err;
            });
        default:
            return state;
    }
};
