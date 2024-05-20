import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

import {
    CoinList,
    gateList
} from "../generated/schema";

import {
    e_addCoinbyGator,
    e_lockCoinbyGator,
    e_unlockCoinbyGator
} from "../generated/contract/CoinAbi";
import {
    e_addGater,
    e_unlockGatebyGater,
    e_lockGatebyGater
} from "../generated/contract/TTSwapV1Gator";

//ok;
export function handle_e_addCoinbyGator(event : e_addCoinbyGator) : void {
    let coinList = CoinList.load();
    coinList = new CoinList();
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
    coinList.save();
}

export function handle_e_lockCoinbyGator(event : e_lockCoinbyGator) : void {
    let coinList = CoinList.load(event.params.contractAddress.toString());
    coinList = new CoinList(event.params.contractAddress.toString());
    coinList.gateunlock = false;
    coinList.save();
}

export function handle_e_lockCoinbyGator(event : e_lockCoinbyGator) : void {
    let coinList = CoinList.load(event.params.contractAddress.toString());
    coinList = new CoinList(event.params.contractAddress.toString());
    coinList.gateunlock = true;
    coinList.save();
}

export function handle_e_addGater(event : e_addGater) : void {
    let gateList = gateList.load();
    gateList = new gateList();
    gateList.gateAddress = "#";
    gateList.name = "#";
    gateList.createtimestamp = BigInt.fromI32(0);
    gateList.full_name = "#";
    gateList.country = "#";
    gateList.OfficalWebsite = "#";
    gateList.OfficalIp = "#";
    gateList.marketunlock = false;
    gateList.gateunlock = false;
    gateList.isUsed = true;
    gateList.twriterUrl = "#";
    gateList.bbsUrl = "#";
    gateList.save();
}


export function handle_e_unlockGatebyGater(event : e_unlockGatebyGater) : void {
    let gateList = gateList.load(event.params.gateAddress.toString());
    gateList = new gateList(event.params.gateAddress.toString());
    gateList.gateunlock = false;
    gateList.save();
}

export function handle_e_lockGatebyGater(event : e_lockGatebyGater) : void {
    let gateList = gateList.load(event.params.gateAddress.toString());
    gateList = new gateList(event.params.gateAddress.toString());
    gateList.gateunlock = true;
    gateList.save();
}