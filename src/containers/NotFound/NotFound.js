import React, { Component } from 'react';
import flow from 'lodash/flow';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import GridBackground from '../../components/GridBackground/GridBackground';

import './NotFound.css';
import appTheme from "../../theme";

class NotFound extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const binaryCode404 = '0000000110010100';

    return (
      <div className="NotFound">
        <Helmet
          title={formatMessage({
            id: 'NotFound.title',
            defaultMessage: '404 - page not found'
          })}
        />
        <ScreenBlock className="NotFoundBlock">
          <div className="container">
            404 - Page Not Found
          </div>
        </ScreenBlock>
      </div>
    );
  }
}

const decorators = flow([
  injectIntl
]);

export default decorators(NotFound);
