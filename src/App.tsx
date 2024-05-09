import 'reflect-metadata'
import './App.css';
import { initiateGame } from '@hology/core/gameplay';
import { HologyScene } from '@hology/react'
import { createRef, useEffect } from 'react';
import shaders from './shaders'
import actors from './actors'
import Game from './services/game'

function App() {
  return (
    <HologyScene gameClass={Game} sceneName='demo' dataDir='data' shaders={shaders} actors={actors}>
    </HologyScene>
  );
}

export default App;