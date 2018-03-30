import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import styles from './style.less'


class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    render() {
        return (
            <div>
                {/* <div className={styles.repeatstyle}>footer</div> */}
                <div>{this.props.info}</div>
            </div>

        )
    }
    componentDidMount() {
    }
}


export default Header