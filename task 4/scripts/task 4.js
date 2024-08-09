let sum=0
let numberUser
let evenNumbers=0
let variable_N=parseInt(prompt('Введіть кількість парних чисел суму яких ви хочете знайти ','1'))
do{ numberUser=parseFloat(prompt(`Введіть число`,`0`));
   if (numberUser%2===0){
      sum+=numberUser
   evenNumbers++}
   
}
while(evenNumbers<variable_N)
  
   document.write(`Сума введених парних чисел=${sum}`)