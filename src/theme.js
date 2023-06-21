import React from 'react';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconNodejs from 'react-devicon/nodejs/plain-wordmark'
import IconPython from 'react-devicon/python/original'
import ReactIcon from 'react-devicon/react/original';
import IconPostgresql from 'react-devicon/postgresql/original-wordmark'
import IconDjango from 'react-devicon/django/line'
import JavascriptIcon from 'react-devicon/javascript/plain';
import IconAmazonwebservices from 'react-devicon/amazonwebservices/original-wordmark'
import FacebookIcon from 'react-devicon/facebook/plain';
import GoIcon from 'react-devicon/go/plain';
import WordpressIcon from 'react-devicon/wordpress/plain';
import CordovaIcon from './components/Icons/Apachecordova';
import IconAngularjs from 'react-devicon/angularjs/plain'
import IconExpress from 'react-devicon/express/original'

const theme = {
  laravelColor: {
    style: {
      color: "#000"
    },
    className: 'vertical-timeline-element--laravel',
    icon: <IconNodejs />,
  },
  phpColor: {
    style: {
      background: '#6181b6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--php',
    icon: <IconPython />,
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
    icon: <IconPostgresql />,
  },
  railsColor: {
    style: {
      background: '#a62c46',
      color: '#fff',
    },
    className: 'vertical-timeline-element--rails',
    icon: <IconDjango />,
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
    icon: <IconDjango />,
  },
  cordovaColor: {
    style: {
      background: '#4CC2E4',
      color: '#fff',
    },
    className: 'vertical-timeline-element--cordova',
    icon: <CordovaIcon />,
  },
  wordpressColor: {
    style: {
      background: '#21759b',
      color: '#fff',
    },
    className: 'vertical-timeline-element--wordpress',
    icon: <WordpressIcon />,
  },
  facebookColor: {
    style: {
      background: '#4267B2',
      color: '#fff',
    },
    className: 'vertical-timeline-element--facebook',
    icon: <FacebookIcon />,
  },
  goColor: {
    style: {
      background: '#6AD7E5',
      color: '#fff',
    },
    className: 'vertical-timeline-element--go',
    icon: <GoIcon />,
  },
  othersColor: {
    style: {
      background: '#019bc6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--others',
    icon: <MoreHorizIcon />,
  },
  awsColor: {
    style: {
      background: '#800080',
      color: '#fff',
    },
    className: 'vertical-timeline-element--others',
    icon: <IconAmazonwebservices />,
  },
  nextColor: {
    style: {
      background: '#800080',
      color: '#fff',
    },
    className: 'vertical-timeline-element--others',
    icon: <IconAngularjs />,
  },
  expressColor: {
    style: {
      background: '#000',
      color: '#fff',
    },
    className: 'vertical-timeline-element--others',
    icon: <IconExpress />,
  },
};

export default theme;
