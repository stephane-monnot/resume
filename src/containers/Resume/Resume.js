import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import Helmet from 'react-helmet';
import { injectIntl, intlShape } from 'react-intl';
import { withTheme } from 'material-ui/styles';
import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import LaravelIcon from 'react-devicon/laravel/plain'
import PhpIcon from 'react-devicon/php/plain'
import ReactIcon from 'react-devicon/react/original'
import RubyIcon from 'react-devicon/ruby/plain';
import RailsIcon from 'react-devicon/rails/plain';
import JavascriptIcon from 'react-devicon/javascript/plain';
import DockerIcon from 'react-devicon/docker/plain';

import ResumeAppBar from "../../components/ResumeAppBar/ResumeAppBar";
import ResumeHomeBlock from "../../components/ResumeHomeBlock/ResumeHomeBlock";
import ResumeAboutMeBlock from "../../components/ResumeAboutMeBlock/ResumeAboutMeBlock";
import ResumeWorkAndEducationBlock from "../../components/ResumeWorkAndEducationBlock/ResumeWorkAndEducationBlock";
import ResumeSkillsBlock from "../../components/ResumeSkillsBlock/ResumeSkillsBlock";
import ResumeProjectsBlock from "../../components/ResumeProjectsBlock/ResumeProjectsBlock";
import ResumeLanguagesAndHobbiesBlock from "../../components/ResumeLanguagesAndHobbiesBlock/ResumeLanguagesAndHobbiesBlock";
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

import './Resume.css';

class Resume extends Component {
  getSkillsByLanguages() {
    const { skills } = this.props;

    const skillsByLanguages = skills.reduce(function (obj, item) {
      if (item.language) {
        obj[item.language.name] = obj[item.language.name] || [];
        obj[item.language.name].push(item);
      }
      return obj;
    }, {});

    return Object.keys(skillsByLanguages).map(function (key) {
      return skillsByLanguages[key];
    });
  }

  render() {
    let fullName = `${this.props.firstName} ${this.props.lastName}`;
    let shortFullName = `${this.props.firstName} ${this.props.lastName}`;
    if (this.props.firstNameKana) {
      shortFullName = this.props.firstNameKana + this.props.lastNameKana;
      fullName += ' (' + this.props.firstNameKana + this.props.lastNameKana + ')';
    }

    const cv = this.props.cvPDF;

    const { theme } = this.props;
    const { formatMessage, formatDate } = this.props.intl;

    const primaryColor = theme.palette.primary[500];
    const secondaryColor = theme.palette.secondary[500];

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
      laravelColor: {
        style: {
          background: '#fd4f31',
          color: '#fff',
        },
        className: 'vertical-timeline-element--laravel',
        icon: <LaravelIcon />,
      },
      phpColor: {
        style: {
          background: '#6181b6',
          color: '#fff',
        },
        className: 'vertical-timeline-element--php',
        icon: <PhpIcon />,
      },
      reactColor: {
        style: {
          background: '#61DAFB',
          color: '#fff',
        },
        className: 'vertical-timeline-element--react',
        icon: <ReactIcon />,
      },
      rubyColor: {
        style: {
          background: '#d91404',
          color: '#fff',
        },
        className: 'vertical-timeline-element--ruby',
        icon: <RubyIcon />,
      },
      railsColor: {
        style: {
          background: '#a62c46',
          color: '#fff',
        },
        className: 'vertical-timeline-element--rails',
        icon: <RailsIcon />,
      },
      javascriptColor: {
        style: {
          background: '#F0DB4F',
          color: '#fff',
        },
        className: 'vertical-timeline-element--javascript',
        icon: <JavascriptIcon />,
      },
      dockerColor: {
        style: {
          background: '#019bc6',
          color: '#fff',
        },
        className: 'vertical-timeline-element--docker',
        icon: <DockerIcon />,
      },
      othersColor: {
        style: {
          background: '#019bc6',
          color: '#fff',
        },
        className: 'vertical-timeline-element--others',
        icon: <MoreHorizIcon />,
      }
    };

    return (
      <div className="Resume">
        <Helmet
          title={this.props.meta.title}
          meta={[
            {"name": "description", "content": this.props.meta.description},
            {"name": "keywords", "content": this.props.meta.keywords},
            {"property": "og:title", "content": this.props.meta.title},
            {"property": "twitter:title", "content": this.props.meta.title},
            {"property": "og:description", "content": this.props.meta.description},
          ]}
        />

        <ResumeAppBar/>

        <ResumeHomeBlock
          shortFullName={shortFullName}
          snAccounts={this.props.snAccounts}
          headline={this.props.headline}
          styles={styles}
        />

        <ResumeAboutMeBlock
          fullName={fullName}
          headline={this.props.headline}
          summary={this.props.summary}
          pictureUrl={this.props.pictureUrl}
          resumeUrl={cv}
          style={styles.phpColor.style}
        />

        <ResumeWorkAndEducationBlock
          workIconStyle={styles.primaryColor}
          educationIconStyle={styles.secondaryColor}
          positions={this.props.positions}
          educations={this.props.educations}
          formatMessage={formatMessage}
        />

        <ResumeSkillsBlock
          skills={skills}
          tools={this.props.tools}
          styles={styles}
        />


        <ResumeProjectsBlock
          projects={this.props.projects}
          styles={styles}
          formatDate={formatDate}
        />

        <ResumeLanguagesAndHobbiesBlock
          languages={this.props.languages}
          hobbies={this.props.hobbies}
          hobbyCardStyle={styles.primaryColor}
        />

        <BottomNavigation />
      </div>
    );
  }
}

Resume.propTypes = {
  theme: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

Resume.defaultProps = {
  firstName: 'Stéphane',
  lastName: 'Monnot',
  emailAddress: 'monnot.stephane@gmail.com',
  headline: 'Full-stack web engineer',
  summary: '♥ Microservice architecture lover ♥<br>Experienced Chief Technology Officer, Developer & Teacher with a demonstrated history of working in the internet industry. Skilled in PHP (Symfony & Laravel frameworks), TDD, continuous integration, WordPress, Linux System Administration, and Application Programming Interfaces. Strong engineering professional with a Licence focused in Web Development from Université Claude Bernard Lyon 1. My favourite stack : Laravel 5, Symfony 3, PHPUnit, PHPQA, Micro-services, Docker, ReactJS, ReactNative with continuous integration on Gitlab.',
  pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAYqAAAAJGQ0YjYxNDI0LTEwOTMtNGVkNC1hNDIxLWYyNzNkMTYzNDMzNg.jpg',
  dateOfBirth: '1987-09-16',
  mainAddress: 'Noda, Osaka, Japan',
  websites: [],
  phoneNumbers: [],
  imAccounts: [],
  locations: [],
  positions: [],
  interests: '',
  languages: [],
  skills: [],
  educations: [],
  volunteer: [],
  hobbies: [],
  projects: [],
}

const decorators = flow([
  withTheme,
  injectIntl
]);

export default decorators(Resume);
