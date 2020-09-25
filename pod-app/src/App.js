import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import { Grid } from 'semantic-ui-react'
import MenuContrainer from './components/MenuBar/MenuContainer';
import CanvasContainer from './components/Canvas/CanvasContainer';

function App() {
  return (
    <div>
      <Grid.Row>
        <MenuContrainer></MenuContrainer>
      </Grid.Row>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column width={4}>
          a
          </Grid.Column>

          <Grid.Column width={8}>
            <CanvasContainer></CanvasContainer>
          </Grid.Column>
          <Grid.Column width={4}>
            c
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

  );
}

export default App;
