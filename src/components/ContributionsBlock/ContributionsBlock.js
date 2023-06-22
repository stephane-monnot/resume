import React from 'react';
import { FormattedMessage } from 'react-intl';
import ScreenBlock from '../ScreenBlock/ScreenBlock';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './ContributionsBlock.css';

const ContributionsBlock = ({ shiftDate, today, randomValues }) => (


    <ScreenBlock id="Resume-languages" className="ResumeLanguagesAndHobbiesBlock">
        <div className="container">
            <div className="heading">
                <h2>
                    <FormattedMessage id="Resume.contribs" defaultMessage="Did I mention I Code?" />
                </h2>
            </div>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Gitlab
            </h1>
            <CalendarHeatmap
                startDate={shiftDate(today, -360)}
                endDate={today}
                values={randomValues}
                gutterSize={2}
                showOutOfRangeDays={true}
                weekdayLabels={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                classForValue={value => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-github-${value.count}`;
                }}
                showWeekdayLabels={true}
            />
        </div>
    </ScreenBlock>
);

export default ContributionsBlock;

