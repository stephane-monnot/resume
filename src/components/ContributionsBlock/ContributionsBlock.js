import React from 'react';
import { FormattedMessage } from 'react-intl';
import ScreenBlock from '../ScreenBlock/ScreenBlock';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './ContributionsBlock.css';

const ContributionsBlock = ({ shiftDate, today, contributions, total, isMobile }) => (
    <ScreenBlock id="Resume-languages" className="ResumeLanguagesAndHobbiesBlock">
        <div className="container">
            <div className="heading">
                <h2>
                    <FormattedMessage id="Resume.contribs" defaultMessage="Did I mention I Code?" />
                </h2>
            </div>
            <h2 style={{ paddingBottom: "20px", color: 'black' }}>
                Gitlab - Work
            </h2>
            <div style={{ paddingRight: isMobile ? "10px" : "0px" }}>
                <CalendarHeatmap
                    startDate={shiftDate(today, isMobile ? -180 : -360)}
                    endDate={today}
                    values={contributions.gitlab}
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
            <h2 style={{ paddingBottom: "20px", color: 'black' }}>
                Github
            </h2>
            <div style={{ paddingRight: isMobile ? "10px" : "0px" }}>
                <CalendarHeatmap
                    startDate={shiftDate(today, isMobile ? -180 : -360)}
                    endDate={today}
                    values={contributions.github}
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
        </div>
    </ScreenBlock>
);

export default ContributionsBlock;

