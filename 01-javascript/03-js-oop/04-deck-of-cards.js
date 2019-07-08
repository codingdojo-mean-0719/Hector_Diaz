class Card{
    constructor(suit,number){
        const values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
        
        this.suit = suit;
        this.number = number;
        this.value = values[number-1];
    }

    show(){
        console.log('the '+this.value+" of "+htis.suit);
    }
}
class Deck{
    constructor(){
      this.shuffled = false;
        this.cards = [];
        const suits = ['Hearts','Clubs','Spades','Diamonds'];
        for(let j = 0; j < suits.length; j++){
            for(let i = 1; i <= 13; i++){
                let card = new Card(suits[j],i);
                this.cards.push(card);
    
            }
        }
    }
    shuffle(){
      this.shuffled = true
        let end = this.cards.length, holder, randomIndex;

        // While there remain elements to shuffle…
        while (end) {
      
          // Pick a remaining element…
          randomIndex = Math.floor(Math.random() * end--);
      
          // And swap it with the current element.
          holder = this.cards[end];
          this.cards[end] = this.cards[randomIndex];
          this.cards[randomIndex] = holder;
        }
   }
    reset(){
        this.shuffled = false
        let hearts = [],
         spades =  [],
         diamonds = [],
         clubs = [],
         holder = [];

         for(var i = 0; i < this.cards.length; i++){
             if(this.cards[i].suit === 'Spades'){
                spades[this.cards[i].number-1]=this.cards[i]
             }
             if(this.cards[i].suit === 'Diamonds'){
                diamonds[this.cards[i].number-1]=this.cards[i]
             }
             if(this.cards[i].suit === 'Clubs'){
                clubs[this.cards[i].number-1]=this.cards[i]
             }
             if(this.cards[i].suit === 'Hearts'){
                hearts[this.cards[i].number-1]=this.cards[i]
             }
         }
         for(i=0;i<spades.length; i++){
             if(spades[i]){
                 holder.push(spades[i]);
             }
         }
         for(i=0;i<diamonds.length; i++){
             if(diamonds[i]){
                 holder.push(diamonds[i]);
             }
         }
         for(i=0;i<clubs.length; i++){
             if(clubs[i]){
                 holder.push(clubs[i]);
             }
         }
         for(i=0;i<hearts.length; i++){
             if(hearts[i]){
                 holder.push(hearts[i]);
             }
         }
        this.cards = holder;
  
    }
            

    deal(){
        if(this.shuffled){
          let card = this.cards.pop();
          return card;
        }else{
          throw new Error("please shuffle the deck first")
        }
    }
}

class Player{
    constructor(name,cards){
        this.name = name;
        this.hand = [];
        while(this.hand.length < 5){
          console.log("in while")
            this.hand.push(cards.deal())
        }
    }
    take(cards){
        this.hand.push(cards.deal());
    }
    discard(cardIndex,deck){
        let discard = this.hand[cardIndex],
        holder = [];
      
        deck.cards.push(discard);
        for(let card in this.hand){
            if(this.hand[card] != discard){
                holder.push(this.hand[card])
            }
        }
        this.hand = holder;
    }
}

var deck = new Deck();
deck.shuffle()

var hector = new Player('hector',deck);
console.log("this is hand before",hector.hand)
hector.discard(4,deck);
console.log('this is hand after',hector.hand)
hector.take(deck)
console.log('this is hand after take', hector.hand)









