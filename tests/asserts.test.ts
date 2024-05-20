import { describe, test, assert, beforeAll } from "matchstick-as";
import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import {
    CoinList,
    gateList
} from "../generated/schema";
import {
    handle_e_addCoinbyGator
} from "../src/mapping;

describe("handle_e_addCoinbyGator()", () => {
    beforeAll(() => {
        let coinList = new CoinList();
        coinList.coinFullName = "#";
        coinList.symbol = "#";
        coinList.typecode = "#";
        coinList.decimals = BigInt.fromI32(0);
        coinList.maxSupply = BigDecimal.fromString("0");
        coinList.totalSupply = BigDecimal.fromString("0");
        coinList.contractAddress = "#";
        coinList.marketunlock = false;
        coinList.gateunlock = false;
        coinList.isUsed = true;
        coinList.creator = "#";
        gateList.WhitePaperUrl = "#";
        gateList.OfficalWebsite = "#";
        gateList.blockExplorerUrl = "#";
        gateList.twriterUrl = "#";
        gateList.bbsUrl = "#";
    });

    test("show create a coinList", () => {});
});
