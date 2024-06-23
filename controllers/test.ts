import { Request, Response } from 'express';
import { RelayClient } from '@massmarket/client';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { keccak256 } from 'viem';

const stores = [
    {
        storeId:
            '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6',
        keycard:
            '0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b',
    },
    {
        storeId:
            '0x50b88e43d13980c585aca93e2a20256f18c45973452b67236188f8bd33d0ce18',
        keycard:
            '0xbdbfff59dfe591291bc01ee4e7329def260a3f1bfd004f6a5b692b9326cf25fa',
    },
    {
        storeId:
            '0x7b1898654bb06644f2e69ed9a0a3aaf0a95f58fbf411f9b7a72c94608825973f',
        keycard:
            '0xd304de79f4550c2834bd5d0172f9607e3f98c5dd0d860b34b1a42f2cfe285774',
    },
    {
        storeId:
            '0x297291be7bbaf43222083aff6717293f7cea45baf3970281461de040d5dcfd88',
        keycard:
            '0x1f529f1f3e890c83009f4584d26b1836a344eed0f927d24c7b00551a53f17a3e',
    },
    {
        storeId:
            '0xcdd3b0394183209066deab82544cbf5d62c5da5273a6f70a1e1afba2ed8fd927',
        keycard:
            '0xa46a3a535d268fa6faaa273145a3d57eac27c71dda24b29b444ecbcc269b8b3d',
    },
    {
        storeId:
            '0xaf0f94a76079e1200ab0d839ef8d85132a2541b0a605158acc0aea1c48017d99',
        keycard:
            '0x636d0b88569be47a4e7c8fbe091b39624dbfa181d2d751d6cd0203556da002e8',
    },
    {
        storeId:
            '0x3b0e9ee705e380ce86961b0ac7da8558f412944ec01974846c1ea75fd91f682b',
        keycard:
            '0x0473c021a7c0a7b091f95fcd314013476643dd1c364c62cb587987179d9c8635',
    },
    {
        storeId:
            '0xd3d858575498736ab3edf3e2f270036e9a57c84edfd568c6c592b14d756cda1b',
        keycard:
            '0x306956ccfd63d2fd8fb850af3deebbd6a57dd34837bdc6cc02972c4a54122fec',
    },
    {
        storeId:
            '0xc176a6f522155aa2046116144c69116c0b928547c097f2005beee631cf06c562',
        keycard:
            '0x002e6d41adbf5d3f83d9ed0e617a765f21116b5f79c0d8d812596e098f735e61',
    },
    {
        storeId:
            '0x47b7c13f5a6facd14fcb70880cc1a88b5e716ab94d6e0c4d9add191b704e7408',
        keycard:
            '0x501c2c6b643a6ebb97a1284f5523522684c449fa2a164a85f652883eb9b37ae3',
    },
    {
        storeId:
            '0xbc6be2bbb69e3f11475048d919892cdd14f048b1fd96880c9e9cba19b1481ec8',
        keycard:
            '0xf03f758708e562ada79b0e58318c7b84beae0bc5f2c34647df6ecc14e41e68af',
    },
];

export const testController = {
    test: async (req: Request, res: Response) => {
        const rc = new RelayClient({
            relayEndpoint: `wss://`,
            shopId: '0x0',
            keyCardWallet: privateKeyToAccount('0x0'),
            keyCardEnrolled: false,
        });
    },
};
