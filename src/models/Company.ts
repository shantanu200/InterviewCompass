import { ICompanySchema } from "@/interfaces/dbModels/Company";
import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema<ICompanySchema>({
  name: {
    type: String,
  },
  industry: {
    type: String,
  },
  size: {
    type: Number,
  },
  foundingYear: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  socialMediaLinks: [
    {
      linkedIn: String,
    },
    {
      twitter: String,
    },
  ],
  description: String,
  address: String,
  contactPerson: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  profileImage: {
    type: String,
  },
});

const Company =
  mongoose.models.Company || mongoose.model("Company", CompanySchema);

export default Company;
