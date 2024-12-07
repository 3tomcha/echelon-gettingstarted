"use strict";
async function findArbitragePath() {
    const endPoint = 'https://api.panora.exchange/swap/quote';
    const toAptosCoinQuery = {
        fromTokenAddress: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
        toTokenAddress: "0x1::aptos_coin::AptosCoin",
        fromTokenAmount: "100"
    };
    const headers = {
        "x-api-key": "a4^KV_EaTf4MW#ZdvgGKX#HUD^3IFEAOV_kzpIE^3BQGA8pDnrkT7JcIy#HNlLGi",
    };
    const toAptosCoinUrl = `${endPoint}?${new URLSearchParams(toAptosCoinQuery)}`;
    try {
        // Step 1: USDC → AptosCoin のスワップ
        const toAptosCoinResponse = await fetch(toAptosCoinUrl, {
            method: "GET",
            headers: headers
        });
        const toAptosCoinData = await toAptosCoinResponse.json();
        const aptosCoinAmount = toAptosCoinData.quotes[0].toTokenAmount;
        console.log("USDC → AptosCoin: ", aptosCoinAmount, " AptosCoin");
        // Step 2: AptosCoin → USDC のスワップ
        const toUSDCQuery = {
            fromTokenAddress: "0x1::aptos_coin::AptosCoin",
            toTokenAddress: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
            fromTokenAmount: aptosCoinAmount
        };
        const toUSDCUrl = `${endPoint}?${new URLSearchParams(toUSDCQuery)}`;
        const toUSDCResponse = await fetch(toUSDCUrl, {
            method: 'GET',
            headers: headers,
        });
        const toUSDCData = await toUSDCResponse.json();
        const usdcAmount = toUSDCData.quotes[0].toTokenAmount; // 返還されたUSDC量
        console.log("AptosCoin → USDC: ", usdcAmount, " USDC");
    }
    catch (error) {
        console.error(error);
    }
}
findArbitragePath();
