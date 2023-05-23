type accountType = {
  personal: boolean;
  pro: boolean;
  bussiness: boolean;
};

export type AccessData = {
  userName: string;
  password: string;
  repeatedPassword: string;
  accountType: accountType;
};
