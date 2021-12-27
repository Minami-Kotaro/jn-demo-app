import { SignInRequest } from "../apiModels/request";
import { TokenResponse } from "../apiModels/response";
import { Body, JsonController, Post } from "routing-controllers";
import * as tokenService from "../services/tokenService"

@JsonController("/signin")
export class TokenController {
  @Post()
  async login(@Body({ validate: true }) signIn: SignInRequest): Promise<TokenResponse> {

    return tokenService.FetchToken(signIn.mailAddress,signIn.password)

  }
}
