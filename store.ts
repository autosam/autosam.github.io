/* import { atom, useAtom } from "jotai";
import { Gender, Genders } from "./types/Gender";
import { TalkData } from "./types/TalkData";

export const userIdAtom = atom<string>("");

const getInitialGender = (): Gender => {
  try {
    const storedGender = localStorage.getItem(CLIENT_GENDER_KEY);
    return storedGender
      ? (Number(storedGender as unknown) as Gender)
      : Genders.THEY;
  } catch (error) {
    return Genders.THEY;
  }
};
export const userGenderAtom = atom<Gender>(getInitialGender());
export const userGenderWithEffectAtom = atom(
  (get) => get(userGenderAtom),
  (get, set, newValue) => {
    set(userGenderAtom, newValue as Gender);
    localStorage.setItem(CLIENT_GENDER_KEY, newValue as string);
  }
);

export const postsAtom = atom<TalkData[]>(); */
/* import { atom, useAtom } from "jotai";
import { DisplayStyle } from "./constants/projectDisplayStyles";

const CLIENT_KEYS = {
  PROJECT_DISPLAY_TYPE: "client-projects-display-type",
};

const getInitialDisplayStyle = (): DisplayStyle => {
  try {
    const storedValue = localStorage?.getItem(CLIENT_KEYS.PROJECT_DISPLAY_TYPE);

    if (storedValue) {
      const parsedValue = Number(storedValue);
      if (Object.values(DisplayStyle).includes(parsedValue)) {
        return parsedValue as DisplayStyle;
      }
    }
  } catch (error) {
    console.error(error);
  }

  return DisplayStyle.Row;
};

const _projectsDisplayStyleAtom = atom<DisplayStyle>(getInitialDisplayStyle());
export const projectsDisplayStyleAtom = atom(
  (get) => get(_projectsDisplayStyleAtom),
  (_, set, newValue) => {
    set(_projectsDisplayStyleAtom, newValue as DisplayStyle);
    localStorage?.setItem(CLIENT_KEYS.PROJECT_DISPLAY_TYPE, newValue as string);
  }
); */

import { atom, useAtom } from "jotai";

export const headerVisibilityAtom = atom(false);
