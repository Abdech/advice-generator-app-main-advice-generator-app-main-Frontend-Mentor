const quoteNo = document.querySelector('.number')
const theQuote = document.querySelector('.main-quote')
const dice = document.querySelector('.img-dice')





      
async function advicer() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const {slip} = await res.json()
;
  console.log(slip);
  quoteNo.innerHTML =   `${slip.id}`
    theQuote.innerHTML = `"${slip.advice}`
  
} 

dice.addEventListener('click', advicer)