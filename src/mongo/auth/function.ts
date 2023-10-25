import { APIResponse } from "@/interfaces/APIResponse";
import { ICompanySchema } from "@/interfaces/dbModels/Company";
import { IStudent } from "@/interfaces/dbModels/Student";
import Company from "@/models/Company";
import Student from "@/models/Student";
import exp from "constants";
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
        password: data.password,
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

export async function getStudent(data: string): Promise<APIResponse> {
  try {
    const userObj = await Student.findOne(
      mongoose.Types.ObjectId.isValid(data) ? { _id: data } : { email: data },
    );

    if (userObj && userObj._id) {
      return {
        status: 200,
        data: userObj,
        message: `Already student user present on id/email ${data}`,
      };
    }
    return {
      status: 400,
      message: `No user found on email/id`,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal Server Overloaded",
    };
  }
}

export async function createStudent(data: IStudent): Promise<APIResponse> {
  try {
    const { status, message } = await getStudent(data?.email);

    if (status !== 200) {
      const userObj = await Student.create({
        email: data.email,
        password: data.password,
      });

      if (userObj && userObj._id) {
        return {
          status: 201,
          message: "Student User is created",
        };
      }
    }
    return {
      status: 404,
      message: message || "Bad Request is performed",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal Server Overloaded",
    };
  }
}
