
let toogleTop = document.querySelectorAll('.toogle-top');
let toogle = document.querySelectorAll('.toogle');
let rangValue = document.querySelectorAll('.rangValue');
let rangvaluwShow = document.querySelectorAll('.rangvaluwShow');

for(let i=0; i< toogleTop.length; i++){
    toogleTop[i].addEventListener('click',()=>{
       
            if(toogle[i].style.display ==="flex"){
                toogle[i].style.display ="none";
            }else{
                toogle[i].style.display ="flex";
            }   
    });
  
    rangValue[i].oninput = ()=>{
        rangvaluwShow[i].innerHTML = rangValue[i].value; 
    }
}
//  chart section 

let candleDiv = document.querySelector('.candle-div');
//    Compound value R = p(1-r)^n - P

for(let i=0; i<= 25; i++){
      
       

    candleDiv.innerHTML += `  <div class="verticla-div" >
                                <div class="compound"></div>
                                <div class="convensive"></div>
                                <div class="invest"></div>
                                <div class="num"><p>${i}</p></div>
                            </div>`;
  }
let calculateforcast = ()=>{
    let nTime = document.querySelector('#n').value;
    let pFirsInvest = document.querySelector('#p').value;
    let rateYearly = document.querySelector('#r').value;
    let yearlyInvest = document.querySelector('#yearInvest').value;

    //   260 div height 
    // 
  let compounds = document.querySelector('.compound').getBoundingClientRect().height;
  let convensive = document.querySelector('.convensive').getBoundingClientRect().height;
  let invest = document.querySelector('.invest').getBoundingClientRect().height;

  candleDiv.innerHTML = " ";
    
  let investHight1 = [];
  let convensiveVerHeight1 = []; 
  let compoundsVerHeight1 =[]; 

  for(let i=0; i<= nTime; i++){
  
     let primaryInvest = (pFirsInvest * 1)  + ((yearlyInvest * 1 )  * i);
     let convensiveVer =( pFirsInvest * 1)+( primaryInvest * 1 )* ((rateYearly * 1 ) / 100) * i; 
     let compoundsVer = (( primaryInvest * 1)* (( 100 + (rateYearly * 1)) / 100) ** i) -( primaryInvest * 1 );
     investHight1[i] = primaryInvest;
     convensiveVerHeight1[i] = convensiveVer;
     compoundsVerHeight1[i] = compoundsVer;


    candleDiv.innerHTML += `  <div class="verticla-div"  >
                                <div class="compound" ></div>
                                <div class="convensive" ></div>
                                <div class="invest" ></div>
                                <div class="num"><p>${i}</p></div>
                            </div>`;
        
             if(i == nTime){
       
    
         const vrtk=  document.querySelectorAll('.vrtk');
         const compoundClasses=  document.querySelectorAll('.compound');
          const convensiveClasses=  document.querySelectorAll('.convensive');
          const investClasses=  document.querySelectorAll('.invest');
          console.log(investHight1[nTime], convensiveVerHeight1[nTime], compoundsVerHeight1[nTime]  )
          let Onethirdratio =Math.round( (investHight1[nTime] *1 + convensiveVerHeight1[nTime] * 1 + compoundsVerHeight1[nTime] *1 ));
       
        for(let j=0; j<=nTime; j++){

          investClasses[j].style.height = `${investHight1[j] * ( 260 / Onethirdratio)}px`;
          convensiveClasses[j].style.height = `${convensiveVerHeight1[j] * ( 260 / Onethirdratio)}px`;
          compoundClasses[j].style.height = `${compoundsVerHeight1[j] * ( 260 / Onethirdratio)}px`;
             }
            vrtk[0].innerHTML =  Onethirdratio;
            vrtk[3].innerHTML = Math.round( Onethirdratio  / 4);
            vrtk[2].innerHTML = Math.round( (Onethirdratio  / 4) * 2);
            vrtk[1].innerHTML = Math.round( (Onethirdratio  / 4) * 3);
//  end if condition s
            }
              }
  
}


// pdf download maker add 
  

