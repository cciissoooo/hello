import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'
import { MarioKartCrash } from './MarioKart'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {newEvent: null};
  }
  
  handleClick = () => {
    this.setState({
      newEvent: {
        id: 0,
        title: 'New Event',
      }
    });
  };

  handleSubmit = (event) => {
    this.props.addPost(this.state.newEvent.id, this.state.newEvent.title, this.state.newEvent.body);
    event.preventDefault();
    this.props.history.push('/');
    this.state.newEvent = null;
  }

  handleDescriptionChange = (event) => {
    this.state.newEvent.body = event.target.value;
  }

  newEvent() {
    if (this.state.newEvent) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Description:
            <textarea type={this.state.newEvent.body} onChange={this.handleDescriptionChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  addEvent() {
    return (
    <div className= "center">
      <button className = "btn purple lighten-3" onClick={this.handleClick}>
        Add Event
      </button>
    </div>
    )
  };
  render() {
    console.log('in render', this.props, this.state);

    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src="img/mushroom.png" alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title purple-text text-lighten-3">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
            <button className = "btn purple lighten-3" onClick={this.handleClick}>
              <span>x</span>
            </button>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <MarioKartCrash />
          {/* {this.newEvent()} */}
          {/* {this.addEvent()} */}
          {/* <h4 className="center">Home</h4> */}
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (id, title, body) => {
      dispatch(addPost(id, title, body))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)