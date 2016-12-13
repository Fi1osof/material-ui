// @flow weak

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';

export default class IconTabs extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    return (
      <Paper style={{ width: 500 }}>
        <Tabs
          index={this.state.index}
          onChange={this.handleChange}
          textColor="accent"
          fullWidth
        >
          <Tab icon={<span className="material-icons">phone</span>} />
          <Tab icon={<span className="material-icons">favorite</span>} />
          <Tab icon={<span className="material-icons">person_pin</span>} />
        </Tabs>
      </Paper>
    );
  }
}