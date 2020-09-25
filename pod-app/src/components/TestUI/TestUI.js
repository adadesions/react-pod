import React from 'react';

import { Grid, Segment, Icon } from 'semantic-ui-react'

const TestUI = () => (
    <Grid columns='equal'>
        <Grid.Column>
            <Segment>
                <Icon name='home' size='large' />
            </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
            <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment>3</Segment>
        </Grid.Column>
    </Grid>
)

export default TestUI