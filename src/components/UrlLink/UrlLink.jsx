import React, { Component } from 'react';
import './UrlLink.css';

export default class UrlLink extends Component {
  render() {

// for where users can enter url to change background images
// use on change so that real time updates to url can be seen in input box
// props passed from parents
    return (
      <div className="urlLink">
        <input className="input" type="text" name="url" value={this.props.holderUrl} placeholder="Enter Url" onChange={this.props.updateUrl} />
        <button className="button" onClick={() => this.props.searchUrl()}>Link Url</button>
      </div>
    );
  }
}

