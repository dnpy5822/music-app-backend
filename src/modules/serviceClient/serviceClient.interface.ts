type Method = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface ServiceClientPayload {
  url: string;
  payload?: any;
  headers?: any;
}

export interface TryCatchPayload {
  url: string;
  httpConfig: {
    url: string;
    method: Method;
    header?: any;
    params?: any;
    timeout?: any;
  };
}
