import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

const title = 'Stéphane Monnot : Web developer in Osaka';

class Meta extends Component {
  render() {
    const { location: { pathname }, locale } = this.props;



    const mainDomain = 'https://stephanemonnot.com';
    const jaDomain = 'https://webエンジニア.com';

    let canonical = mainDomain;
    if (locale == 'ja') {
      canonical = jaDomain;
    }

    if (pathname != '/ja/rirekisho.html' && pathname != '/en/resume.html') {
      canonical += pathname;
    }

    return (
      <div>
        <Helmet titleTemplate={`%s - ${title}`} />
        <link rel="canonical" href={`${canonical}`} />
      </div>
    );
  }
}

export default withRouter(Meta);
