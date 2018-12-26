import React, {Component} from 'react';
import './index.scss'
class Layout extends Component {
  render() {
    return (
      <div className={'layout'}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;