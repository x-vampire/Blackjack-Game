
let cards = []
let sum = 0
let cardsvl = document.getElementById("cards-vl")
let blackjack = false
let stillthere = false
let message = ""
let amount = {
    a:"balance",
    b:78
} 
let leftBalance = document.getElementById("amount-vl")
leftBalance.textContent = amount.a+":" + "$"+amount.b

function startGame(){
    stillthere = true
    let firstCard = getrandomCard()
    let secondCard = getrandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getrandomCard(){
    let randomcard =  Math.floor(Math.random()*12)+1
    if(randomcard > 10){
        return 10
    }else if(randomcard === 1){
        return 11
    }else{
        return randomcard
    }
}

function renderGame(){
    cardsvl.textContent = "Cards: "
    for(let i = 0;i<cards.length;i++){
        cardsvl.textContent+=cards[i]+" "
    }
    document.getElementById("sum-vl").textContent = "Sum: "+ sum
    
     
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum ===21){
        message = "You have got Blackjack! You Won..."
        blackjack = true
    }
    else{
        message = "You are out of the game"
        stillthere = false
    }
    document.getElementById("message-vl").textContent = message
}
function newCard(){
    if(stillthere === true && blackjack === false){
        let card = getrandomCard()
        sum+=card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    

}