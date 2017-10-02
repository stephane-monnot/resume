import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withTheme } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import SettingsIcon from 'material-ui-icons/Settings';
import LanguageIcon from 'material-ui-icons/Language';

import Timeline from './VerticalTimeline/Timeline';
import TimelineElement from './VerticalTimeline/TimelineElement';
// import BottomNavigation from './BottomNavigation';
import './Resume.css';
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
    websites: [
      {
        type: 'Linkedin',
        url: 'https://www.linkedin.com/in/monnotnakatsuji/'
      }
    ],
    phoneNumbers: [
      {
        type: 'Work',
        number: '+33 (0)6 73 83 21 42'
      },
      {
        type: 'Personal',
        number: '+33 (0)6 73 83 21 42'
      }
    ],
    imAccounts: [
      {
        type: 'Line',
        name: 'shinbuntu'
      },
      {
        type: 'Skype',
        name: 'monnot.stephane'
      }
    ],
    locations: [
      {
        name: 'Osaka',
        country: 'Japan',
        isCurrent: true
      },
      {
        name: 'Lyon',
        country: 'France'
      }
    ],
    positions: [
      {
        title: 'Full-stack web engineer',
        summary: 'PHP/MySQL/Javascript development<br />Laravel 5 | Symfony 3 | Vuejs | ReactJS | Docker | CI',
        startDate: '2010',
        endDate: 'Today',
        isCurrent: true,
        company: 'NanokaWeb'
      },
      {
        title: 'Trainer',
        summary: 'Intervened on the web development<br />PHP (Basics, OOP, Framework Laravel) | MySQL',
        startDate: '2016',
        endDate: 'Today',
        isCurrent: true,
        company: 'Sup’ La Mache'
      },
      {
        title: 'Senior web dev & CTO / Lead developer',
        summary: 'PHP/MySQL/Javascript development <br />Solire Framework | Jquery | AngularJS',
        startDate: '2009',
        endDate: '2017',
        isCurrent: true,
        company: 'NanokaWeb'
      }
    ],
    interests: '',
    languages: [
      {
        name: 'French',
        level: 'Native'
      },
      {
        name: 'English',
        level: 'Professional working proficiency'
      },
      {
        name: 'Japanese',
        level: 'Professional working proficiency'
      },
      {
        name: 'Korean',
        level: 'Elementary proficiency'
      }
    ],
    skills: [
      {
        name: 'PHP OOP',
        category: {
          name: 'Languages'
        }
      },
      {
        name: 'HTML5',
        category: {
          name: 'Languages'
        }
      },
      {
        name: 'SQL (MYSQL)',
        category: {
          name: 'Languages'
        }
      },
      {
        name: 'CSS3',
        category: {
          name: 'Languages'
        }
      },
      {
        name: 'Javascript ES6',
        category: {
          name: 'Languages'
        }
      },
      {
        name: 'Laravel 5',
        category: {
          name: 'Frameworks / SDK / CMS'
        }
      },
      {
        name: 'SYMFONY 2 & 3',
        category: {
          name: 'Frameworks / SDK / CMS'
        }
      },
      {
        name: 'Facebook SDK',
        category: {
          name: 'Frameworks / SDK / CMS'
        }
      },
      {
        name: 'REACTJS/REDUX',
        category: {
          name: 'Frameworks / SDK / CMS'
        }
      },
      {
        name: 'REACTNATIVE',
        category: {
          name: 'Frameworks / SDK / CMS'
        }
      },
      {
        name: 'BOOTSTRAP',
        category: {
          name: 'Frameworks / SDK / CMS'
        }
      },
      {
        name: 'JQUERY',
        category: {
          name: 'Frameworks / SDK / CMS'
        }
      },
      {
        name: 'Wordpress',
        category: {
          name: 'Frameworks / SDK / CMS'
        }
      },
      {
        name: 'Linux',
        category: {
          name: 'Tools'
        }
      },
      {
        name: 'JIRA/Redmine',
        category: {
          name: 'Tools'
        }
      },
      {
        name: 'GIT',
        category: {
          name: 'Tools'
        }
      },
      {
        name: 'Jenkins/Gitlab-CI',
        category: {
          name: 'Tools'
        }
      },
      {
        name: 'Docker',
        category: {
          name: 'Tools'
        }
      },
      {
        name: 'GITLAB/GITHUB',
        category: {
          name: 'Tools'
        }
      },
    ],
    educations: [
      {
        schoolName: 'Claude Bernard University Lyon 1',
        fieldOfStudy: 'Metinet',
        startDate: '2009',
        endDate: '2010',
        degree: 'License',
        activities: 'Database, PHP, Flash, Java, English, Communication, Javascript'
      },
      {
        schoolName: 'Joseph Marie Carriat high school',
        fieldOfStudy: 'Business informatics',
        startDate: '2007',
        endDate: '2009',
        degree: 'Brevet de technicien supérieur (BTS)',
        activities: 'Programming, English, Mathematics, Management'
      }
    ],
    volunteer: [
      {
        name: '',
      }
    ],
    hobbies: [
      {
        name: '',
      }
    ],
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

    return Object.values(skillsByCategories);
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

  render() {
    let fullName = `${this.props.firstName} ${this.props.lastName}`;
    if (this.props.firstNameKana) {
      fullName += ' (' + this.props.firstNameKana + ' ' + this.props.lastNameKana + ')'
    }

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
    };

    return (
      <div className="Resume">
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
              <Divider/>
              <br />

              <Typography className="Resume-summary" component="p"
                          dangerouslySetInnerHTML={{ __html: this.props.summary }} />
            </CardContent>
            <CardActions className="Resume-actions">
              <Button raised color="primary">{ this.props.strings.download }</Button>
              <Button raised color="accent">{ this.props.strings.hireMe }</Button>
            </CardActions>
          </Card>

          <h2 id="Resume-work">{ this.props.strings.workExperienceAndEducation }</h2>

          <Timeline>
            {this.props.positions.map((position, i) =>
              <TimelineElement className="Resume-position" key={i}
                               title={position.title} subtitle={position.company}
                               content={position.summary} icon={<WorkIcon />}
                               iconStyle={styles.primaryColor}
                               date={position.startDate + ' – ' + position.endDate + ' (' + ((position.endDate === 'Today' || position.endDate === 'Aujourd\'hui' || position.endDate === '今' ? (new Date()).getFullYear() : parseInt(position.endDate, 10)) - parseInt(position.startDate, 10)) + this.props.strings.years + ')'}
                               color="red"
              />
            )}

            {this.props.educations.map((education, i) =>
              <TimelineElement id="Resume-education" className="Resume-position" key={i}
                               title={education.fieldOfStudy} subtitle={education.degree}
                               content={education.activities} icon={<SchoolIcon />}
                               iconStyle={styles.secondaryColor}
                               date={education.startDate + ' – ' + education.endDate + ' (' + ((education.endDate === 'Today' || education.endDate === 'Aujourd\'hui' || education.endDate === '今' ? (new Date()).getFullYear() : parseInt(education.endDate, 10)) - parseInt(education.startDate, 10)) + this.props.strings.years + ')'}
                               color="red"
              />
            )}
          </Timeline>

          <h2 id="Resume-skills"><SettingsIcon /> { this.props.strings.skills }</h2>

          <div className="Resume-skills">
            {skills.map(this.renderSkillsCategory)}
          </div>

          <h2 id="Resume-languages"><LanguageIcon /> { this.props.strings.languages }</h2>
          <ul className="Resume-languages">
            {this.props.languages.map((language, i) =>
                <li className="Resume-language" key={i}>
                  <span className="Resume-languageTitle">{language.name}</span> :
                  <span className="Resume-languageLevel"> {language.level}</span>
                </li>
            )}
          </ul>
        </div>
        {/*<BottomNavigation />*/}
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
