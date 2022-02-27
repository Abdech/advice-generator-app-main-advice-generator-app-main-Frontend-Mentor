const quoteNo = document.querySelector('.number')
const theQuote = document.querySelector('.main-quote')
const dice = document.querySelector('.img-dice')


fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
      console.log(data)

      dice.addEventListener('click', () => {
         quoteNo.innerHTML =   `${data.slip.id}`
          theQuote.innerHTML = `"${data.slip.advice}"`
      })



  });