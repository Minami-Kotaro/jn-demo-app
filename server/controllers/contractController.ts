import { Authorized, Get, JsonController } from "routing-controllers";
import { ContractListResponse } from "../apiModels/response";
import * as contractService from "../services/contractService";

@JsonController("/contracts")
export class ContractController{
  @Authorized()
  @Get()
  async getContracts():Promise<ContractListResponse[]>{

    return await contractService.FetchContracts()

  }
}
