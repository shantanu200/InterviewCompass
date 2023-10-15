import { APIResponse } from "@/interfaces/APIResponse";
import axios, { AxiosResponse, AxiosError } from "axios";

interface IResponse {
  reqStatus: boolean;
  message?: string;
  data?: any;
}

interface IOperation {
  status: number;
  data: any;
}

const APIOperation = async (operation: string, url: string, body?: any) => {
  switch (operation) {
    case "POST":
      return axios.post(url, body);
    case "GET":
      return axios.get(url);
    case "PUT":
      return axios.put(url, body);
    case "DELETE":
      return axios.delete(url);
  }
};

export async function APICall(
  operation: string,
  url: string,
  body?: any,
): Promise<IResponse> {
  let message;
  try {
    const { data, status } = (await APIOperation(
      operation,
      url,
      body,
    )) as AxiosResponse;

    if (status >= 200 && status <= 299) {
      return {
        reqStatus: true,
        data: data?.data,
        message: data?.message,
      };
    }
    return {
      reqStatus: false,
      message: data?.message,
    };
  } catch (e) {
    const error = e as AxiosError;
    const data = error?.response?.data as APIResponse;
    return {
      reqStatus: false,
      message: data?.message,
    };
  }
}
