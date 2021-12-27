import { Get, JsonController } from "routing-controllers";
import { contractListResponse } from "../apiModels/response";
import * as contractService from "../services/contractService";

@JsonController("/contracts")
export class ContractController{

  @Get()
  async getContracts():Promise<contractListResponse[]>{

    return await contractService.FetchContracts()

  }
}
