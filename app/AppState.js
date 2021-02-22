import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  vendingMachine = {
    pepsi:{
      title: "Pepsi",
      cost: 100,
      amountYou:0,
      amountMachine:10
    },
    fanta:{
      title:"Fanta",
      cost:100,
      amountYou:0,
      amountMachine:10
    },
    beer:{
      title:"Beer",
      cost:200,
      amountYou:0,
      amountMachine:20
    }
  }

  money = 0
  pepsi = 10
  pepsiOwn=0
  fanta = 10
  fantaOwn=0
  beer = 20
  beerOwn =0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
