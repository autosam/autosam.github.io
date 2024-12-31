export enum ProjectTypes {
  All = "All",
  Website = "Website",
  Game = "Game",
  Behavior = "Behavior",
  Other = "Other",
}

export enum ProjectStatuses {
  Ongoing = "Ongoing",
  Done = "Done",
  OnHold = "On Hold",
}

export enum ProjectPlatforms {
  Windows = "Windows",
  Android = "Android",
  HTML5 = "HTML5",
  Phone = "Phone",
  Browser = "Browser",
}

export enum ProjectGenres {
  FPS = "First Person Shooter",
  Casual = "Casual",
  Horror = "Horror",
  Simulation = "Simulation",
  Puzzle = "Puzzle",
  TopDown = "Top-Down",
  Social = "Social",
}

export type ProjectProps = {
  title: string;
  img?: string;
  href?: string;
  type?: ProjectTypes;
  releaseDate?: number;
  id?: any;
  description?: string;
  links?: any[];
  status: string;
  platforms?: ProjectPlatforms[];
  engine?: string;
  tags?: [];
  genre?: ProjectGenres;
};
