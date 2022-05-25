import { AxiosInstance } from 'axios';

export enum EHttpCode {
  OK = 200,
  Created = 201,
  NoContent = 204,
}

export enum EHttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

export interface IApiResponse {
  success: boolean;
  code: number;
  description: string;
  headers?: any;
  data: any;
}

export interface IApiResult {
  api: AxiosInstance;
  lastResponses?: IApiResponse[];
}
