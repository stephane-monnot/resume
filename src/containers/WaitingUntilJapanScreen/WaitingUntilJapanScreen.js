import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import flow from 'lodash/flow';
import { LinearProgress } from 'material-ui/Progress';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withTheme } from 'material-ui/styles';

import './WaitingUntilJapanScreen.css';
import { changeLanguage } from '../../reducers/language';

class WaitingUntilJapanScreen extends Component {

  componentWillMount() {
    this.props.onChangeLanguage(this.props.language)
  }

  render() {
    const fromDate = new Date(2017, 9, 3);
    const untilDate = new Date(2018, 0, 15);
    const today = new Date();
    const timeDiff = Math.abs(untilDate.getTime() - today.getTime());
    const remainingDays = Math.round(timeDiff / (1000 * 3600 * 24));
    const timeDiff2 = Math.abs(today.getTime() - fromDate.getTime());
    const spentDays = Math.round(timeDiff2 / (1000 * 3600 * 24));
    const percent = Math.round(spentDays / (remainingDays + spentDays) * 100 * 10) / 10;

    const { theme } = this.props;
    const primaryColor = theme.palette.primary[500];
    const secondaryColor = theme.palette.secondary[500];

    const styles = {
      primaryColor: {
        background: primaryColor,
        color: '#fff',
      },
      secondaryColor: {
        background: secondaryColor,
        color: '#fff',
      },
    };

    return (
      <Card className="WaitingUntilJapanScreen-card">
        <CardContent>
          <h3>
            <FormattedMessage
              id='WaitingUntilJapanScreen.remainingDaysUntilJapan'
              defaultMessage='Remaining days until Japan'
            />
          </h3>

          <div style={{ position: 'relative' }}>
            <LinearProgress className="WaitingUntilJapanScreen-progress" color="accent" mode="determinate"
                            value={percent} />
            <div className="WaitingUntilJapanScreen-progress-percent" style={{ width: percent + '%' }}>{percent}%</div>
          </div>

        </CardContent>
        <CardActions className="WaitingUntilJapanScreen-card-footer" style={styles.primaryColor}>
          <div className="WaitingUntilJapanScreen-info">
            <div className="WaitingUntilJapanScreen-info-title">
              <FormattedMessage
                id='WaitingUntilJapanScreen.from'
                defaultMessage='From'
              />
            </div>
            <div className="WaitingUntilJapanScreen-info-value">{fromDate.toLocaleDateString()}</div>
          </div>
          <div className="WaitingUntilJapanScreen-info">
            <div className="WaitingUntilJapanScreen-info-title">
              <FormattedMessage
                id='WaitingUntilJapanScreen.until'
                defaultMessage='Until'
              />
            </div>
            <div className="WaitingUntilJapanScreen-info-value">{untilDate.toLocaleDateString()}</div>
          </div>
          <div className="WaitingUntilJapanScreen-info">
            <div className="WaitingUntilJapanScreen-info-title">
              <FormattedMessage
                id='WaitingUntilJapanScreen.days'
                defaultMessage='Days'
              />
            </div>
            <div className="WaitingUntilJapanScreen-info-value">{spentDays} / {remainingDays + spentDays}</div>
          </div>
          <div className="WaitingUntilJapanScreen-info">
            <div className="WaitingUntilJapanScreen-info-title">
              <FormattedMessage
                id='WaitingUntilJapanScreen.percent'
                defaultMessage='Percent'
              />
            </div>
            <div className="WaitingUntilJapanScreen-info-value">{percent}%</div>
          </div>
        </CardActions>
      </Card>

    );
  }
}

WaitingUntilJapanScreen.propTypes = {
  intl: intlShape.isRequired
};

const actionsToProps = dispatch => ({
  onChangeLanguage: lang => dispatch(changeLanguage(lang))
});

const decorators = flow([
  withTheme,
  connect(null, actionsToProps),
  injectIntl
]);

export default decorators(WaitingUntilJapanScreen);