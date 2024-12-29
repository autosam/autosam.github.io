import { ProjectStatuses, ProjectTypes, ProjectProps } from "../project.consts";

const description = `
A modern firstperson controller for CopperCube, featuring crouching, leaning, camera movement animations and much more.

I suggest importing the "smFirstpersonController - Prefab.ccb" directly into your scene to get started (File -> Import -> CopperCube Scene...).

Make sure you set the "player_camera" you imported from the prefab as active.

For more information regarding how you can set the behavior up, check out the included example scene.

Parameters:
- **Player**: Player collision while standing (aka the player body, your camera will warp to its location at the start of the game)
- **PlayerCrouched**: Player collision while crouched (its collision shape should perfectly match the standing collision shape to prevent abrupt transition)
- **CameraPositionOffset**: Cameras offset from the main collision body center
- **WalkSpeed**: Movement speed while walking
- **RunSpeed**: Movement speed while running
- **CrouchSpeed**: Movement speed while crouched
- **CrouchHeight**: Determines how much the camera should be lowered when crouched
- **LeaningOffset**: Determines how far the camera will lean
- **StandingShakeSpeed**: Camera shake speed when standing still
- **StandingShakeStrength**: Camera shake strength when standing still
- **WalkingShakeSpeed**: Camera shake speed when walking
- **WalkingShakeStrength**: Camera shake strength when walking
- **RunShakeSpeed**: Camera shake speed when running
- **RunShakeStrength**: Camera shake strength when running
- **CrouchShakeSpeed**: Camera shake speed when crouched and moving
- **CrouchShakeStrength**: Camera shake strength when crouched and moving
- **CameraRollStrength**: Determines how the camera sway rolls the camera
- **SidestepLeanStrength**: Determines how strong sidestepping affects camera roll
- **SidestepLeanSpeed**: Determines how fast sidestepping affects camera roll
- **CameraSmoothness**: Enable/Disable if the camera should smoothly follow its body (Player)
- **CameraSmoothnessFactor**: Determines how smooth the camera will follow its body, Lower value means more floaty
- **StepImpactStrength**: Determines how each step impacts the camera sway
- **JumpStrength**: Determines jump strength (dependant on global gravity, works much better with physics enabled)
- **JumpGravity**: Determines internal gravity applied to jump (differs from global gravity but is affected by it, works much better with physics enabled)
- **KeyMoveForward, KeyMoveBackward, KeyMoveRight, KeyMoveLeft, KeyRun, KeyJump, KeyCrouch, KeyLeanRight, KeyLeanLeft**: Input keys, use uppercase/PascalCase values (like 'E', or 'Space')
- **KeyLeanToggle**: Determines if the leaning should be toggled or hold
- **ActionOnFootstep**: An action to invoke when stepping (mainly to play footstep sounds and/or run any other logic)

`;

export default <ProjectProps>{
  title: "SM Firstperson Controller",
  img: "/projects/smFirstpersonController.png",
  type: ProjectTypes.Behavior,
  releaseDate: 2024,
  status: ProjectStatuses.Ongoing,
  id: "sm-firstperson-controller",
  description: description,
  engine: "CopperCube",
  links: [
    {
      text: "Download (v1.0)",
      url: "/downloads/smFirstpersonController_v1.0.zip",
    },
    {
      text: "Download Demo",
      url: "/downloads/smFirstpersonController - Demo1.zip",
    },
  ],
};
