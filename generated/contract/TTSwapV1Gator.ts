// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
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

export class e_lockGatebyMarketor extends ethereum.Event {
  get params(): e_lockGatebyMarketor__Params {
    return new e_lockGatebyMarketor__Params(this);
  }
}

export class e_lockGatebyMarketor__Params {
  _event: e_lockGatebyMarketor;

  constructor(event: e_lockGatebyMarketor) {
    this._event = event;
  }

  get gateAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get marketoraddress(): Address {
    return this._event.parameters[1].value.toAddress();
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


export class e_unlockGatebyMarketor extends ethereum.Event {
  get params(): e_unlockGatebyMarketor__Params {
    return new e_unlockGatebyMarketor__Params(this);
  }
}

export class e_unlockGatebyMarketor__Params {
  _event: e_unlockGatebyMarketor;

  constructor(event: e_unlockGatebyMarketor) {
    this._event = event;
  }

  get gateAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get marketoraddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class e_updateGatebyMarketor extends ethereum.Event {
  get params(): e_updateGatebyMarketor__Params {
    return new e_updateGatebyMarketor__Params(this);
  }
}

export class e_updateGatebyMarketor__Params {
  _event: e_updateGatebyMarketor;

  constructor(event: e_updateGatebyMarketor) {
    this._event = event;
  }

  get gateAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): String {
    return this._event.parameters[1].value.toString();
  }
  
  get marketoraddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

}
