'use strict';

var Alexa = require('alexa-sdk');

var firstLetter = '';
var lastLetter = '';
var animals = [];
var c;
var life;
var score;


var handlers = {

  'LaunchRequest': function() {
    this.attributes['game'] = '';
    this.attributes['animals']='';
    
    c=1;
    life=3;
    score=0;
    lastLetter='a';
    animals = [];
    
    
    this.response
        .speak('Welcome to Animals Words Games. Recommended for new users please listen the instructions, If you want to continue without instructions say yes ?').listen(
        'If you want to continue say Yes?');
    this.emit(':responseReady');
  },

  'SetMyGameIntent': function() {
          this.attributes['game'] = this.event.request.intent.slots.start.value;
    var game = this.attributes['game'];
    
    if (game == 'yes') {
      this.response
          .speak('Okay, Let\'s start our game, Say an animal name with ' + lastLetter +' ? If you don\'t have any answer say stop').listen('Say an animal name with' + lastLetter + ' ?');
    }
    else if(game == 'over' || game == 'end' || game == 'go'|| game == 'finish'){
        this.response.speak('Your score is ' + score);
    }
    else{
     this.response
          .speak('Sorry, i didnot get Please speak clearly. Your score is ' + score + '.').listen('Sorry, i didnot get Please speak clearly.');
    }
    this.emit(':responseReady');
  },
  
  'SetMyAnimalIntent': function(){
   
   this.attributes['animals'] = this.event.request.intent.slots.animals.value;
   var lastWord = this.attributes['animals'];
   var n = -1;
  
   firstLetter = lastWord.charAt(0);
   if (firstLetter == lastLetter){
   
      n = animals.indexOf(lastWord);
      
       if(n==-1){
        animals[c] = lastWord;
        c++;
        lastLetter = lastWord.charAt(lastWord.length-1);
        score++;
        this.response.speak('You are right. Next animal by letter ' + lastLetter)
        .listen('Next animal by letter ' + lastLetter +'. if you don\'t know you can say. Over');
       }
       else{
           if(life==0){
               this.response.speak('Your score is ' + score);
           }
           else{
               life--;
               this.response.speak('Already used, you have '+ life + ' more life left. Try another').listen('Try another');
           }
       }
   }
  else{
      if(life==0){
          this.response.speak('Your score is ' + score);
      }
      else{
          life--;
         this.response.speak('You are wrong. You have '+ life +' more lifes left. You can only say an animal name by letter ' + lastLetter).listen('Please try another');
        }
  }
  
  this.emit(':responseReady');
  },
  
  'SetMyInstructionIntent': function(){
        this.response.speak('Here are your instructions: ' +
        ' 1. You will have 3 lifes.' +
        ' 2. Once the answer is given, you cannot change it.' +
        ' 3. In this animal name game we will start with letter a.' +
        ' 4. You will have to tell the name of the animal starting by an alphabet a.' +
        ' 5. If you are right score will be added to the score board. ' +
        ' 6. Repeation of names are not allowed. You will loose a life.' +
        ' 7. The next name wil be asked by last alphabet of your previous answer.' +
        ' 8. If you answer an animal name that is not starting by asked alphabet, you will loose a life.' +
        ' 9. If you want to end, you can say. I want to go or Let\'s finish, over.' +
        ' Would like to play the game. just say yes?').listen('Would like to play the game. just say yes?');
        this.emit(':responseReady');
  },


  // Stop
  'AMAZON.StopIntent': function() {
      this.response.speak('Ok, You score is ' + score + '. let\'s play again soon.');
      this.emit(':responseReady');
  },

  // Cancel
  'AMAZON.CancelIntent': function() {
      this.response.speak('Ok, let\'s play again soon.');
      this.emit(':responseReady');
  },
  
    //Help
   'AMAZON.HelpIntent': function () {
         this.response.speak('You can call 911, or ask for instructions about the game. What would you like to do?').listen('What can I help you with?');
         this.emit(':responseReady');
 }
  
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
