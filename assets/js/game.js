$( document ).ready(function(){

    //Pick Random Number
    var randomNumber=Math.floor(Math.random()*95+10)
    $('#randomNumber').text(randomNumber);

    //Pick Random Number for Each Gem
    var num1= Math.floor(Math.random()*10+1)
    var num2= Math.floor(Math.random()*10+1)
    var num3= Math.floor(Math.random()*10+1)
    var num4= Math.floor(Math.random()*10+1)

    //Set initial score
    var score= 0; 
    var wins= 0;
    var losses = 0;

    $('#winTotal').text(wins);
    $('#lossTotal').text(losses);
  
  //Reset Game
  function reset(){
        randomNumber=Math.floor(Math.random()*95+10);
        console.log(randomNumber)
        $('#randomNumber').text(randomNumber);
        num1= Math.floor(Math.random()*10+1);
        num2= Math.floor(Math.random()*10+1);
        num3= Math.floor(Math.random()*10+1);
        num4= Math.floor(Math.random()*10+1);
        score= 0;
        $('#totalScore').text(score);
        } 


    //Winner
  function winner(){
  alert("You won!");
    wins++; 
    $('#winTotal').text(wins);
    reset();
  }
    //Loser
  function loser(){
  alert ("You lose!");
    losses++;
    $('#lossTotal').text(losses);
    reset()
  }
    // On Click Events
    $('#yellowGem').on ('click', function(){
        //Assign random number and add to score
      score = score + num1;
        //Update HTML
      $('#totalScore').text(score); 
            //Did they win or lose?
          if (score == randomNumber){
            winner();
          }
          else if ( score > randomNumber){
            loser();
          }   
    })  
    $('#blueGem').on ('click', function(){
      score = score + num2;
      $('#totalScore').text(score); 
          if (score == randomNumber){
            winner();
          }
          else if ( score > randomNumber){
            loser();
          } 
    })  
    $('#redGem').on ('click', function(){
      score = score + num3;
      $('#totalScore').text(score);
            if (score == randomNumber){
            winner();
          }
          else if ( score > randomNumber){
            loser();
          } 
    })  
    $('#greenGem').on ('click', function(){
      score = score + num4;
      console.log("New score= " + score);
      $('#totalScore').text(score);         
            if (score == randomNumber){
            winner();
          }
          else if ( score > randomNumber){
            loser();
          }
    });   
  }); 