
// CAUTION: This file is automatically generated. Do not edit it manually!

import { getBalanceOperation, GetBalanceRequest, GetBalanceResponseAdapter, getNFTsOperation, GetNFTsRequest, GetNFTsResponseAdapter, getPortfolioOperation, GetPortfolioRequest, GetPortfolioResponseAdapter, getSPLOperation, GetSPLRequest, GetSPLResponseAdapter, getNFTMetadataOperation, GetNFTMetadataRequest, GetNFTMetadataResponseAdapter, getTokenPriceOperation, GetTokenPriceRequest, GetTokenPriceResponseAdapter } from '@moralisweb3/common-sol-utils';
import { OperationResolver } from '@moralisweb3/api-utils';
import { ApiModule, Core, ModuleType,  } from '@moralisweb3/common-core';

export abstract class ClientSolApi implements ApiModule {
  protected abstract core: Core;
  public abstract baseUrl: string;
  public abstract name: string;
  public readonly type = ModuleType.API;

  
  public readonly account = {
   getBalance: (request: GetBalanceRequest): Promise<GetBalanceResponseAdapter> => {
      return new OperationResolver(getBalanceOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTs: (request: GetNFTsRequest): Promise<GetNFTsResponseAdapter> => {
      return new OperationResolver(getNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   getPortfolio: (request: GetPortfolioRequest): Promise<GetPortfolioResponseAdapter> => {
      return new OperationResolver(getPortfolioOperation, this.baseUrl, this.core).fetch(request);
    },
   getSPL: (request: GetSPLRequest): Promise<GetSPLResponseAdapter> => {
      return new OperationResolver(getSPLOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly nft = {
   getNFTMetadata: (request: GetNFTMetadataRequest): Promise<GetNFTMetadataResponseAdapter> => {
      return new OperationResolver(getNFTMetadataOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly token = {
   getTokenPrice: (request: GetTokenPriceRequest): Promise<GetTokenPriceResponseAdapter> => {
      return new OperationResolver(getTokenPriceOperation, this.baseUrl, this.core).fetch(request);
    },

  };

}
