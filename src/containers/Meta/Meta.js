import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

class Meta extends Component {
  render() {
    const {
      location: { pathname },
      locale,
    } = this.props;

    const mainDomain = 'https://stephanemonnot.com';
    const jaDomain = 'https://webエンジニア.com';

    let canonical = mainDomain;
    if (locale === 'ja') {
      canonical = jaDomain;
    }

    if (pathname !== '/ja/rirekisho.html' && pathname !== '/en/resume.html') {
      canonical += pathname;
    }

    return (
      <Helmet
        htmlAttributes={{ lang: locale }}
        link={[{ rel: 'canonical', href: canonical }]}
        meta={[
          {
            name: 'google-site-verification',
            content: '-WO5leO82u7tAYgflVya2_d4FlcHvr28LzjUUv4nHpE',
          },
          { property: 'og:url', content: canonical },
          { property: 'og:image', content: `${mainDomain}/share.png` },
        ]}
      />
    );
  }
}

export default withRouter(Meta);
