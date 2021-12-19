import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
