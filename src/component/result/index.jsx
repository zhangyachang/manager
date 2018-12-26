import React, {Component} from 'react';

import {Result, Icon} from "antd-mobile";

import './index.scss'


class ResultPage extends Component {
  state = {
    status: {
      title: '注册成功',
      message: '注册成功'
    }
  };
  render() {
    return (
      <div className="result-example">
        <Result
          img={<Icon type="check-circle" className="icon" style={{fill: '#1F90E6'}}/>}
          title={this.state.status.title}
          message={this.state.status.message}
        />
      </div>
    );
  }
}

export default ResultPage;