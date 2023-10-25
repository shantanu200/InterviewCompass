import { IStudent } from "@/interfaces/dbModels/Student";
import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema<IStudent>({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
  },
  job_description: {
    type: [String],
  },
  complete_score: {
    type: Number,
    default: 0,
  },
  tokens: {
    resume: {
      type: Number,
      default: 2,
    },
    connection: {
      type: Number,
      default: 5,
    },
    interview_experiences: {
      type: Number,
      default: 5,
    },
    refferal: {
      type: Number,
      default: 3,
    },
  },
});

const Student =
  mongoose.models.Student || mongoose.model<IStudent>("Student", StudentSchema);

export default Student;
