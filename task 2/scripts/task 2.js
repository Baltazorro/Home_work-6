let sum=1
let numberUser
do{ numberUser=parseFloat(prompt(`Введіть число`,`0`));
   if (numberUser!==0) {
      sum=sum*numberUser 
   }
   else break
  
}
while(numberUser!==0)
  
   document.write(`Добуток введених чисел=${sum}`)