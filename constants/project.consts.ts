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
};
