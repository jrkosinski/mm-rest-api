
```
pnpm install 

pnpm link ../Tennessine/packages/client

pnpm run start 

```


Errors: 
```
controllers/test.ts:81:13 - error TS2322: Type 'import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/viem/_types/accounts/types").PrivateKeyAccount' is not assignable to type 'import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.22.4/node_modules/viem/_types/accounts/types").PrivateKeyAccount'.
  Type 'PrivateKeyAccount' is not assignable to type 'CustomSource'.
    Types of property 'signTransaction' are incompatible.
      Type '<serializer extends SerializeTransactionFn<TransactionSerializable> = import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/viem/_types/utils/transaction/serializeTransaction").SerializeTransactionFn<import("/media/acer/D1/blockchain/LP/MassLabs/mm-res...' is not assignable to type '<serializer extends SerializeTransactionFn<TransactionSerializable> = import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.22.4/node_modules/viem/_types/utils/transaction/serializeTransaction").SerializeTransactionFn<import("/media/acer/D1/blockchain/LP/MassL...'.
        Types of parameters 'args' and 'args' are incompatible.
          Type '{ serializer?: serializer | undefined; } | undefined' is not assignable to type '{ serializer?: SerializeTransactionFn<TransactionSerializable> | undefined; } | undefined'.
            Type '{ serializer?: serializer | undefined; }' is not assignable to type '{ serializer?: SerializeTransactionFn<TransactionSerializable> | undefined; }'.
              Types of property 'serializer' are incompatible.
                Type 'serializer | undefined' is not assignable to type 'SerializeTransactionFn<TransactionSerializable> | undefined'.
                  Type 'serializer' is not assignable to type 'SerializeTransactionFn<TransactionSerializable> | undefined'.
                    Type 'import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.22.4/node_modules/viem/_types/utils/transaction/serializeTransaction").SerializeTransactionFn<import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.2...' is not assignable to type 'import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/viem/_types/utils/transaction/serializeTransaction").SerializeTransactionFn<import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/vie...'.
                      Type 'serializer' is not assignable to type 'SerializeTransactionFn<TransactionSerializable>'.
                        Type 'import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.22.4/node_modules/viem/_types/utils/transaction/serializeTransaction").SerializeTransactionFn<import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.2...' is not assignable to type 'import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/viem/_types/utils/transaction/serializeTransaction").SerializeTransactionFn<import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/vie...'.
                          Types of parameters 'transaction' and 'transaction' are incompatible.
                            Type 'import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/viem/_types/types/utils").OneOf<import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/viem/_types/types/transaction").TransactionSeri...' is not assignable to type 'import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.22.4/node_modules/viem/_types/types/utils").OneOf<import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.22.4/node_modules/viem/_types/types/transacti...'.
                              Type '{ data?: `0x${string}` | undefined; gas?: bigint | undefined; nonce?: number | undefined; to?: `0x${string}` | null | undefined; value?: bigint | undefined; r?: `0x${string}` | undefined; s?: `0x${string}` | undefined; ... 12 more ...; sidecars?: undefined; }' is not assignable to type 'OneOf<TransactionSerializable>'.
                                Type '{ data?: `0x${string}` | undefined; gas?: bigint | undefined; nonce?: number | undefined; to?: `0x${string}` | null | undefined; value?: bigint | undefined; r?: `0x${string}` | undefined; s?: `0x${string}` | undefined; ... 12 more ...; sidecars?: undefined; }' is not assignable to type '{ data?: `0x${string}` | undefined; gas?: bigint | undefined; nonce?: number | undefined; to?: `0x${string}` | null | undefined; value?: bigint | undefined; r?: `0x${string}` | undefined; s?: `0x${string}` | undefined; ... 12 more ...; sidecars?: undefined; } | { ...; } | { ...; }'.
                                  Type '{ data?: `0x${string}` | undefined; gas?: bigint | undefined; nonce?: number | undefined; to?: `0x${string}` | null | undefined; value?: bigint | undefined; r?: `0x${string}` | undefined; s?: `0x${string}` | undefined; ... 12 more ...; sidecars?: undefined; }' is not assignable to type '{ data?: `0x${string}` | undefined; gas?: bigint | undefined; nonce?: number | undefined; to?: `0x${string}` | null | undefined; value?: bigint | undefined; r?: `0x${string}` | undefined; s?: `0x${string}` | undefined; ... 12 more ...; sidecars?: undefined; }'. Two different types with this name exist, but they are unrelated.
                                    Types of property 'accessList' are incompatible.
                                      Type 'import("/media/acer/D1/blockchain/LP/MassLabs/mm-rest-api/node_modules/.pnpm/viem@2.16.1_typescript@5.5.2/node_modules/viem/_types/types/transaction").AccessList | undefined' is not assignable to type 'import("/media/acer/D1/blockchain/LP/MassLabs/Tennessine/node_modules/.pnpm/viem@2.8.18_typescript@5.3.3_zod@3.22.4/node_modules/viem/_types/types/transaction").AccessList | undefined'.
                                        The type 'AccessList' is 'readonly' and cannot be assigned to the mutable type '{ address: `0x${string}`; storageKeys: `0x${string}`[]; }[]'.

81             keyCardWallet: privateKeyToAccount('0x0'),
               ~~~~~~~~~~~~~

  ../Tennessine/packages/client/dist/lib/index.d.ts:18:9
    18         keyCardWallet: PrivateKeyAccount;
               ~~~~~~~~~~~~~
    The expected type comes from property 'keyCardWallet' which is declared here on type '{ relayEndpoint: string; keyCardWallet: PrivateKeyAccount; keyCardEnrolled: boolean; shopId: `0x${string}` | undefined; }'


```
