import { IsNotEmpty, MinLength } from "class-validator";

export class SignInRequest {
  @IsNotEmpty()
  mailAddress: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
