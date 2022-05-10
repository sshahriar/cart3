 
let btn =  document.getElementsByClassName('card-btn') ;

// let btn1 = document.getElementById('btn1') ;
// console.log(btn1.innerHTML) ; 

let  cnt = 0 ;
let _cnt =  document.getElementById('lblCartCount') ;
 
console.log('here' , cnt)  ;
 
console.log(btn ) ; 
  
for(let i=0 ; i<btn.length ;i++  ) {
    // console.log("hello "  , btn[i]) ;
    btn[i].addEventListener('click' , btnClicked  )  ;
   
}
function btnClicked(e){
    cnt++ ;
    _cnt.innerHTML = cnt ; 
    let parentElement  =  e.target.parentElement ;
    let price =  parentElement.getElementsByClassName('productPrice')[0].innerText ;
    let title =  parentElement.getElementsByClassName('productTitle')[0].innerText ;
    let image =  parentElement.getElementsByClassName('card-image')[0].id ;
    
    console.log(price ,title , image) ;  
    // console.log(image) ;
} 


