import React from 'react';
import { Menu } from 'antd';

class Navbar extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          Home
        </Menu.Item>
        <Menu.Item key="about">
          About
        </Menu.Item>
      </Menu>
    );
  }
}
  
export default Navbar;
  