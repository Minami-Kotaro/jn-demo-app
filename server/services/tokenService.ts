import { NotFoundError } from "routing-controllers"
import { TokenResponse } from "../apiModels/response"
import { TokenFactory } from "../factories/token/tokenFactory"
import * as managerRepository from "../repositories/managerRepository"

export async function FetchToken(
  mailAddress: string,
  password: string
): Promise<TokenResponse> {
  const manager = await managerRepository.SelectManager(mailAddress, password)

  if (!manager)
    throw new NotFoundError("メールアドレスまたはパスワードが違います。")

  const token = new TokenFactory(manager).createToken()

  return { accessToken: token }
}
