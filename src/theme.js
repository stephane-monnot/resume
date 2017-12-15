import React from 'react';

import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import LaravelIcon from 'react-devicon/laravel/plain'
import PhpIcon from 'react-devicon/php/plain'
import ReactIcon from 'react-devicon/react/original'
import RubyIcon from 'react-devicon/ruby/plain';
import RailsIcon from 'react-devicon/rails/plain';
import JavascriptIcon from 'react-devicon/javascript/plain';
import DockerIcon from 'react-devicon/docker/plain';
import CordovaIcon from './components/Icons/Apachecordova';

const theme = {
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
  cordovaColor: {
    style: {
      background: '#4CC2E4',
      color: '#fff',
    },
    className: 'vertical-timeline-element--cordova',
    icon: <CordovaIcon />,
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

export default theme;
