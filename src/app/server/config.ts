import axios, { AxiosResponse } from "axios";

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
  try {
    const { data, status } = (await APIOperation(
      operation,
      url,
      body,
    )) as AxiosResponse;

    console.log(data, status);

    if (status >= 200 && status <= 299) {
      return {
        reqStatus: true,
        message: data?.message,
      };
    }
    return {
      reqStatus: false,
      message: data?.message,
    };
  } catch (error) {
    return {
      reqStatus: false,
      message: "Internal Server Overloaded",
    };
    console.error(error);
  }
}
export async function GETDATA() {}
export async function PUTDATA() {}
export async function DELETEDATA() {}
