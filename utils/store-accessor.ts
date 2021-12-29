import { Store } from "vuex"
import { getModule } from "vuex-module-decorators"
import LoginModule from "@/store/login"

let loginStore: LoginModule
let routerStore: Store<any>

function initialiseStores(store: Store<any>): void {
  loginStore = getModule(LoginModule, store)
  routerStore = store
}

export { initialiseStores, loginStore, routerStore }
