import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import Helmet from 'react-helmet';
import { injectIntl, intlShape } from 'react-intl';
import { withTheme } from '@material-ui/core/styles';

import ResumeAppBar from '../../components/ResumeAppBar/ResumeAppBar';
import ResumeHomeBlock from '../../components/ResumeHomeBlock/ResumeHomeBlock';
import ResumeAboutMeBlock from '../../components/ResumeAboutMeBlock/ResumeAboutMeBlock';
import ResumeWorkAndEducationBlock from '../../components/ResumeWorkAndEducationBlock/ResumeWorkAndEducationBlock';
import ResumeSkillsBlock from '../../components/ResumeSkillsBlock/ResumeSkillsBlock';
import ResumeProjectsBlock from '../../components/ResumeProjectsBlock/ResumeProjectsBlock';
import ResumeLanguagesAndHobbiesBlock from '../../components/ResumeLanguagesAndHobbiesBlock/ResumeLanguagesAndHobbiesBlock';
import ResumeCustomersBlock from '../../components/ResumeCustomersBlock/ResumeCustomersBlock';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import ContributionsBlock from '../../components/ContributionsBlock/ContributionsBlock';
import ResumeAchievementsBlock from '../../components/ResumeAchievementsBlock/ResumeAchievementsBlock';
import axios from 'axios';
import appTheme from '../../theme';
import './Resume.css';

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contributions: { gitlab: [], github: [] }, // Initialize contributions as an empty array
      total: 0, // Initialize total
      isMobile: false
    };
  }

  componentDidMount() {
    this.fetchContributions(); // Call the API once the component is mounted
    this.fetchHubContributions();
    const isMobile = /Mobi/i.test(window.navigator.userAgent);
    this.setState({ ...this.state, isMobile });
  }

  fetchHubContributions = async () => {
    try {
      const response = await axios.get('https://portfolio-api-blond.vercel.app/github');
      let total = (response.data.sum)
      this.setState({ contributions: { ...this.state.contributions, github: response.data.contributions }, total: this.state.total + total })
    } catch (error) {
      console.error('Error fetching GitLab contributions:', error);
    }
  };

  fetchContributions = async () => {
    try {
      const response = await axios.get('https://portfolio-api-blond.vercel.app/');
      let total = (response.data.sum)
      this.setState({ contributions: { ...this.state.contributions, gitlab: response.data.contributions }, total: this.state.total + total })
    } catch (error) {
      console.error('Error fetching GitLab contributions:', error);
    }
  };

  getSkillsByLanguages() {
    const { skills } = this.props;

    const skillsByLanguages = skills.reduce((obj, item) => {
      const newObj = obj;
      if (item.language) {
        newObj[item.language.name] = newObj[item.language.name] || [];
        newObj[item.language.name].push(item);
      }
      return newObj;
    }, {});

    return Object.keys(skillsByLanguages).map(key => skillsByLanguages[key]);
  }

  render() {
    let fullName = `${this.props.firstName} ${this.props.lastName}`;
    let shortFullName = `${this.props.firstName} ${this.props.lastName}`;
    if (this.props.firstNameKana) {
      shortFullName = this.props.firstNameKana + this.props.lastNameKana;
      fullName += ` (${this.props.firstNameKana}${this.props.lastNameKana})`;
    }

    const { contributions, total, isMobile } = this.state;
    const mailLink = isMobile ? 'mailto:roopeshb13@gmail.com?subject=Hey%2C%20Roopesh' : `https://mail.google.com/mail/?view=cm&to=roopeshb13%40gmail.com&su=Hey,Roopesh`;
    const cv = this.props.cvPDF;

    const { theme } = this.props;
    const { formatMessage, formatDate } = this.props.intl;

    const primaryColor = theme.palette.primary.main;
    const secondaryColor = theme.palette.secondary.main;

    const skills = this.getSkillsByLanguages();

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

    function shiftDate(date, numDays) {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + numDays);
      return newDate;
    }
    const today = new Date();

    return (
      <div className="Resume">
        <Helmet
          title={this.props.meta.title}
          meta={[
            { name: 'description', content: this.props.meta.description },
            { name: 'keywords', content: this.props.meta.keywords },
            { property: 'og:title', content: this.props.meta.title },
            { property: 'twitter:title', content: this.props.meta.title },
            {
              property: 'og:description',
              content: this.props.meta.description,
            },
          ]}
        />

        <ResumeAppBar
          emailAddress={this.props.emailAddress}
          snsAccounts={this.props.snsAccounts}
          mailLink={mailLink}
        />

        <ResumeHomeBlock
          shortFullName={shortFullName}
          headline={this.props.headline}
          style={appTheme.phpColor.style}
        />

        <ResumeAboutMeBlock
          fullName={fullName}
          headline={this.props.headline}
          summary={this.props.summary}
          pictureUrl={this.props.pictureUrl}
          resumeUrl={cv}
          style={appTheme.phpColor.style}
          isMobile={isMobile}
        />

        <ResumeWorkAndEducationBlock
          workIconStyle={styles.primaryColor}
          educationIconStyle={styles.secondaryColor}
          positions={this.props.positions}
          educations={this.props.educations}
          formatMessage={formatMessage}
        />

        <ResumeSkillsBlock skills={skills} tools={this.props.tools} />

        <ResumeAchievementsBlock
          projects={this.props.achievements}
          formatDate={formatDate}
        />


        <ResumeLanguagesAndHobbiesBlock
          languages={this.props.languages}
          hobbies={this.props.hobbies}
          hobbyCardStyle={styles.primaryColor}
        />



        <ResumeProjectsBlock
          projects={this.props.projects}
          formatDate={formatDate}
        />

        <ContributionsBlock isMobile={isMobile} shiftDate={shiftDate} today={today} total={total} contributions={contributions} />
        <ResumeCustomersBlock customers={this.props.customers} />


        <BottomNavigation />
      </div>
    );
  }
}

