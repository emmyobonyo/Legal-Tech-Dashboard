export interface UserState {
  id: number | null;
  name: string | null;
  email: string;
  role: string;
  billableHours: number;
  password: string;
}

interface Credentials {
  email: string;
  password: string;
}
