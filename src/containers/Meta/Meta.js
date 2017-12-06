import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

const title = 'Stéphane Monnot : Web developer in Osaka';

class Meta extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Helmet titleTemplate={`%s - ${title}`} />
        <link rel="canonical" href={`https://xn--web-li4b3a0h2ftn.com${location.pathname}`} />
      </div>
    );
  }
}

export default withRouter(Meta);
