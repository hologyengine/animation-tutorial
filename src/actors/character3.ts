
import { Actor, AnimationState, AnimationStateMachine, AssetLoader, BaseActor, attach, inject } from '@hology/core/gameplay';
import { CharacterAnimationComponent } from '@hology/core/gameplay/actors';
import { ActionInput, InputService, Keybind } from '@hology/core/gameplay/input';
import * as THREE from 'three';

enum InputAction {
  walk
}

@Actor()
class Character3 extends BaseActor {
  private assetLoader = inject(AssetLoader)
  private characterAnimation = attach(CharacterAnimationComponent)
  private input = inject(InputService)

  async onInit(): Promise<void> {
    const model = await this.assetLoader.getModelByAssetName('character-human')
    const mesh = model.scene
    this.object.add(mesh)    

    const idleClip = THREE.AnimationClip.findByName(model.animations, 'idle')
    const walkClip = THREE.AnimationClip.findByName(model.animations, 'walk')
    
    this.characterAnimation.setup(mesh)

    const pressingWalk = new ActionInput() 

    this.input.setKeybind(InputAction.walk, new Keybind('w'))
    this.input.bindToggle(InputAction.walk, pressingWalk.toggle)
    this.input.start()

    const idle = new AnimationState(idleClip)
    const walk = new AnimationState(walkClip)

    idle.transitionsBetween(walk, () => pressingWalk.activated)
    
    const asm = new AnimationStateMachine(idle)

    this.characterAnimation.playStateMachine(asm)
  }

}

export default Character3