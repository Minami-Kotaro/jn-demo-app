import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"
import { createBrotliCompress } from "zlib"
import { routerStore } from "."
import { Client, SignIn } from "./http/httpClient"
import { Token } from "./http/token"
import { SetToken } from "./localStorage"

@Module({
  name: "login",
  namespaced: true,
  stateFactory: true,
})
export default class LoginModule extends VuexModule {
  loginForm = {
    mailAddress: "",
    password: "",
  }

  @Mutation
  SET_LOGIN_FORM(data: { mailAddress: string; password: string }) {
    this.loginForm = data
  }

  @Action({ rawError: true })
  inputLoginForm(data: { mailAddress: string; password: string }) {
    this.SET_LOGIN_FORM(data)
  }

  @Action({ rawError: true })
  async SignIn(data: { mailAddress: string; password: string }) {
    try {
      const response = await SignIn({
        mailAddress: data.mailAddress,
        password: data.password,
      })

      //ローカルストレージにトークンを保存
      SetToken(response.data)
      Token.New()
      Client.RenewInstance()
      routerStore.$router.push("/ContractManage")
    } catch (err) {
      alert(err)
    }
  }
}
