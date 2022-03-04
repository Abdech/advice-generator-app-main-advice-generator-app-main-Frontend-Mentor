const quoteNo = document.querySelector('.number')
const theQuote = document.querySelector('.main-quote')
const dice = document.querySelector('.img-dice')


function  advicer() {
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    //   console.log(data)
        quoteNo.innerHTML =   `${data.slip.id}`
        theQuote.innerHTML = `"${data.slip.advice}"`
  }).catch(err => theQuote.innerHTML = err);
}

// This a modern way of using fetch
// async function advicer() {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const {slip} = await res.json()
// ;
//   console.log(slip);
//   quoteNo.innerHTML =   `${slip.id}`
//     theQuote.innerHTML = `"${slip.advice}`
  
// } 

dice.addEventListener('click', advicer)
