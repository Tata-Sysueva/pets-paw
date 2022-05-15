import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export interface ApiResponse<T> {
  data: T
  headers: { [p: string]: string }
  status: number
  statusText: string
}

export default class ApiService {
  private static _instance: ApiService;
  private _api: AxiosInstance;

  private constructor() {
    this._api = axios.create({
      baseURL: '',
      timeout: 10000,
    });
  }

  public static get Instance(): ApiService {
    return this._instance || (this._instance = new this());
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._api.get(url, config);
  }

  public post<T, R = any>(
    url: string,
    data: R,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._api.post(url, data, config);
  }

  public patch<R, T>(
    url: string,
    data: R,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._api.patch(url, data, config);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._api.delete(url, config);
  }

  public put<R, T>(
    url: string,
    data: R,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._api.put(url, data, config);
  }
}
