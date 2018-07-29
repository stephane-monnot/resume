import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-108830044-1');

class Analytics extends Component {
  constructor(props) {
    super(props);

    const { location } = props;

    // Initial page load - only fired once
    this.sendPageChange(location.pathname, location.search);
  }

  componentWillReceiveProps(nextProps) {
    // When props change, check if the URL has changed or not
    if (
      this.props.location.pathname !== nextProps.location.pathname ||
      this.props.location.search !== nextProps.location.search
    ) {
      this.sendPageChange(
        nextProps.location.pathname,
        nextProps.location.search,
      );
    }
  }

  sendPageChange(pathname, search = '') {
    const page = pathname + search;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

Analytics.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
};

export default Analytics;
