
import { CameraActor, SpawnPoint } from '@hology/core/gameplay/actors';
import { inject, Service, World, GameInstance, ViewController } from '@hology/core/gameplay';
import Character from '../actors/character';

@Service()
class Game extends GameInstance {
  private world = inject(World)
  private view = inject(ViewController)

  async onStart() {
    const camera = this.world.findActorByType(CameraActor)
    this.view.setCamera(camera)    

    const spawnPoint = this.world.findActorByType(SpawnPoint)
    spawnPoint.spawnActor(Character)
  }
}

export default Game
