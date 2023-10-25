export interface IStudent {
  _id?: string;
  name: string;
  email: string;
  password: string;
  skills: [string];
  job_description: [string];
  complete_score: number;
  tokens: {
    refferal: number;
    connection: number;
    interview_experiences: number;
    resume: number;
  };
}
