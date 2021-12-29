import axios, { AxiosResponse, AxiosInstance } from "axios"
import { TokenResponse } from "@/server/apiModels/response"
import { Token } from "./token"

export class Client {
  private static _instance: AxiosInstance
  private static isForceRenew: boolean = false

  public static get instance(): AxiosInstance {
    if (!this._instance || this.isForceRenew) {
      this.RenewInstance()
    }
    return this._instance
  }
  public static RenewInstance() {
    this._instance = axios.create({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${Token.instance?.accessToken}`,
      },
      validateStatus: (status: number): boolean => status < 400, // ステータスコードが500以上の時リジェクト
      withCredentials: true,
    })
    this._instance.interceptors.response.use(
      async (response) => {
        if (response.status === 401) {
          try {
            response.config.headers!.Authorization = `Bearer ${Token.instance?.accessToken}`
            const res = await axios.request(response.config)
            this.isForceRenew = true
            return Promise.resolve(res)
          } catch (_) {
            return Promise.reject(response)
          }
        }
        return Promise.resolve(response)
      },
      (error) => {
        throw error
      }
    )
  }
}

export type setting = {
  version?: string
  instance?: AxiosInstance
}
export async function SignIn<T = TokenResponse>(
  body?: Object,
  setting?: setting
): Promise<AxiosResponse<T>> {
  try {
    const client = axios.create({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "*",
      },
      validateStatus: (status: number): boolean => status < 400,
      withCredentials: true,
    })
    const basePath = buildBasePath(setting)
    const result = await client.post<T>(`${basePath}/signin`, body)
    return result
  } catch (error) {
    UnhandledException(error)
    throw error
  }
}

export async function Get<T = object>(
  path: string,
  params?: (string | number)[],
  query?: { [key: string]: any },
  setting?: setting
): Promise<AxiosResponse<T>> {
  try {
    const basePath = buildBasePath(setting)
    const paramPath = buildPath(path, params)
    const result: AxiosResponse<T> = await Client.instance.get<T>(
      `${basePath}/${paramPath}`
    )
    return result
  } catch (error) {
    UnhandledException(error)
    throw error
  }
}

export async function Post<T = { id: number }>(
  path: string,
  params?: (string | number)[],
  body?: Object,
  setting?: setting
): Promise<AxiosResponse<T>> {
  try {
    const basePath = buildBasePath(setting)
    const paramPath = buildPath(path, params)
    const result = await Client.instance.post<T>(
      `${basePath}/${paramPath}`,
      body
    )
    return result
  } catch (error) {
    UnhandledException(error)
    throw error
  }
}
export async function Put<T = undefined>(
  path: string,
  params?: (string | number)[],
  body?: Object,
  setting?: setting
): Promise<AxiosResponse<T>> {
  try {
    const basePath = buildBasePath(setting)
    const paramPath = buildPath(path, params)

    const result = await Client.instance.put<T>(
      `${basePath}/${paramPath}`,
      body
    )
    return result
  } catch (error) {
    UnhandledException(error)
    throw error
  }
}
export async function Delete<T = undefined>(
  path: string,
  params?: (string | number)[],
  query?: { [key: string]: any },
  setting?: setting
): Promise<AxiosResponse<T>> {
  try {
    const basePath = buildBasePath(setting)
    const paramPath = buildPath(path, params)
    const result = await Client.instance.delete<T>(`${basePath}/${paramPath}`)
    return result
  } catch (error) {
    UnhandledException(error)
    throw error
  }
}

/**
 * APIパスの固定部分の構築
 * @param setting APIのversion設定
 */
function buildBasePath(setting?: setting): string {
  return setting
    ? `/api/${setting?.version}`
    : `/api/${process.env.VUE_APP_API_VERSION || "v1"}`
}
/**
 * APIパスとパラメータでExpressと同様のURIを作成する
 * @param path APIのパス
 * @param params URIパラメータ
 */
function buildPath(path: string, params?: (string | number)[]): string {
  if (!params) return path
  let builder = path
  const paramsPattern = /[^{}]+(?=})/g
  const extractParams = path.match(paramsPattern)
  if (extractParams) {
    extractParams.forEach((item: string, index: number) => {
      builder = builder.replace(`{${item}}`, params[index].toString())
    })
  }
  return builder
}

/**
 * HttpStatusCodeが500以上の時、グローバルエラーとしてログイン画面に戻す
 * @param error エラー内容
 */
function UnhandledException(error: any) {
  alert(error)
}
