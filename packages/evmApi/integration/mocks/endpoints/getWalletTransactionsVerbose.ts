/* eslint-disable etc/no-commented-out-code */
import { MockScenarios } from '@moralisweb3/test-utils';
import { createErrorResponse } from '../response/errorResponse';

export const mockGetWalletTransactionsVerbose = MockScenarios.create(
  {
    method: 'get',
    url: `/:address/verbose`,
    name: 'mockGetWalletTransactionsVerbose',
    getParams: async ({ req }) => ({
      address: req.params.address,
      chain: req.url.searchParams.get('chain'),
      subdomain: req.url.searchParams.get('subdomain'),
      from_block: req.url.searchParams.get('from_block'),
      to_block: req.url.searchParams.get('to_block'),
      limit: req.url.searchParams.get('limit'),
      to_date: req.url.searchParams.get('to_date'),
      from_date: req.url.searchParams.get('from_date'),
      cursor: req.url.searchParams.get('cursor'),
    }),
  },
  [
    {
      condition: {
        address: '0x7dE3085b3190B3a787822Ee16F23be010f5F868',
        chain: '0x1',
      },
      response: createErrorResponse('address is not a valid hex address'),
      responseStatus: 400,
    },
    {
      condition: {
        address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
        chain: '0x1',
      },
      response: {
        total: 2000,
        page: 2,
        page_size: 100,
        result: [
          {
            hash: '0x6277c80d1e889c2095da245e65f386bcd5d85adbbaf9e86e87dc785f97d75950',
            nonce: '281',
            transaction_index: '200',
            from_address: '0xfe2575c6402e56fa977651ea30bbfa0d3b4ae578',
            to_address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
            value: '0',
            gas: '65470',
            gas_price: '11854153102',
            input:
              '0x42842e0e000000000000000000000000fe2575c6402e56fa977651ea30bbfa0d3b4ae57800000000000000000000000033e1f53bb774146fb602d70e5f0daa26485b0a5600000000000000000000000000000000000000000000000000000000000002a8360c6ebe',
            receipt_cumulative_gas_used: '19024553',
            receipt_gas_used: '65470',
            receipt_contract_address: null,
            receipt_root: null,
            receipt_status: '1',
            block_timestamp: '2022-11-24T08:26:35.000Z',
            block_number: '16038636',
            block_hash: '0x9e9c0f015d233a73549e06b91b34a77ce0ea204e513d8e5196d546db446c182a',
            transfer_index: [16038636, 200],
            logs: [
              {
                log_index: '478',
                transaction_hash: '0x6277c80d1e889c2095da245e65f386bcd5d85adbbaf9e86e87dc785f97d75950',
                transaction_index: '200',
                address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
                data: '0x',
                topic0: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
                topic1: '0x000000000000000000000000fe2575c6402e56fa977651ea30bbfa0d3b4ae578',
                topic2: '0x0000000000000000000000000000000000000000000000000000000000000000',
                topic3: '0x00000000000000000000000000000000000000000000000000000000000002a8',
                block_timestamp: '2022-11-24T08:26:35.000Z',
                block_number: '16038636',
                block_hash: '0x9e9c0f015d233a73549e06b91b34a77ce0ea204e513d8e5196d546db446c182a',
                transfer_index: [16038636, 200, 478],
                transaction_value: '0',
              },
              {
                log_index: '479',
                transaction_hash: '0x6277c80d1e889c2095da245e65f386bcd5d85adbbaf9e86e87dc785f97d75950',
                transaction_index: '200',
                address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
                data: '0x',
                topic0: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
                topic1: '0x000000000000000000000000fe2575c6402e56fa977651ea30bbfa0d3b4ae578',
                topic2: '0x00000000000000000000000033e1f53bb774146fb602d70e5f0daa26485b0a56',
                topic3: '0x00000000000000000000000000000000000000000000000000000000000002a8',
                block_timestamp: '2022-11-24T08:26:35.000Z',
                block_number: '16038636',
                block_hash: '0x9e9c0f015d233a73549e06b91b34a77ce0ea204e513d8e5196d546db446c182a',
                transfer_index: [16038636, 200, 479],
                transaction_value: '0',
              },
            ],
          },
          {
            hash: '0xa0477ca14d2e001084c513877d79c4010824567851721781f5cdc5c943f09ad5',
            nonce: '124',
            transaction_index: '86',
            from_address: '0xff74eb239d8f06c904d6a94694630547620ff501',
            to_address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
            value: '0',
            gas: '68238',
            gas_price: '21562100759',
            input:
              '0x23b872dd000000000000000000000000ff74eb239d8f06c904d6a94694630547620ff50100000000000000000000000011f377fcef57a504cb6757e16365c59693941ae60000000000000000000000000000000000000000000000000000000000000136',
            receipt_cumulative_gas_used: '6992979',
            receipt_gas_used: '40692',
            receipt_contract_address: null,
            receipt_root: null,
            receipt_status: '1',
            block_timestamp: '2022-11-18T17:13:11.000Z',
            block_number: '15998316',
            block_hash: '0x197552e5e709ab15ce522a3f0c236f8ab8847955d248575d45225b66b500c481',
            transfer_index: [15998316, 86],
            logs: [
              {
                log_index: '163',
                transaction_hash: '0xa0477ca14d2e001084c513877d79c4010824567851721781f5cdc5c943f09ad5',
                transaction_index: '86',
                address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
                data: '0x',
                topic0: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
                topic1: '0x000000000000000000000000ff74eb239d8f06c904d6a94694630547620ff501',
                topic2: '0x0000000000000000000000000000000000000000000000000000000000000000',
                topic3: '0x0000000000000000000000000000000000000000000000000000000000000136',
                block_timestamp: '2022-11-18T17:13:11.000Z',
                block_number: '15998316',
                block_hash: '0x197552e5e709ab15ce522a3f0c236f8ab8847955d248575d45225b66b500c481',
                transfer_index: [15998316, 86, 163],
                transaction_value: '0',
              },
              {
                log_index: '164',
                transaction_hash: '0xa0477ca14d2e001084c513877d79c4010824567851721781f5cdc5c943f09ad5',
                transaction_index: '86',
                address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
                data: '0x',
                topic0: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
                topic1: '0x000000000000000000000000ff74eb239d8f06c904d6a94694630547620ff501',
                topic2: '0x00000000000000000000000011f377fcef57a504cb6757e16365c59693941ae6',
                topic3: '0x0000000000000000000000000000000000000000000000000000000000000136',
                block_timestamp: '2022-11-18T17:13:11.000Z',
                block_number: '15998316',
                block_hash: '0x197552e5e709ab15ce522a3f0c236f8ab8847955d248575d45225b66b500c481',
                transfer_index: [15998316, 86, 164],
                transaction_value: '0',
              },
            ],
          },
        ],
      },
    },
  ],
);
