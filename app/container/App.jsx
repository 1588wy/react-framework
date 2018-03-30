import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { persistStore, storage } from 'redux-persist'
import configureStore from '../stores';
import '../../static/css/example.css';
import '../../static/css/qtui.css';
import '../../static/style/iconfont.css';
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  // componentDidMount() {
  //   persistStore(
  //     store,
  //     {
  //       storage: storage,
  //     },
  //   )
  // }


  render() {
    // if (!this.state.isReady) {
    //   return <div>正在加载中...</div>
    // } else {
    //   return (
    //     <div>
    //       <h1>{this.props.children}</h1>
    //     </div>

    //   )
    // }

    return (

      <div>
        <h1>{this.props.children}</h1>
      </div>

    )

  }
}

export default App