import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {
  TryCatchPayload,
  ServiceClientPayload,
} from './serviceClient.interface';

@Injectable()
export class ServiceClient {
  constructor(private readonly httpService: HttpService) {}

  async trycatchRequest({ url, httpConfig }: TryCatchPayload) {
    try {
      if (url && httpConfig) {
        let result = await this.httpService.axiosRef(httpConfig);
        return result.data;
      }
    } catch (e) {
      console.error(e);
    }
  }

  get(payload: ServiceClientPayload) {
    const { payload: params = {}, ...otherInfo } = payload;
    return this.trycatchRequest({
      ...otherInfo,
      httpConfig: {
        url: payload.url,
        method: 'get',
        header: payload.headers,
      },
    });
  }

  post(payload: ServiceClientPayload) {
    const { payload: params = {}, ...otherInfo } = payload;
    return this.trycatchRequest({
      ...otherInfo,
      httpConfig: {
        url: payload.url,
        method: 'post',
      },
    });
  }

  put(payload: ServiceClientPayload) {
    const { payload: params = {}, ...otherInfo } = payload;
    return this.trycatchRequest({
      ...otherInfo,
      httpConfig: {
        url: payload.url,
        method: 'put',
      },
    });
  }

  patch(payload: ServiceClientPayload) {
    const { payload: params = {}, ...otherInfo } = payload;
    return this.trycatchRequest({
      ...otherInfo,
      httpConfig: {
        url: payload.url,
        method: 'patch',
      },
    });
  }

  delete(payload: ServiceClientPayload) {
    const { payload: params = {}, ...otherInfo } = payload;
    return this.trycatchRequest({
      ...otherInfo,
      httpConfig: {
        url: payload.url,
        method: 'delete',
      },
    });
  }
}
