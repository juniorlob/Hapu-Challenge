import { connect } from 'react-redux'

import { buildMapStateToProps, buildmapDispatchToProps } from './reduxDispatchs'

const mapDispatchToProps = (dispatch) => buildmapDispatchToProps(dispatch)

export default (Page, states = null) => {
    let mapStateToProps
    if (states) {
        mapStateToProps = (state) => buildMapStateToProps(state, states)
    } else mapStateToProps = (state) => buildMapStateToProps(state)

    return connect(mapStateToProps, mapDispatchToProps)(Page)
}
