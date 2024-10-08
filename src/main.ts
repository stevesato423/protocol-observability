import { GetBalance, GetTotalSupply } from "./get-state-variables";
import { GetTokenData, TokenData } from "./get-token-data";

import { modeConstants } from "./shared/modeConstants";
import { ironcladAddresses } from "./shared/ironcladAddresses";

import { usdcContractAbi } from "./abi/usdc";
import { ironUsdcContractAbi } from "./abi/iron-usdc";
import { protocolDataProviderAbi } from "./abi/protocol-data-provider"

async function main() {
    // const tokenName = "IronUSDC";
    // const tvl = await GetBalance(
    //     modeConstants.rpcUrl,
    //     ironcladAddresses.Reserves.USDC,
    //     usdcContractAbi,
    //     ironcladAddresses.ATokens.ironUSDC,
    //     tokenName
    //   );
    // console.log(`Revenue is: ${tvl}`);
    // const revenue = await GetBalance(
    //     modeConstants.rpcUrl,
    //     ironcladAddresses.ATokens.ironUSDC,
    //     ironUsdcContractAbi,
    //     ironcladAddresses.Treasury,
    //     tokenName
    //   );
    // console.log(`Revenue is: ${revenue}`);
    // const deposit = await GetTotalSupply(modeConstants.rpcUrl, ironcladAddresses.ATokens.ironUSDC, ironUsdcContractAbi, tokenName);
    // console.log(`Deposit is: ${deposit} ${tokenName}`);

    // const debt = await GetTotalSupply(modeConstants.rpcUrl, ironcladAddresses.VariableDebtTokens.vUSDC, ironUsdcContractAbi, tokenName);
    // console.log(`Dept is: ${debt} ${tokenName}`);

    // const tms = deposit + debt;
    // console.log(`TMS is: ${tms} ${tokenName}`);
    const tokenAddresses: TokenData[] = await GetTokenData(modeConstants.rpcUrl, ironcladAddresses.ProtocolDataProvider, protocolDataProviderAbi);

    console.log(tokenAddresses);
}

main();