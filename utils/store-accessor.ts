import { Store } from "vuex"
import { getModule } from "vuex-module-decorators"
import login from "~/store/login"

let loginStore: login

function initialiseStores(store: Store<any>): void {
  loginStore = getModule(login, store)
}

export { initialiseStores, loginStore }
