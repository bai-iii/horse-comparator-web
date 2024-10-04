export interface HorseProfile {
  favouriteFood: string;
  physical: {
    height: number | null;
    weight: number | null;
  };
}

export interface Horse {
  id: string;
  name: string;
  profile: HorseProfile;
}
