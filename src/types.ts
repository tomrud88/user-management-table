export type FullUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type User = Pick<FullUser, "name" | "username" | "email" | "phone">;

export type UserState = {
    users: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  status: 'idle' | 'loading' | 'failed';
}