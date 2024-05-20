// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
  String,
} from "@graphprotocol/graph-ts";

export class e_addGater extends ethereum.Event {
  get params(): e_addGater__Params {
    return new e_addGater__Params(this);
  }
}

export class e_addGater__Params {
  _event: e_addGater;

  constructor(event: e_addGater) {
    this._event = event;
  }

  get gateAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): String {
    return this._event.parameters[1].value.toString();
  }

}

export class e_addGaterDetail extends ethereum.Event {
  get params(): e_addGaterDetail__Params {
    return new e_addGaterDetail__Params(this);
  }
}

export class e_addGaterDetail__Params {
  _event: e_addGaterDetail;

  constructor(event: e_addGaterDetail) {
    this._event = event;
  }

  get gateaddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

}

export class e_lockGatebyGater extends ethereum.Event {
  get params(): e_lockGatebyGater__Params {
    return new e_lockGatebyGater__Params(this);
  }
}

export class e_lockGatebyGater__Params {
  _event: e_lockGatebyGater;

  constructor(event: e_lockGatebyGater) {
    this._event = event;
  }

  get gateAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

}

export class e_unlockGatebyGater extends ethereum.Event {
  get params(): e_unlockGatebyGater__Params {
    return new e_unlockGatebyGater__Params(this);
  }
}

export class e_unlockGatebyGater__Params {
  _event: e_unlockGatebyGater;

  constructor(event: e_unlockGatebyGater) {
    this._event = event;
  }

  get gateAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

}


