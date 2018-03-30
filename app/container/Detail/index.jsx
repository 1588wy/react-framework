import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './style.less'
import DataList from '../../components/DetailList'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentWillMount() {

    }

    render() {

        return (
            <div>
                {this.props.detailInfo}
                <DataList />
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        detailInfo: state.reducers.info
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)