import {
  EHttpCode,
  EHttpMethod,
  IApiResult,
  IApiResponse,
} from '../../../@types/http';

type PromiseCurrying = (
  params: IApiResult | Promise<IApiResult>,
) => Promise<IApiResult>;

export default async function Request(
  resource: string,
  method: EHttpMethod = EHttpMethod.GET,
  successCode: EHttpCode = EHttpCode.OK,
  body?: any,
): Promise<PromiseCurrying> {
  return async (params) => {
    const response = {} as IApiResponse;

    const { api, lastResponses = [] } = await params;

    try {
      const res = await api[method](resource, body);
      response.success = res.status === successCode;
      response.code = res.status;
      response.description = res.statusText;
      response.headers = res?.headers;
      response.data = res?.data;
    } catch (err: any) {
      response.success = false;
      response.code = err?.response?.status || 500;
      response.headers = null;
      response.data = {
        code: err?.response?.status || 500,
        message: err?.message,
        name: err?.name,
      };
      console.error(response);
    } finally {
      return {
        api: api,
        lastResponses: [...lastResponses, response],
      };
    }
  };
}
