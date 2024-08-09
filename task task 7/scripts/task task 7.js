let investedTotal=parseFloat(prompt('Введіть суму яку бажаєте вкласти (тис.грн)','1'))
let yearsInvestment=20
let yearsInvestment2=17
for (let y = 0; y < yearsInvestment;y++) {
   investedTotal=investedTotal+(investedTotal/100*20)
   }
for (let x = 0; x <yearsInvestment2; x++) {
   investedTotal=investedTotal+(investedTotal/100*27)
   
}
document.write(`Ви отримаєте ${investedTotal.toFixed(0)}тис.грн.`)