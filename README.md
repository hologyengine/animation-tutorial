# Hology Engine Animation Examples

This repo is a Hology Engine project with code examples for implementing animations.

Read more about how to use animation with google in the documentation.
https://docs.hology.app/gameplay/animation

## Examples

A simple scene is used with just a spawn point and camera pointing towards to spawn point. 

In the **game.ts** file, we set the active camera and use the spawn point to spawn one of the character actors we have implemented.

There are multiple actor implementations for the character to demonstrate different approaches to animation.

* **character.ts** - Using ThreeJS constructs directly such as AnimationMixer.
* **character2.ts** - Using the `CharacterAnimationComponent` to play an `AnimationClip` directly.
* **character3.ts** - Using an `AnimationStateMachine` together with the `CharacterAnimationComponent` to transition between different animation clips based on state that we control using `InputService`. 