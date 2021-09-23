import { connect } from 'react-redux';

import {
    buildMapStateToProps,
    buildmapDispatchToProps,
} from './reduxDispatchs';

const mapDispatchToProps = (dispatch: any) => buildmapDispatchToProps(dispatch);

export default (Page: any, states: any = null) => {
    let mapStateToProps;
    if (states) {
        mapStateToProps = (state: any) => buildMapStateToProps(state, states);
    } else mapStateToProps = (state: any) => buildMapStateToProps(state);

    return connect(mapStateToProps, mapDispatchToProps)(Page);
};
