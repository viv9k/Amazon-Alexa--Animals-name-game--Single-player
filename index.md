## Welcome to Amazon Alexa Animal name games single player

The game will help your kids to learn and grow. It is based on childhood game where students (kids) play among themselves. Specially desgined to take the development over assistance technology to newer level.

The repository contains all the jason file and js files that you can edit as per your requirements. The first version of skill was published in january 2018. And the intent model is carried from older version performing the intent sheme to update according to amazon's policy.

### General Logic code

It includes the comparision of different types two strings, The input received from the user and the answer as the input can never be same therefore it is store into an array looking for the index. If index is not found the answer is accepted.

```markdown
Logic codes that needs to be followed.

# SetMyGameIntent

SetMyGameIntent': function() {
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

## SetMyAnimalIntent

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
  
### Support or Contact

For more skills chcek my github repository [link] (https://github.com/vivekaindia) or contact me at vvksindia@gmail.com
