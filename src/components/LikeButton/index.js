import React from "react"

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    };
  }

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
  };

  render() {
    return <button onClick={this.addLike} id={this.props.itemId}><img src={"../../../../_assets/icons/on-hand.gif"}></img>{this.state.likes} </button>
  }
}

export default LikeButton;
