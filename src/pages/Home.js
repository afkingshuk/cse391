import React from "react";
import { Grid, Transition } from "semantic-ui-react";

import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

function Home() {
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {(
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {(
          <Transition.Group>
            {(
                <Grid.Column style={{ marginBottom: 20 }}>
                  <PostCard />
                </Grid.Column>
              )}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
