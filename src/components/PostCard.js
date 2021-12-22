import React from "react";
import { Card } from "semantic-ui-react";

function PostCard() {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Username</Card.Header>
        <Card.Meta>10 days ago</Card.Meta>
        <Card.Description>Description</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
