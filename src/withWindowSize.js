import React from 'react';
import ReactDOM from 'react-dom'

function withWindowSize(WrappedComponent) {
  return class WindowSizeProvider extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        innerWidth: 1280,
        innerHeight: 800,
      }
    }

    onWindowResize = (e) => {
      if (!this.mounted) return;

      const node = ReactDOM.findDOMNode(this);

      this.setState({
        innerWidth: node.offsetWidth,
        innerHeight: window.innerHeight,
      })
    }

    componentDidMount() {
      this.mounted = true
      window.addEventListener('resize', this.onWindowResize)
      this.onWindowResize()
    }

    componentWillUnmount() {
      this.mounted = false
      window.removeEventListener('resize', this.onWindowResize);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
        />
      )
    }
  }
}

export default withWindowSize;