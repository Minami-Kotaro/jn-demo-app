export interface LocalToken {
  accessToken: string
}

/**
 * トークン情報をローカルストレージに格納する
 * @param token ユーザー情報
 */
export function SetToken(token: LocalToken): void {
  localStorage.setItem("token", window.btoa(encodeURI(JSON.stringify(token))))
}

/**
 * ローカルストレージからトークン情報を取得する
 */
export function GetToken(): LocalToken | undefined {
  const token = localStorage.getItem("token")
  if (!token) return undefined
  return JSON.parse(decodeURI(window.atob(token)))
}
