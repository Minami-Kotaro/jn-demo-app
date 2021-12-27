import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { ManagerModel } from "../../models/managerModel";

export class TokenFactory {
  private readonly _privateKey: string = "qwertyuiopasdfghjklzxcvbnm";
  public jwtPayload: JwtPayload;
  constructor(manager: ManagerModel) {
    this.jwtPayload = {
      id: manager.managerId,
      mailAddress: manager.managerMailAddress
    };
  }

  public createToken(): string {
    const jwtOptions: SignOptions = {
      algorithm: "HS256",
      expiresIn: "10m",
    };
    const token = jwt.sign(this.jwtPayload, this._privateKey, jwtOptions);
    return token;
  }
}
