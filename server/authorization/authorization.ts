import { CurrentUserChecker } from "routing-controllers/types/CurrentUserChecker"
import { Action } from "routing-controllers"
import jwt from "jsonwebtoken"
import { AccountModel } from "../models/accountModel"
import { AuthorizationChecker } from "routing-controllers/types/AuthorizationChecker"

const tokenPassword = "qwertyuiopasdfghjklzxcvbnm"

export const authorizationCheck: AuthorizationChecker = (
  action: Action
): boolean => {
  try {
    //Bare {token}
    const [_, token] = action.request.headers["authorization"].split(" ")
    const decodedToken = jwt.verify(token, tokenPassword, {
      algorithms: ["HS256"],
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export const currentUserCheck: CurrentUserChecker = (
  action: Action
): AccountModel | undefined => {
  try {
    //Bare {token}
    const [_, token] = action.request.headers["authorization"].split(" ")
    const decodedToken = jwt.verify(token, tokenPassword, {
      algorithms: ["HS256"],
    }) as AccountModel
    return decodedToken
  } catch (e) {
    console.log(e)
    return
  }
}
