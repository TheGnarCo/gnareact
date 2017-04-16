import React from 'react';

class ButtonCounter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      clickCount: 0,
    };

    this.updateClickCount = this.updateClickCount.bind(this);
  }

  updateClickCount () {
    this.setState({
      clickCount: this.state.clickCount + 1,
    });

    return false;
  }

  render () {
    return (
      <div>
        <p>I have been clicked {this.state.clickCount} times.</p>
        <button onClick={this.updateClickCount}>
          Click me!
        </button>
      </div>
    );
  }
}

export default ButtonCounter;
