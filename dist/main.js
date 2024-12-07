import { EchelonClient } from "@echelonmarket/echelon-sdk";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
const aptos = new Aptos(new AptosConfig({
    network: Network.MAINNET,
    fullnode: "https://fullnode.mainnet.aptoslabs.com/v1"
}));
const client = new EchelonClient(aptos, "0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba");
const account = "0x962cd3c5766bd235c22c9e8da74d0ffc1eac842443ad74ef764e7c1cdda69087";
const markets = await client.getAllMarkets();
console.log(markets);
const market = markets[0]; // use the first market as an example
const coin = await client.getMarketCoin(market);
console.log(coin);
const borrowable = await client.getAccountBorrowable(account, market);
console.log(borrowable);
