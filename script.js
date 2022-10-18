const valorConvertido = document.querySelector('#valorConvertido')
const buttom = document.querySelector('#buttom')
buttom.onclick = botaoCarregar

 function transJson(response){
    return response.json() 
}

async function botaoCarregar(){

    const dados = await fetch(`https://v6.exchangerate-api.com/v6/290988fdcfedb027156fa5a3/latest/USD`)

      .then(transJson)
      .then((exibir) => {
        //console.log(exibir)
        const inputOne = document.querySelector('#valor')
        const valor = inputOne.value
        const input = parseFloat(valor)

        const rate = exibir.conversion_rates.BRL
        const cal = (rate * input)
        valorConvertido.innerText = `R$ ${cal.toFixed(2)}`
        //console.log(cal)


      
    })
      .catch('')

}


document.addEventListener("keypress", function(e){
  if(e.key ==="Enter"){
    buttom.click()
  }})






