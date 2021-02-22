import { ProxyState } from "../AppState.js";

class VendingService {
    addQuarter(){
        ProxyState.money = ProxyState.money+25
        console.log("why");
    }
    
    
    giveDrink(resourceKey){
        let resource = ProxyState.vendingMachine[resourceKey]
        
        if (ProxyState.money >= resource.cost&&resource.amountMachine > 0){
            ProxyState.money = ProxyState.money - 100
            resource.amountMachine --
            resource.amountYou ++
            console.log("pepsi",ProxyState.vendingMachine[resourceKey],resource)
            ProxyState.vendingMachine = ProxyState.vendingMachine
        }
    }
}

export const vendingService = new VendingService();