Resume.propTypes = {
  theme: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  firstName: PropTypes.string,
  firstNameKana: PropTypes.string,
  lastName: PropTypes.string,
  lastNameKana: PropTypes.string,
  emailAddress: PropTypes.string,
  headline: PropTypes.string,
  summary: PropTypes.string,
  pictureUrl: PropTypes.string,
  snsAccounts: PropTypes.arrayOf(PropTypes.object),
  positions: PropTypes.arrayOf(PropTypes.object),
  languages: PropTypes.arrayOf(PropTypes.object),
  skills: PropTypes.arrayOf(PropTypes.object),
  educations: PropTypes.arrayOf(PropTypes.object),
  hobbies: PropTypes.arrayOf(PropTypes.object),
  customers: PropTypes.arrayOf(PropTypes.object),
  projects: PropTypes.arrayOf(PropTypes.object),
  cvPDF: PropTypes.string,
  tools: PropTypes.string,
};

Resume.defaultProps = {
  firstName: 'Stéphane',
  lastName: 'Monnot',
  emailAddress: 'roopeshb13@gmail.com',
  headline: 'Full Stack Engineer',
  summary:
    '♥ Microservice architecture lover ♥<br>Experienced Chief Technology Officer, Developer & Teacher with a demonstrated history of working in the internet industry. Skilled in PHP (Symfony & Laravel frameworks), TDD, continuous integration, WordPress, Linux System Administration, and Application Programming Interfaces. Strong engineering professional with a Licence focused in Web Development from Université Claude Bernard Lyon 1. My favourite stack : Laravel 5, Symfony 3, PHPUnit, PHPQA, Micro-services, Docker, ReactJS, ReactNative with continuous integration on Gitlab.',
  pictureUrl:
    'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAYqAAAAJGQ0YjYxNDI0LTEwOTMtNGVkNC1hNDIxLWYyNzNkMTYzNDMzNg.jpg',
  positions: [],
  languages: [],
  skills: [],
  educations: [],
  hobbies: [],
  customers: [],
  projects: [],
};

const decorators = flow([withTheme(), injectIntl]);

export default decorators(Resume);
