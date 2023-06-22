import React from 'react';
import { FormattedMessage } from 'react-intl';
import ScreenBlock from '../ScreenBlock/ScreenBlock';
// import GitHubCalendar from "react-github-calendar";

import './ContributionsBlock.css';

const ContributionsBlock = () => (
    <ScreenBlock id="Resume-languages" className="ResumeLanguagesAndHobbiesBlock">
        <div className="container">
            <div className="heading">
                <h2>
                    <FormattedMessage id="Resume.contribs" defaultMessage="Did I mention I Code?" />
                </h2>
            </div>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                GitHub
            </h1>
            {/* <GitHubCalendar
                    username="roopeshshettyb"
                    blockSize={15}
                    blockMargin={5}
                    color="#c084f5"
                    fontSize={16}
                /> */}
        </div>
    </ScreenBlock>
);

export default ContributionsBlock;

