import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';
import Card, { CardContent } from 'material-ui/Card';

class WaitingUntilJapanScreen extends Component {

  render() {
    const fromDate = new Date(2017, 9, 3);
    const untilDate = new Date(2018, 0, 15);
    const today = new Date();
    const timeDiff = Math.abs(untilDate.getTime() - today.getTime());
    const remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const timeDiff2 = Math.abs(today.getTime() - fromDate.getTime());
    const spentDays = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
    const percent = Math.round(spentDays / (remainingDays + spentDays) * 100 * 10) / 10;

    return (
      <Card style={{maxWidth: '90%', margin: '0 auto'}}>
        <CardContent>
          <h3>Remaining days until japan</h3>

          <div>
            From : { fromDate.toLocaleDateString() }<br />
            Until : { untilDate.toLocaleDateString() }<br />
            Spent days : { spentDays } days<br />
            Remaining days : { remainingDays } days<br />
            Percent : { percent }%<br />
            <LinearProgress mode="determinate" value={percent}/>
          </div>

        </CardContent>
      </Card>

    );
  }
}

export default WaitingUntilJapanScreen;