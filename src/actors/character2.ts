
import { Actor, AssetLoader, BaseActor, attach, inject } from '@hology/core/gameplay';
import { CharacterAnimationComponent } from '@hology/core/gameplay/actors';
import * as THREE from 'three';

@Actor()
class Character2 extends BaseActor {
  private assetLoader = inject(AssetLoader)
  private characterAnimation = attach(CharacterAnimationComponent)

  async onInit(): Promise<void> {
    const model = await this.assetLoader.getModelByAssetName('character-human')
    const mesh = model.scene
    this.object.add(mesh)    

    const clip = THREE.AnimationClip.findByName(model.animations, 'idle')
    
    this.characterAnimation.setup(mesh)
    this.characterAnimation.play(clip)
  }

}

export default Character2