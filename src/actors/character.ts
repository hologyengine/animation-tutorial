
import { Actor, AssetLoader, BaseActor, inject } from '@hology/core/gameplay';
import * as THREE from 'three';

@Actor()
class Character extends BaseActor {
  private assetLoader = inject(AssetLoader)
  private mixer: THREE.AnimationMixer

  async onInit(): Promise<void> {
    const model = await this.assetLoader.getModelByAssetName('character-human')
    const mesh = model.scene
    this.object.add(mesh)    

    const mixer = new THREE.AnimationMixer(mesh)
    const clip = THREE.AnimationClip.findByName(model.animations, 'idle')
    const action = mixer.clipAction(clip)
    action.play()

    this.mixer = mixer
  }

  onUpdate(deltaTime: number): void {
    this.mixer.update(deltaTime)
  }

}

export default Character