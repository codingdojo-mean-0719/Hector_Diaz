class Card{
    constructor(suit,number){
        const values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
        
        this.suit = suit;
        this.number = number;
        this.value = values[number-1];
    }

    show(){
        console.log(`the ${this.value} of ${htis.suit}`);
    }
}
function cardSort(cards){
    let bigCatcher =cards[0];
    let lilCatcher = cards[0];
    for(var i = 0; i < cards.length; i++){
        lilCatcher =cards[i];
        if(lilCatcher.number > bigCatcher.number){
        bigCatcher = lilCatcher;
        }
    if( bigCatcher.number > lilCatcher.number){
        lilCatcher = cards[i];
        cards[i-1]=lilCatcher;
        cards[i]=bigCatcher;
        var j = i + 1;
        i = 0
        bigCatcher = cards[0]
    }

    }
    return cards
}
function suitSort(cards){
    let bigCatcher =cards[0];
    let lilCatcher = cards[0];
    for(var i = 0; i < cards.length; i++){
        lilCatcher =cards[i];
        if(lilCatcher.suit > bigCatcher.suit){
            bigCatcher = lilCatcher;
        }
        if( bigCatcher.suit > lilCatcher.suit){
            lilCatcher = cards[i];
            cards[i-1]=lilCatcher;
            cards[i]=bigCatcher;
            i = 0
            bigCatcher = cards[0]
    }

    }
    return cards
}
class Deck{
    constructor(){
        this.cards = [];
        const suits = ['Hearts','Clubs','Spades','Diamonds'];
        for(let j = 0; j < suits.length; j++){
            for(let i = 1; i <= 13; i++){
                let card = new Card(suits[j],i);
                this.cards.push(card);
    
            }
        }
    }
    shuffle(cards){
        let end = cards.length, holder, randomIndex;

        // While there remain elements to shuffle…
        while (end) {
      
          // Pick a remaining element…
          randomIndex = Math.floor(Math.random() * end--);
      
          // And swap it with the current element.
          holder = cards[end];
          cards[end] = cards[randomIndex];
          cards[randomIndex] = holder;
        }
   }
    reset(){
        let hearts = [],
         spades =  [],
         daimons = [],
         club = [];

         for(let i = 0; i < this.cards.length; i++){
             if(this.cards[i].suit === 'Spades'){
                 
             }
         }
        this.cards = new Deck();
        //sort by suit/. each suit = array
        //while sorting suit/ insert card at index card.number-1
        //loop all arrays. push active index into hand
    };
            

    deal(){
        let card = this.cards.pop();
        return card;
    }
}

class Player{
    constructor(){
        
    }
}