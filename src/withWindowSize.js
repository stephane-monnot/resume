import React from 'react';
import ReactDOM from 'react-dom';

function withWindowSize(WrappedComponent) {
  return class WindowSizeProvider extends React.Component {
    componentWillMount() {
      this.setState({
        innerWidth: 1280,
        innerHeight: 800,
      });
    }

    componentDidMount() {
      this.mounted = true;
      window.addEventListener('resize', this.onWindowResize);
      this.onWindowResize();
    }

    componentWillUnmount() {
      this.mounted = false;
      window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize = () => {
      if (!this.mounted) return;

      const node = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

      this.setState({
        innerWidth: node.getBoundingClientRect().width,
        innerHeight: node.getBoundingClientRect().height,
      });
    };

    render() {
      return (
        <WrappedComponent
          ref={node => {
            this.node = node;
          }}
          {...this.props}
          {...this.state}
        />
      );
    }
  };
}

export default withWindowSize;
