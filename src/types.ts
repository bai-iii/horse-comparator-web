interface HorseProfile {
  favouriteFood: string;
  physical: {
    height: number;
    weight: number;
  };
}

export interface Horse {
  id: string;
  name: string;
  profile: HorseProfile;
}
