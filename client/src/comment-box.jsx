import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'

import CommentList from './comment-list.jsx'
import CommentForm from './comment-form.jsx'

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then((response) => {
        this.setState({data: response.data});
      })
      .catch((err) => {
        console.log(this.props.url, err);
      })
  }

  handleCommentSubmit(comment) {
    const content = document.querySelector('meta[name="csrf-token"]').content;

    axios.request({
        url: this.props.url,
        method: 'post',
        headers: {'X-CSRF-Token': content},
        data: comment
      })
      .then((response) => {
        this.setState({data: response.data})
      })
      .catch((err) => {
        console.log(this.props.url, err);
      })
      e.preventDefault();
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      </div>
    );
  }
}
