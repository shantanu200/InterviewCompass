import { APIResponse } from "@/interfaces/APIResponse";
import { ICompanySchema } from "@/interfaces/dbModels/Company";
import Company from "@/models/Company";
import mongoose from "mongoose";

export async function getCompany(data: string): Promise<APIResponse> {
  try {
    const userObj = await Company.findOne(
      mongoose.Types.ObjectId.isValid(data) ? { _id: data } : { email: data },
    );

    if (userObj && userObj._id) {
      return {
        status: 200,
        data: userObj,
      };
    }
    return {
      status: 400,
      message: "No data found on email or _id",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Internal Server Overloaded",
    };
  }
}

export async function createCompany(
  data: ICompanySchema,
): Promise<APIResponse> {
  try {
    const { status } = await getCompany(data?.email);
    if (status !== 200) {
      const userObj = await Company.create({
        email: data.email,
      });

      if (userObj._id && userObj) {
        return {
          status: 201,
          message: "Company is created",
        };
      }
    }
    return {
      status: 404,
      message: "Bad Request is performed",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Internal server overloaded",
    };
  }
}

export async function updateCompany(
  _id: string,
  data: ICompanySchema,
): Promise<APIResponse> {
  try {
    const userObj = await Company.findByIdAndUpdate(_id, data, { new: true });

    if (userObj && userObj._id) {
      return {
        status: 200,
        message: "User updated successfully",
      };
    }
    return {
      status: 404,
      message: "Bad request is performed",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal Server Overloaded",
    };
  }
}
