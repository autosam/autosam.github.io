import { ProjectCardProps } from "@/components/ProjectCard";

export const PROJECT_TYPES = {
  ALL: "ALL",
  WEBSITE: "WEBSITE",
  GAME: "GAME",
  BEHAVIOR: "BEHAVIOR",
  OTHER: "OTHER",
};

export const PROJECTS: any[] = [
  {
    title: "Tamaweb",
    img: "https://img.itch.zone/aW1nLzE3Nzk3NDg4LnBuZw==/315x250%23c/ZJr4Ym.png",
    href: "https://tamawebgame.github.io",
    type: PROJECT_TYPES.WEBSITE,
    releaseDate: 2023,
    isOngoing: true,
  },
  {
    title: "The Wall Project",
    img: "projects/thewall.png",
    href: "https://thewallproject.vercel.app",
    type: PROJECT_TYPES.WEBSITE,
    releaseDate: 2024,
    isOngoing: true,
  },
  {
    title: "Spectral Vile Mimic",
    img: "https://img.itch.zone/aW1nLzE4MTg2MjkzLnBuZw==/315x250%23c/1RvZmD.png",
    href: "https://smnmhmdy.itch.io/spectral-vile-mimic",
    type: PROJECT_TYPES.GAME,
    releaseDate: 2024,
    isOngoing: false,
  },
  {
    title: "Duzakh (Beta)",
    img: "https://img.itch.zone/aW1nLzk3MjY1NjQuanBn/315x250%23c/PLFsJA.jpg",
    href: "https://samgamesio.itch.io/duzakh-beta",
    type: PROJECT_TYPES.GAME,
    releaseDate: 2022,
    isOngoing: true,
  },

  {
    title: "CopperCraft",
    img: "https://img.itch.zone/aW1nLzgzMjgwMjAucG5n/315x250%23c/kc%2FOFs.png",
    href: "https://samgamesio.itch.io/coppercraft",
    type: PROJECT_TYPES.GAME,
    releaseDate: 2021,
    isOngoing: false,
  },
  {
    title: "Flyborn",
    img: "https://play-lh.googleusercontent.com/3lznNl7AYxVThGylVfLsAzFPhlU_f3XKXQn3xBys-CTRJ_trSR5l_f1u-SKMJzPhjNU=w240-h480-rw",
    href: "https://play.google.com/store/apps/details?id=com.vcreations.flyborn&hl=en",
    type: PROJECT_TYPES.GAME,
    releaseDate: 2021,
    isOngoing: false,
  },
  {
    title: "EverRage",
    img: "https://img.itch.zone/aW1nLzY0NzI4MjQucG5n/315x250%23c/YPDvFY.png",
    href: "https://samgamesio.itch.io/everrage",
    type: PROJECT_TYPES.GAME,
    releaseDate: 2021,
    isOngoing: false,
  },
  {
    title: "MasterTest",
    img: "https://img.itch.zone/aW1nLzUwNTQwNjUucG5n/315x250%23c/ln%2Byrw.png",
    href: "https://samgamesio.itch.io/mastertest",
    type: PROJECT_TYPES.GAME,
    releaseDate: 2021,
    isOngoing: false,
  },
  {
    title: "Dim - Playable Demo",
    img: "https://img.itch.zone/aW1nLzE3OTUyMzQucG5n/315x250%23c/TCB0ix.png",
    href: "https://smnmhmdy.itch.io/dim-demo",
    type: PROJECT_TYPES.GAME,
    releaseDate: 2019,
    isOngoing: false,
  },
];
