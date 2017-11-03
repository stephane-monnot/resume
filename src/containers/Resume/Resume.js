import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import { withTheme } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import Icon from 'material-ui/Icon';
import LaravelIcon from 'react-devicon/laravel/plain'
import PhpIcon from 'react-devicon/php/plain'
import ReactIcon from 'react-devicon/react/original'
import RubyIcon from 'react-devicon/ruby/plain';
import JavascriptIcon from 'react-devicon/javascript/plain';
import DockerIcon from 'react-devicon/docker/plain';
import Helmet from 'react-helmet';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import GridBackground from '../../components/GridBackground/GridBackground';
import DotsProgress from '../../components/DotsProgress/DotsProgress';

import './Resume.css';
import 'react-vertical-timeline-component/style.min.css';

class Resume extends Component {

  constructor() {
    super();
    this.renderSkillsCategory = this.renderSkillsCategory.bind(this);
  }

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

  renderSkillsCategory(skillCategory, i) {
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
      <Card key={i} className="Resume-skills-category" style={i & 1 ? styles.secondaryColor : styles.primaryColor}>
        <CardContent>
          <h3>{skillCategory[0].category.name}</h3>

          <div className="Resume-skills-category-skills">
            {skillCategory.map((skill, j) =>
              <div className="Resume-skill" key={i + '-' + j}>
                <div className="Resume-skillTitle">{skill.name}</div>
              </div>
            )}
          </div>

        </CardContent>
      </Card>
    );
  }

  renderButtons(links) {
    if (!(links instanceof Array)) {
      return '';
    }

    return (
      <div className="Resume-project-links">
        {links.map((link, i) =>
          <Button key={i} raised color="default" target="_blank" href={link.url}>{link.text}</Button>
        )}
      </div>
    );
  }

  renderTechnologies(technologies) {
    if (!(technologies instanceof Array)) {
      return '';
    }

    return (
      <div className="Resume-project-technologies">
        {technologies.map((technology, j) =>
          <Chip
            key={j}
            label={technology.name}
          />
        )}
      </div>
    );
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
        <Helmet title={formatMessage({ id: 'Resume.resume', defaultMessage: 'Resume' })} />

        <ScreenBlock id="Resume-home">
          <div className="Resume-home-headline-container">
            <div className="Resume-home-headline">
              <h1>
                <FormattedMessage
                  id='Resume.im'
                  defaultMessage="I'm {fullName}"
                  values={{ fullName: shortFullName }}
                />
              </h1>
              <h2>{this.props.headline}</h2>
            </div>

          </div>
          <div className="Resume-home-squares">
            <GridBackground>
              <div style={{ ...styles.laravelColor.style }}>
                {styles.laravelColor.icon}
              </div>
              <div style={{ ...styles.phpColor.style }}>
                {styles.phpColor.icon}
              </div>
              <div style={{ ...styles.reactColor.style }}>
                {styles.reactColor.icon}
              </div>
              <div style={{ ...styles.rubyColor.style }}>
                {styles.rubyColor.icon}
              </div>
              <div style={{ ...styles.javascriptColor.style }}>
                {styles.javascriptColor.icon}
              </div>
              <div style={{ ...styles.dockerColor.style }}>
                {styles.dockerColor.icon}
              </div>
            </GridBackground>
          </div>

        </ScreenBlock>

        <ScreenBlock id="Resume-aboutMe" style={styles.phpColor.style}>
          <div className="container">

            <div className="heading">
              <h2>
                <FormattedMessage
                  id='Resume.aboutMe'
                  defaultMessage='About me'
                />
              </h2>
              <p>
                <FormattedMessage
                  id='Resume.aboutMeSubtitle'
                  defaultMessage='A small introduction about myself'
                />
              </p>
            </div>

            <div className="Resume-aboutMe-content">
              <div className="Resume-aboutMe-description">
                <h3>{fullName}</h3>
                <h4>{this.props.headline}</h4>

                <p className="Resume-summary" dangerouslySetInnerHTML={{ __html: this.props.summary }} />

                <br />
                <br />

                <div className="Resume-aboutMe-links">
                  <Button raised color="primary" target="_blank" href={cv}>
                    <FormattedMessage
                      id='Resume.download'
                      defaultMessage='Download'
                    />
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button href="mailto:monnot.stephane@gmail.com" raised color="accent">
                    <FormattedMessage
                      id='Resume.hireMe'
                      defaultMessage='Hire me'
                    />
                  </Button>
                </div>
              </div>


              <div className="Resume-aboutMe-profilePicture Resume-profilePicture">
                <img alt="" src={this.props.pictureUrl} />
              </div>
            </div>

          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-work">
          <div className="container">
            <div className="heading">
              <h2>
                <FormattedMessage
                  id='Resume.workExperienceAndEducation'
                  defaultMessage='Work experience & Education'
                />
              </h2>
              <p>
                <FormattedMessage
                  id='Resume.workExperienceAndEducationSubtitle'
                  defaultMessage='My previous jobs and my qualifications.'
                />
              </p>
            </div>

            <VerticalTimeline>
              {this.props.positions.map((position, i) =>
                <VerticalTimelineElement
                  className="Resume-position"
                  key={i}
                  icon={<WorkIcon />}
                  iconStyle={styles.primaryColor}
                  date={position.startDate + ' – ' + position.endDate + ' (' + ((position.endDate === 'Today' || position.endDate === 'Aujourd\'hui' || position.endDate === '今' ? (new Date()).getFullYear() : parseInt(position.endDate, 10)) - parseInt(position.startDate, 10)) + formatMessage({
                    id: 'Resume.years',
                    defaultMessage: ' years'
                  }) + ')'}
                >
                  <h3 className="vertical-timeline-element-title">{position.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{position.company}</h4>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: position.summary }}></span>
                  </p>
                </VerticalTimelineElement>
              )}
            </VerticalTimeline>

            <div id="Resume-education">
              <VerticalTimeline>
                {this.props.educations.map((education, i) =>
                  <VerticalTimelineElement
                    position={i % 2 ? 'left' : 'right'}
                    id=""
                    className="Resume-position"
                    key={i}
                    icon={<SchoolIcon />}
                    iconStyle={styles.secondaryColor}
                    date={education.startDate + ' – ' + education.endDate + ' (' + ((education.endDate === 'Today' || education.endDate === 'Aujourd\'hui' || education.endDate === '今' ? (new Date()).getFullYear() : parseInt(education.endDate, 10)) - parseInt(education.startDate, 10)) + formatMessage({
                      id: 'Resume.years',
                      defaultMessage: ' years'
                    }) + ')'}
                  >
                    <h3 className="vertical-timeline-element-title">{education.fieldOfStudy}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{education.degree}</h4>
                    <p>
                      <span dangerouslySetInnerHTML={{ __html: education.activities }}></span>
                    </p>
                  </VerticalTimelineElement>
                )}
              </VerticalTimeline>
            </div>
          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-skills">
          <div className="container">
            <div className="heading">
              <h2>
                <FormattedMessage
                  id='Resume.skills'
                  defaultMessage='Skills'
                />
              </h2>
              <p>
                <FormattedMessage
                  id='Resume.skillsSubtitle'
                  defaultMessage='I can say i’m quite good at'
                />
              </p>
            </div>

            <div className="Resume-skills">
              {skills.map((skillCategory, i) =>
                <Card key={i}>
                  <CardContent>
                    <Avatar style={{
                      ...styles[`${skillCategory[0].language.style}Color`].style,
                      width: 100,
                      height: 100,
                      margin: '0 auto'
                    }}>
                      {styles[`${skillCategory[0].language.style}Color`].icon}
                    </Avatar>
                    <h3 style={{ color: styles[`${skillCategory[0].language.style}Color`].style.background }}>
                      {skillCategory[0].language.name}
                    </h3>
                    {skillCategory.map((skill, j) =>
                      <div key={j}>
                        {skill.name}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

            </div>

            <br />

            <div className="heading">
              <h2>
                <FormattedMessage
                  id='Resume.tools'
                  defaultMessage='Tools'
                />
              </h2>
              <p>
                <FormattedMessage
                  id='Resume.toolsSubtitle'
                  defaultMessage='My favorites tools'
                />
              </p>
            </div>

            <div className="Resume-tools">
              <p dangerouslySetInnerHTML={{ __html: this.props.tools }} />
            </div>
          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-projects">
          <div className="container">
            <div className="heading">
              <h2>
                <FormattedMessage
                  id='Resume.projectsAndDevelopments'
                  defaultMessage='Projects & developments'
                />
              </h2>
              <p>
                <FormattedMessage
                  id='Resume.projectsAndDevelopmentsSubtitle'
                  defaultMessage='Showcase of my latest works, projects and developments.'
                />
              </p>
            </div>

            <VerticalTimeline>
              {this.props.projects.map((project, i) =>
                <VerticalTimelineElement
                  style={{ borderTop: '3px solid ' + styles[project.subcategory + 'Color'].border }}
                  className={"Resume-project " + styles[project.subcategory + 'Color'].className}
                  key={i}
                  icon={styles[project.subcategory + 'Color'].icon}
                  iconStyle={styles[project.subcategory + 'Color'].style}
                  date={formatDate(new Date(project.date).getTime(), {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric'
                  })}
                >
                  {this.renderTechnologies(project.technologies)}
                  <h3 className="vertical-timeline-element-title">{project.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: project.content }}></span>
                  </p>
                  <br />
                  {this.renderButtons(project.links)}
                </VerticalTimelineElement>
              )}
            </VerticalTimeline>
          </div>
        </ScreenBlock>

        <ScreenBlock id="Resume-languages">
          <div className="container">
            <div className="heading">
              <h2>
                <FormattedMessage
                  id='Resume.languages'
                  defaultMessage='Languages'
                />
              </h2>
              <p>
                <FormattedMessage
                  id='Resume.languagesSubtitle'
                  defaultMessage='I speak'
                />
              </p>
            </div>

            <div className="Resume-languages">
              {this.props.languages.map((language, i) =>
                <div className="Resume-language" key={i}>
                  <div className="Resume-languageTitleAndLevel">
                    <span className="Resume-languageTitle">{language.name}</span><br />
                    <span className="Resume-languageLevel"> {language.level}</span>
                  </div>
                  <DotsProgress maxNumberOfDots={10} numberOfActiveDots={language.levelNumber} />
                </div>
              )}
            </div>
          </div>

          <div id="Resume-hobbies">
            <div className="heading">
              <h2>
                <FormattedMessage
                  id='Resume.interests'
                  defaultMessage='Interests'
                />
              </h2>
              <p>
                <FormattedMessage
                  id='Resume.interestsSubtitle'
                  defaultMessage='What I like'
                />
              </p>
            </div>
          </div>

          <div className="Resume-hobbies">
            {this.props.hobbies.map((hobby, i) =>
              <Card key={i} style={styles.primaryColor} className="Resume-hobby">
                <CardContent>
                  <Icon>{hobby.icon}</Icon>
                  <h4>{hobby.name}</h4>
                </CardContent>
              </Card>
            )}
          </div>
        </ScreenBlock>

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
