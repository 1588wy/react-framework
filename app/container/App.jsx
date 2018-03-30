import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import configureStore from '../stores';
import '../../static/style/iconfont.css';
//weui style
import 'weui';


class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )

  }
}
export default App