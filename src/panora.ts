async function fetchPrice() {
  const end_point = "https://api.panora.exchange/prices"

  const query = {
    tokenAddress: "0x1::aptos_coin::AptosCoin",
  }

  const headers = {
    "x-api-key":
      "a4^KV_EaTf4MW#ZdvgGKX#HUD^3IFEAOV_kzpIE^3BQGA8pDnrkT7JcIy#HNlLGi",
  }

  const queryString = new URLSearchParams(query)
  const url = `${end_point}?${queryString}`

  const response = await (
    await fetch(url, {
      method: "GET",
      headers: headers,
    })
  ).json()
  console.log(response)
}

// fetchPrice()

async function fetchQuote() {
  const end_point = 'https://api.panora.exchange/swap/quote'
  const query = {
    fromTokenAddress: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
    toTokenAddress: "0x1::aptos_coin::AptosCoin",
    fromTokenAmount: "100",
  };

  const headers = {
    "x-api-key":
      "a4^KV_EaTf4MW#ZdvgGKX#HUD^3IFEAOV_kzpIE^3BQGA8pDnrkT7JcIy#HNlLGi",
  }

  const queryString = new URLSearchParams(query).toString();
  const url = `${end_point}?${queryString}`;
  console.log(url)

  const response = await (
    await fetch(url, {
      method: 'GET',
      headers: headers
    })
  ).json();
  console.log(response)
}

fetchQuote()