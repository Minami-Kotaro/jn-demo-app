import { Module, VuexModule, Mutation } from "vuex-module-decorators"

@Module({
  name: "login",
  namespaced: true,
  stateFactory: true,
})
export default class LoginModule extends VuexModule {
  public test: string = "initial"

  @Mutation
  public setTest(val: string) {
    this.test = val
  }
}
