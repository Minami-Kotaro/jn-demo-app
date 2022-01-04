import { Store } from "vuex"
import { getModule } from "vuex-module-decorators"
import LoginModule from "@/store/login"
import contractListModule from "~/store/contractList"

let loginStore: LoginModule
let contractListStore: contractListModule
let routerStore: Store<any>

function initialiseStores(store: Store<any>): void {
  loginStore = getModule(LoginModule, store)
  contractListStore = getModule(contractListModule, store)
  routerStore = store
}

export { initialiseStores, loginStore, contractListStore, routerStore }
