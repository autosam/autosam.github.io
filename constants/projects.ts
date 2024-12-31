import {
  ProjectStatuses,
  ProjectTypes,
  ProjectPlatforms,
  ProjectProps,
  ProjectGenres,
} from "./project.consts";
import smFirstpersonController from "./projects/smFirstpersonController";

export const PROJECTS: ProjectProps[] = [
  smFirstpersonController,
  {
    title: "Tamaweb",
    img: "/projects/tamaweb.png",
    href: "https://tamawebgame.github.io",
    type: ProjectTypes.Website,
    releaseDate: 2023,
    status: ProjectStatuses.Ongoing,
    platforms: [
      ProjectPlatforms.HTML5,
      ProjectPlatforms.Windows,
      ProjectPlatforms.Phone,
    ],
    genre: ProjectGenres.Simulation,
    id: "tamaweb",
    description: `Your Virtual Pet Adventure Awaits!
      Raise, Care, and Adventure with Your Virtual Pet! Enter a vibrant world where your digital pet relies on you for everything!
      Whether it’s feeding, cleaning, or playing fun games, every choice you make shapes their life and happiness.
      From heartfelt interactions to exciting new features, there’s always something to discover.`,
  },
  {
    title: "The Wall Project",
    img: "/projects/thewall.png",
    href: "https://thewallproject.vercel.app",
    type: ProjectTypes.Website,
    releaseDate: 2024,
    status: ProjectStatuses.Ongoing,
    genre: ProjectGenres.Social,
    id: "the-wall-project",
    description: `A platform built on anonymity and freedom of speech. Let the collective conscience decide the validity of an statement.`,
  },
  {
    title: "Spectral Vile Mimic",
    img: "/projects/spectralvilemimic.png",
    href: "https://smnmhmdy.itch.io/spectral-vile-mimic",
    platforms: [ProjectPlatforms.Windows],
    type: ProjectTypes.Game,
    releaseDate: 2024,
    status: ProjectStatuses.Done,
    genre: ProjectGenres.Horror,
    id: "spectral-vile-mimic",
    description: `A house that shifts, a presence that stalks. Each sigil pulls you deeper into a world that’s slipping away. Shadows watch. Walls bleed. Nothing is what it seems. Run. Hide. Follow the sound. Find the sigils.`,
  },
  {
    title: "Duzakh (Beta)",
    img: "/projects/duzakh.png",
    href: "https://samgamesio.itch.io/duzakh-beta",
    type: ProjectTypes.Game,
    releaseDate: 2022,
    status: ProjectStatuses.OnHold,
    platforms: [ProjectPlatforms.Windows],
    genre: ProjectGenres.FPS,
    id: "duzakh",
    description: `YOU LIVE IN THE DEPTHS OF HELL, SURROUNDED BY THE SHAPE SHIFTING HALLWAYS OF DEATH.
    Duzakh is a Retro-inspired roguelike first person shooter game set in procedurally generated dungeons. 
    Will you be able to conquer it by killing every single living entity in there?`,
  },

  {
    title: "CopperCraft",
    img: "/projects/coppercraft.png",
    href: "https://samgamesio.itch.io/coppercraft",
    type: ProjectTypes.Game,
    releaseDate: 2021,
    status: ProjectStatuses.Done,
    platforms: [ProjectPlatforms.Windows],
    genre: ProjectGenres.Simulation,
    id: "coppercraft",
    description: `Originally made to test out CopperCube engine's capabilities in handling voxel-based interactable environments similar to games like Minecraft, then expanded upon for a "clone" themed CopperCube game jam.
    The game contains randomly generated islands with caves, biomes, ores, tools etc.`,
  },
  {
    title: "Flyborn",
    img: "/projects/flyborn.webp",
    href: "https://play.google.com/store/apps/details?id=com.vcreations.flyborn&hl=en",
    type: ProjectTypes.Game,
    releaseDate: 2021,
    status: ProjectStatuses.Done,
    platforms: [ProjectPlatforms.Android],
    genre: ProjectGenres.Casual,
    id: "flyborn",
    description: `FLYBORN is a score-based based endless free-falling game. Dodge some obstacles, smash into others, use your abilities, and free the world from the terror of the dark gods, the ones who have been ravaging and turning everything and everyone into dark monsters, yourself included.`,
    links: [
      {
        text: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.vcreations.flyborn&hl=en",
      },
      {
        text: "APKPure",
        url: "https://apkpure.net/flyborn/com.smnmhmdy.flyborn",
      },
    ],
  },
  {
    title: "EverRage",
    img: "/projects/everrage.png",
    href: "https://samgamesio.itch.io/everrage",
    type: ProjectTypes.Game,
    releaseDate: 2021,
    status: ProjectStatuses.Done,
    platforms: [ProjectPlatforms.Windows],
    genre: ProjectGenres.TopDown,
    id: "everrage",
    description: `Originally made in 2 days as a part of a challenge, In this bloody game you can tear through the bad guys using your upgradable handy gun!
    INCREASE YOUR DEADLINESS
    POWERFUL POWERUPS
    PAINT WITH THE BLOOD OF YOUR ENEMIES AND SURVIVE AS LONG AS YOU CAN`,
  },
  {
    title: "MasterTest",
    img: "/projects/mastertest.png",
    href: "https://samgamesio.itch.io/mastertest",
    type: ProjectTypes.Game,
    releaseDate: 2021,
    status: ProjectStatuses.Done,
    platforms: [ProjectPlatforms.Windows],
    genre: ProjectGenres.Puzzle,
    id: "mastertest",
    description: `You wake up in an abandoned, mostly overgrown laboratory, and have to escape it using your only power; moving and re scaling objects with your perspective.`,
  },
  {
    title: "Dim - Playable Demo",
    img: "/projects/dim_pd.png",
    href: "https://smnmhmdy.itch.io/dim-demo",
    type: ProjectTypes.Game,
    releaseDate: 2019,
    status: ProjectStatuses.Done,
    platforms: [ProjectPlatforms.Windows],
    genre: ProjectGenres.Horror,
    id: "dim-playable-demo",
    description: `Dim - Teaser is a free playable demo for an ~~upcoming~~ horror game. 
    This demo takes place in a small part of a house, where you play as an unnamed protagonist with a "very specific" back story which makes him know what's going on, well, him, not you.
    Explore the house, look for clues and experience this small 10 - 15 minutes playable demo.`,
  },
];
