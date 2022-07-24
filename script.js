class Mkulima{
    constructor(){
        this.farm = []

this.products = []
this.orders = []
this.addFarm = function (farmId,name,farmer,phone,address){
    this.farm.push({farmId,name,farmer,phone,address})
    
    
}
this.removeFarm = function (farmId){
    // const filteredObject = this.farm.filter(item => {
    //     return item.farmId !== farmId
        
    // })
let farmIndex = this.farm.findIndex(object => {
     object.farmId===farmId})
     this.farm.splice(farmIndex,1)



}
this.updateFarm = function(farmId,updatedFarmId,updatedFarmName,updatedFarmer,updatedPhone,updatedAddress){
    let farmObject = this.farm.find(object => object.farmId===farmId);
    farmObject.farmId = updatedFarmId;
    farmObject.name = updatedFarmName;
    farmObject.farmer = updatedFarmer;
    farmObject.phone = updatedPhone;
    farmObject.address = updatedAddress;


}
this.getFarm = function (id){
    console.log(this.farm.find(object=>object.farmId===id))

}
this.addProduct = function(productId,productName,price){
    this.products.push({productId,productName,price})
}
this.removeProduct = function (productId){
    let productIndex = this.products.findIndex(object => {
        object.productId===productId});
        this.farm.splice(Index,1);
   

}
this.updateProduct = function(productId,updatedProductId,updatedProductName,updatedProductPrice){
    let productObject = this.products.find(object => object.productId===productId);
    productObject.productId = updatedProductId;
    productObject.productName = updatedProductName;
    productObject.price = updatedProductPrice;
    

}
this.getProduct= function (productId){
    console.log(this.products.find(object=>object.productId===productId))

}
this.printProducts = function(){
    console.log(this.products)
}
this.calculateCost = function (productId,quantity){
    let collectedProducts = this.products.find(object =>object.productId===productId)
    console.log(`${quantity} ${collectedProducts.productName} for KSH ${quantity*collectedProducts.price}`)
}
}
}


    

// Mkulima.prototype.addFarm = function (farmId,name,farmer,phone,address){
//     this.farm.push({farmId,name,farmer,phone,address})
    
    
// }






