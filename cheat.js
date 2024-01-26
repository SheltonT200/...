function cheat(u){
if (u==null||u==undefined){
u = 10
}
for (let i = 0; i < 10; i++) {
Luts.Upgrades.currency[i].d=[1,234,567,890]
Luts.Upgrades.currency[i].e+=20
}
for (let o = 156; o < 174; o++){
Luts.Upgrades.upgrades[o].level=Luts.Upgrades.upgrades[o].maxLevel-1//[156-173]
}
for (let x = 0; x < u; x++){
Luts['Shop'].fakeList[4].androidCallback();
}
}
