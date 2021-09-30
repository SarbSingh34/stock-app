var initialprice = document.querySelector('#initialprice');
var  stockprice = document.querySelector('#stocksprice');
var  currentprice = document.querySelector('#current-price');
var  submitbtn  = document.querySelector('#submit-btn');
var  outputbox   = document.querySelector('#output-box');



 submitbtn.addEventListener('click', submithandler);
 
 
 function submithandler()
  {
    
     var ip =   initialprice.value;
     var sp =   stockprice.value;
     var cur =  currentprice.value;
     
     calculatelossandprofit(ip,sp,cur);
 
  }

   function calculatelossandprofit(initial,quantity,current)
   {

      if(initial > current)
      {

          var loss = (initial - current) * quantity; /* (100 - 10)* 10 = 900 */
          var losspercentage =  (loss/initial)* 100; /* (900/100)*100  = 900%  */

            outputbox.innerHTML	 = `   Hey the loss is ${loss} and losspercentage is ${losspercentage}%  ;`

          outputbox.style.color =  "orange";


  /*         console.log(` Hey the loss is ${loss} and losspercentage is ${losspercentage}%  `);
           */
      }
        else if(current > initial)
      {
        var profit = (current - initial) * quantity; 
        var profitpercentage =  (profit/initial)*100;  
        
          outputbox.innerHTML	 = `  Hey the profit  is ${profit} and  profitpercentage is ${profitpercentage}% ;`
          
           outputbox.style.color =  "green";

        
           /*  console.log(` Hey the profit  is ${profit} and  profitpercentage is ${profitpercentage}%  `); */

      }
      else
      {  
      
       
          outputbox.innerHTML	 = " No Pain No  Gain ";
          outputbox.style.color =  "blue";
       
      }
   }


  





