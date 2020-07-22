import React from "react"
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    };
  }

  addLike = () => {
    let newCount = this.state.likes + 1;
    //https://us-central1-elegant-clarity-283921.cloudfunctions.net/upvote
    this.setState({
      likes: newCount
    });
  };

  render() {
    return <a
      className="icon-fa-link"
      onClick={this.addLike}
      id={this.props.itemId}
    >
      {this.state.likes}
      <FontAwesomeIcon
        className={`icon-hand icon-fa`}
        icon={faHandPointUp}
      />
    </a>
  }
}

export default LikeButton;
