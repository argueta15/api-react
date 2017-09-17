import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Footer.css';

class Footer extends Component {
  static PropTypes = {
    copyrigth: PropTypes.string
  };

  render() {
  	const { copyrigth = '&copy; React 2017' } = this.props;

    return (
      <div className="Footer">
        <p>Footer - { copyrigth }</p>
      </div>
    );
  }
}

export default Footer;