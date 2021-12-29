import { GetToken, LocalToken } from "@/store/localStorage"

export class Token {
  private static _token: LocalToken
  private Token() {}
  public static get instance(): LocalToken | undefined {
    if (!this._token) {
      const token = GetToken()
      if (token) this._token = token
    }
    return this._token
  }
  public static New(): void {
    const token = GetToken()
    if (token) this._token = token
  }
  public static ReNew(): void {
    const token = GetToken()
    if (token) this._token = token
  }
}
