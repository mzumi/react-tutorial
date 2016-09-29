import React from 'react'
import { render } from 'react-dom'
import CommentBox from './comment-box.jsx'

render(
  <CommentBox url="/comments" pollInterval={2000000} />,
  document.getElementById('container')
)