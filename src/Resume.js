import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withTheme } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import CodeIcon from 'material-ui-icons/Code';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import SettingsIcon from 'material-ui-icons/Settings';
import LaravelIcon from 'react-devicon/laravel/plain'
import PhpIcon from 'react-devicon/php/plain'
import ReactIcon from 'react-devicon/react/original'
import LanguageIcon from 'material-ui-icons/Language';
import ToysIcon from 'material-ui-icons/Toys';
import Helmet from 'react-helmet';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import BottomNavigation from './BottomNavigation';
import './Resume.css';
import 'react-vertical-timeline-component/style.min.css';
import translate from './i18n/Translate';

class Resume extends Component {

  static propTypes = {
    strings: PropTypes.object,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    positions: PropTypes.arrayOf.object
  };

  static defaultProps = {
    strings: {
      download: 'Download'
    },
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
  };

  constructor() {
    super();
    this.renderSkillsCategory = this.renderSkillsCategory.bind(this);
  }

  getSkillsByCategories() {
    const { skills } = this.props;

    const skillsByCategories = skills.reduce(function (obj, item) {
      obj[item.category.name] = obj[item.category.name] || [];
      obj[item.category.name].push(item);
      return obj;
    }, {});

    return Object.keys(skillsByCategories).map(function (key) {
      return skillsByCategories[key];
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
      <div>
        {links.map((link, i) =>
          <span>
              <Button raised color="default" target="_blank" href={link.url}>{link.text}</Button>&nbsp;
            </span>
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
            label={technology.name}
          />
        )}
      </div>
    );
  }

  render() {
    let fullName = `${this.props.firstName} ${this.props.lastName}`;
    if (this.props.firstNameKana) {
      fullName += ' (' + this.props.firstNameKana + ' ' + this.props.lastNameKana + ')'
    }

    const cv = this.props.cvPDF;

    const { theme } = this.props;
    const primaryColor = theme.palette.primary[500];
    const secondaryColor = theme.palette.secondary[500];

    const skills = this.getSkillsByCategories();

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
        icon: <LaravelIcon />,
      },
      phpColor: {
        style: {
          background: '#6181b6',
          color: '#fff',
        },
        icon: <PhpIcon />,
      },
      reactColor: {
        style: {
          background: '#61DAFB',
          color: '#fff',
        },
        icon: <ReactIcon />,
      },
    };

    return (
      <div className="Resume">
        <Helmet title={this.props.strings.resume} />

        <div className="container">

          <Card className="Resume-header Card-md">
            <CardContent>
              <div id="Resume-home" className="Resume-profilePicture">
                <img alt="" src={this.props.pictureUrl} />
              </div>
              <Typography className="Resume-fullName" type="headline" component="h3">
                {fullName}
              </Typography>

              <Typography className="Resume-headline" type="body1">
                {this.props.headline}
              </Typography>

              <Typography className="Resume-mainAddress">
                {this.props.mainAddress}
              </Typography>

              <br />
              <Divider />
              <br />

              <Typography className="Resume-summary" component="p"
                          dangerouslySetInnerHTML={{ __html: this.props.summary }} />
            </CardContent>
            <CardActions className="Resume-actions">
              <Button raised color="primary" target="_blank" href={cv}>{this.props.strings.download}</Button>
              <Button href="mailto:monnot.stephane@gmail.com" raised color="accent">{this.props.strings.hireMe}</Button>
            </CardActions>
          </Card>

          <h2 id="Resume-work">{this.props.strings.workExperienceAndEducation}</h2>

          <VerticalTimeline>
            {this.props.positions.map((position, i) =>
              <VerticalTimelineElement
                className="Resume-position"
                key={i}
                icon={<WorkIcon />}
                iconStyle={styles.primaryColor}
                date={position.startDate + ' – ' + position.endDate + ' (' + ((position.endDate === 'Today' || position.endDate === 'Aujourd\'hui' || position.endDate === '今' ? (new Date()).getFullYear() : parseInt(position.endDate, 10)) - parseInt(position.startDate, 10)) + this.props.strings.years + ')'}
              >
                <h3 className="vertical-timeline-element-title">{position.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{position.company}</h4>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: position.summary }}></span>
                </p>
              </VerticalTimelineElement>
            )}

            {this.props.educations.map((education, i) =>
              <VerticalTimelineElement
                id="Resume-education"
                className="Resume-position"
                key={i}
                icon={<SchoolIcon />}
                iconStyle={styles.secondaryColor}
                date={education.startDate + ' – ' + education.endDate + ' (' + ((education.endDate === 'Today' || education.endDate === 'Aujourd\'hui' || education.endDate === '今' ? (new Date()).getFullYear() : parseInt(education.endDate, 10)) - parseInt(education.startDate, 10)) + this.props.strings.years + ')'}
              >
                <h3 className="vertical-timeline-element-title">{education.fieldOfStudy}</h3>
                <h4 className="vertical-timeline-element-subtitle">{education.degree}</h4>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: education.activities }}></span>
                </p>
              </VerticalTimelineElement>
            )}
          </VerticalTimeline>

          <h2 id="Resume-skills"><SettingsIcon /> {this.props.strings.skills}</h2>

          <div className="Resume-skills">
            {skills.map(this.renderSkillsCategory)}
          </div>

          <h2 id="Resume-languages"><LanguageIcon /> {this.props.strings.languages}</h2>
          <ul className="Resume-languages">
            {this.props.languages.map((language, i) =>
              <li className="Resume-language" key={i}>
                <span className="Resume-languageTitle">{language.name}</span> :
                <span className="Resume-languageLevel"> {language.level}</span>
              </li>
            )}
          </ul>

          <h2 id="Resume-hobbies"><ToysIcon /> {this.props.strings.hobbies}</h2>
          <ul className="Resume-languages">
            {this.props.hobbies.map((hobby, i) =>
              <li className="Resume-language" key={i}>
                <span className="Resume-hobbyTitle">{hobby.name}</span>
              </li>
            )}
          </ul>

          <h2 id="Resume-projects"><CodeIcon /> {this.props.strings.projectsAndDevelopments}</h2>
          <VerticalTimeline>
            {this.props.projects.map((project, i) =>
              <VerticalTimelineElement
                className="Resume-project"
                key={i}
                icon={styles[project.subcategory + 'Color'].icon}
                iconStyle={styles[project.subcategory + 'Color'].style}
                date={project.date}
              >
                {this.renderTechnologies(project.technologies)}
                <h3 className="vertical-timeline-element-title">{project.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: project.content }}></span>
                  <br /><br />
                  {this.renderButtons(project.links)}
                </p>
              </VerticalTimelineElement>
            )}
          </VerticalTimeline>
        </div>
        <BottomNavigation />
      </div>
    );
  }
}

Resume.propTypes = {
  theme: PropTypes.object.isRequired,
};

const decorators = flow([
  withTheme,
  translate('Resume')
]);

export default decorators(Resume);
