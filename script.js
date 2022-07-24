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
let objectIndex = this.farm.findIndex(object => {
     object.farmId===farmId})
     this.farm.splice(objectIndex,1)



}
this.updateFarm = function(farmId,updatedFarmId,updatedFarmName,updatedFarmer,updatedPhone,updatedAddress){
    let farmObject = this.farm.find(object => object.farmId===farmId);
    farmObject.farmId = updatedFarmId;
    farmObject.farmName

}

}
}


    

// Mkulima.prototype.addFarm = function (farmId,name,farmer,phone,address){
//     this.farm.push({farmId,name,farmer,phone,address})
    
    
// }

let mkulimaOne = new Mkulima();
mkulimaOne.addFarm("MK004","myFarm","Wanyonyi","078906638","50890")
mkulimaOne.addFarm("MK005","myFarmOne","Wanyo","078906638","50890")
mkulimaOne.addFarm("MK006","myFarmTwo","Wanyo","078906638","50890")
console.log(mkulimaOne.farm)

mkulimaOne.removeFarm("MK004")
console.log(mkulimaOne.farm)






