import { ProxyState } from "../AppState.js";
import {vendingService} from "../Services/VendingService.js";

function _draw(){
    let totalMoney = document.getElementById("total-money")
    totalMoney.innerText = ProxyState.money.toString()
    let totalPepsiMachine = document.getElementById("amount-pepsi-machine")
    //totalPepsiMachine.innerText = ProxyState.pepsi.toString()
    let totalPepsiOwn = document.getElementById("amount-pepsi-own")
    //totalPepsiOwn.innerText = ProxyState.pepsiOwn.toString()
    let totalFantaMachine = document.getElementById("amount-fanta-machine")
    //totalFantaMachine.innerText = ProxyState.fanta.toString()
    let totalFantaOwn = document.getElementById("amount-fanta-own")
    //totalFantaOwn.innerText = ProxyState.fantaOwn.toString()
    let totalBeerMachine = document.getElementById("amount-beer-machine")
    //totalBeerMachine.innerText = ProxyState.beer.toString()
    let totalBeerOwn = document.getElementById("amount-beer-own")
    //totalBeerOwn.innerText = ProxyState.beerOwn.toString()
    drawResources()
}
function drawResources(){
    var template =""
    var resourceElem=document.getElementById("amount-resource")
    for (let key in ProxyState.vendingMachine){
        let resource = ProxyState.vendingMachine[key]
        template += /* html */`
        <div class="col-md-3 text-center my-3 specialCard" id="resource-amount">
                        <h1>${resource.title}</h1>
                        <h5>There are ${resource.amountMachine} left</h5>
                        <p>Cost:  ${resource.cost}</p>
                        <p>You have ${resource.amountYou}</p>
                        <button class="btn btn-info text-uppercase" onclick="app.vendingController.giveDrink('${key}')"> Buy ${resource.title} </button>
                    </div>
        `
    }
    resourceElem.innerHTML = template
}
export default class VendingController{
    constructor(){
        ProxyState.on("money",_draw)
        ProxyState.on("pepsi",_draw)
        ProxyState.on("pepsiOwn",_draw)
        ProxyState.on("fanta",_draw)
        ProxyState.on("fantaOwn",_draw)
        ProxyState.on("beer",_draw)
        ProxyState.on("beerOwn",_draw)
        ProxyState.on("vendingMachine",_draw)
        _draw()
    }
    addQuarter(){
        vendingService.addQuarter()
    }
    giveDrink(resourceKey){
        vendingService.giveDrink(resourceKey)
    }
   
}