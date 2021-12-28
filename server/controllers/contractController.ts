import {
  Authorized,
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
  QueryParam,
} from "routing-controllers"
import { PostContractRequest, PutContractRequest } from "../apiModels/request"
import { ContractListResponse } from "../apiModels/response"
import * as contractService from "../services/contractService"

@JsonController("/contracts")
export class ContractController {
  @Authorized()
  @Get("/")
  async GetContracts(): Promise<ContractListResponse[]> {
    return await contractService.FetchContracts()
  }

  @Authorized()
  @Post("/")
  async PostContracts(@Body({ validate: true }) req: PostContractRequest) {
    await contractService.InsertContract(req)

    return "ok"
  }

  @Authorized()
  @Put("/:contractId")
  async PutContracts(
    @Body({ validate: true }) req: PutContractRequest,
    @Param("contractId") contractId: number
  ) {
    await contractService.UpdateContract(contractId, req)

    return "ok"
  }

  @Authorized()
  @Delete("/:contractId")
  async DeleteContracts(@Param("contractId") contractId: number) {
    await contractService.DeleteContract(contractId)

    return "ok"
  }
}
