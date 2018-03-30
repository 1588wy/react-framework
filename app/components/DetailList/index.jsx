import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Rate, Icon } from 'antd';

class DetailList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div>
                主要
                <Rate />
                <Icon type="link" />
                <Icon type="step-backward" />
            </div>
        )
    }
}
export default DetailList;  