import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as  TestAction from '../../action/test'
import * as userService from '../../services/userService'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.less'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: ''
        }
    }

    clickMe() {
        console.log('test in');
    }

    getChild() {
        this.refs.getInfo.sendToParent();
    }

    changeInfo(info) {
        this.setState({
            info: info
        });
    }

    render() {
        let name = '张三';
        return (
            <div>
                <Header hearderName={name} clickFn={this.clickMe.bind(this)} changeFn={this.changeInfo.bind(this)} ref="getInfo" />
                <Footer info={this.state.info} />
                <span onClick={this.getChild.bind(this)}>get child info</span>
                <div className="home"><i className="iconfont icon-home" />hello,home</div>
                <Link to='/detail'>to detail</Link>
            </div>

        )
    }
    componentDidMount() {
        this.props.TestAction.saveData('我是王颖');
        userService.getUserList().then(info => {
            console.log(info);
        }).catch()
    }
}


function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        TestAction: bindActionCreators(TestAction, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)