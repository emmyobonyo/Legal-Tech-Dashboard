export interface UserState {
  id: number | null;
  name: string;
  email: string;
  role: string;
  billableHours: number;
  loggedIn: boolean;
  profile_picture: string;
  rank: string;
}

export interface Credentials {
  email: string;
  password: string;
}
