import React, { Component } from 'react';
import flow from 'lodash/flow';
import { LinearProgress } from 'material-ui/Progress';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withTheme } from 'material-ui/styles';

import './WaitingUntilJapanScreen.css';

class WaitingUntilJapanScreen extends Component {

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
          <h3>Remaining days until japan</h3>

          <div style={{position: 'relative'}}>
            <LinearProgress className="WaitingUntilJapanScreen-progress" color="accent" mode="determinate" value={percent}/>
            <div className="WaitingUntilJapanScreen-progress-percent" style={{width: percent + '%'}}>{percent}%</div>
          </div>

        </CardContent>
        <CardActions className="WaitingUntilJapanScreen-card-footer" style={styles.primaryColor}>
          <div className="WaitingUntilJapanScreen-info">
            <div className="WaitingUntilJapanScreen-info-title">From</div>
            <div className="WaitingUntilJapanScreen-info-value">{ fromDate.toLocaleDateString() }</div>
          </div>
          <div className="WaitingUntilJapanScreen-info">
            <div className="WaitingUntilJapanScreen-info-title">Until</div>
            <div className="WaitingUntilJapanScreen-info-value">{ untilDate.toLocaleDateString() }</div>
          </div>
          <div className="WaitingUntilJapanScreen-info">
            <div className="WaitingUntilJapanScreen-info-title">Days</div>
            <div className="WaitingUntilJapanScreen-info-value">{ spentDays } / { remainingDays + spentDays }</div>
          </div>
          <div className="WaitingUntilJapanScreen-info">
            <div className="WaitingUntilJapanScreen-info-title">Percent</div>
            <div className="WaitingUntilJapanScreen-info-value">{ percent }%</div>
          </div>
        </CardActions>
      </Card>

    );
  }
}

const decorators = flow([
  withTheme,
]);

export default decorators(WaitingUntilJapanScreen);