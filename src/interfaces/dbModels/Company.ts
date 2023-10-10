export interface ICompanySchema {
  _id?: string;
  name: string;
  industry: string;
  size: number;
  foundingYear: string;
  website: string;
  email: string;
  phoneNumber: string;
  socialMediaLinks: [
    {
      linkedIn: string;
    },
    {
      twitter: string;
    },
  ];
  description: string;
  address: string;
  contactPerson: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}
