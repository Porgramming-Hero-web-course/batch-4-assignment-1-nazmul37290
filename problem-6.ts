interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (obj: Profile, partialObj: Partial<Profile>): Profile => {
  const newUpdatedProfile = { ...obj, ...partialObj };
  return newUpdatedProfile;
};
