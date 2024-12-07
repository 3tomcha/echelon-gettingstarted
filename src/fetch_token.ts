import * as fs from 'fs';

// トークンデータの型定義
interface Token {
  chainId: number;
  tokenAddress: string | null;
  faAddress: string | null;
  name: string;
  symbol: string;
  decimals: number;
  bridge: string | null;
  panoraSymbol: string;
  logoUrl: string;
  websiteUrl: string | null;
  panoraUI: boolean;
  panoraTags: string[];
  panoraIndex: number;
  coinGeckoId: string | null;
  coinMarketCapId: number | null;
}

const loadTokens = (filePath: string): Token[] => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as Token[];
}
const tokens = loadTokens("./src/token_list.json");
console.log(tokens)