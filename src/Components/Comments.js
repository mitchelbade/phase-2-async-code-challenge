import React from 'react'

function Comments({comments, setComments}) {

  const createdComments = comments.map(c => c.content)

  return (
    <div>Comments: <br/>
        {createdComments}
    </div>
  )
}

export default Comments;