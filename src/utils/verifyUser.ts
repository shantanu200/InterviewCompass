import { IStudent } from "@/interfaces/dbModels/Student";
import { verifyJWT } from "./token";
import connectDatabase from "@/lib/mongo";
import Student from "@/models/Student";
import { ICompanySchema } from "@/interfaces/dbModels/Company";
import Company from "@/models/Company";

export interface IValidate {
  verified: boolean;
  data?: IStudent | ICompanySchema;
  message?: string;
  error?: string;
}

const verifyUser = async (token: string, type: string): Promise<IValidate> => {
  try {
    await connectDatabase();
    const accessToken = token.split(" ")[1] as string;
    const data = await verifyJWT(accessToken);
    const _id = data.payload.sub;

    if (!_id) {
      return { verified: false, message: "Invalid Token is passed" };
    }

    let userObj;

    if (_id && type === "student") {
      userObj = await Student.findById(_id);
    } else if (_id && type === "company") {
      userObj = await Company.findById(_id);
    }

    if (!userObj)
      return { verified: false, message: `User not found on token` };

    return { verified: true, data: userObj };
  } catch (error) {
    return {
      verified: false,
      message: "Invalid Access Token is passed",
      error: String(error),
    };
  }
};

export default verifyUser;
