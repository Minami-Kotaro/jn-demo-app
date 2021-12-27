import { IsDateString, IsInt, IsNotEmpty, MinLength } from "class-validator";

export class SignInRequest {
  @IsNotEmpty()
  mailAddress: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export class PostContractRequest{
  @IsNotEmpty()
  contractorName:string;
  @IsNotEmpty()
  @IsInt()
  contractManagerId:number;
  @IsNotEmpty()
  @IsInt()
  userId:number;
  @IsNotEmpty()
  salesStaffName:string;
  @IsNotEmpty()
  @IsDateString()
  contractDate:Date;
  @IsNotEmpty()
  @IsDateString()
  validStartDate:Date;
  @IsNotEmpty()
  @IsDateString()
  validEndDate:Date;
}

export class PutContractRequest{
  @IsNotEmpty()
  contractorName:string;
  @IsNotEmpty()
  @IsInt()
  contractManagerId:number;
  @IsNotEmpty()
  @IsInt()
  userId:number;
  @IsNotEmpty()
  salesStaffName:string;
  @IsNotEmpty()
  @IsDateString()
  contractDate:Date;
  @IsNotEmpty()
  @IsDateString()
  validStartDate:Date;
  @IsNotEmpty()
  @IsDateString()
  validEndDate:Date;
}
