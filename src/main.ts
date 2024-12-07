import { EchelonClient } from "@echelonmarket/echelon-sdk";
import { Account, Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const aptos = new Aptos(
  new AptosConfig({
    network: Network.MAINNET,
    fullnode: "https://fullnode.mainnet.aptoslabs.com"
  })
);

const client = new EchelonClient(aptos, "0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba")

const markets = await client.getAllMarkets()
console.log(markets)