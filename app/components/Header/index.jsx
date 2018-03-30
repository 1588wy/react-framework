import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import styles from './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    click() {
        const clickTest = this.props.clickFn;
        clickTest();
    }

    sendToParent() {
        console.log('parent get it');
    }

    componentWillMount() {
        //将数据传递到父组件
        const sibingInfo = this.props.changeFn;
        sibingInfo("header send to footer");
    }

    render() {
        return (
            <div>
                {/* <div className={styles.repeatstyle}>header</div> */}
                {this.props.hearderName}
                <span onClick={this.click.bind(this)}>click me</span>
            </div>

        )
    }
    componentDidMount() {
    }
}


export default Header