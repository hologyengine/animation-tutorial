
import { CameraActor, SpawnPoint } from '@hology/core/gameplay/actors';
import { inject, Service, World, GameInstance, ViewController } from '@hology/core/gameplay';
import Character from '../actors/character';
import Character2 from '../actors/character2';
import Character3 from '../actors/character3';

@Service()
class Game extends GameInstance {
  private world = inject(World)
  private view = inject(ViewController)

  async onStart() {
    const camera = this.world.findActorByType(CameraActor)
    this.view.setCamera(camera)    

    const spawnPoint = this.world.findActorByType(SpawnPoint)
    spawnPoint.spawnActor(Character3)
  }
}

export default Game
