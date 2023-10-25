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

const APIOperation = async (
  operation: string,
  url: string,
  body?: any,
  headers = {},
) => {
  const uHeaders = {
    headers: headers,
  };
  switch (operation) {
    case "POST":
      return axios.post(url, body, uHeaders);
    case "GET":
      return axios.get(url, uHeaders);
    case "PUT":
      return axios.put(url, body, uHeaders);
    case "DELETE":
      return axios.delete(url, uHeaders);
  }
};

export async function APICall(
  operation: string,
  url: string,
  body?: any,
  headers?: any,
): Promise<IResponse> {
  let message;
  try {
    const { data, status } = (await APIOperation(
      operation,
      url,
      body,
      headers,
    )) as AxiosResponse;

    if (status >= 200 && status <= 299) {
      return {
        reqStatus: true,
        data: data,
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
