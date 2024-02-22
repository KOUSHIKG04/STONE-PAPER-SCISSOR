let userScore = 0;
let compScore = 0;

 
/*const compGenerate = () => {
    let compGen = $(".comp-choice").eq(Math.floor(Math.random() * $(".comp-choice").length));
    return compGen.attr("id");
};*/

const compGenerate = () => {
  let options = ["R","P","S"]
  let compGen = Math.floor(Math.random()*3)
  return options[compGen];
};


const showWinnwer = (Win) => {
  if (Win) {
    userScore++;
    $("#user-score").text(userScore)
    $(".msg").text("YOU WIN!!"); 
    $(".msg").css({
      "background-color": "white",
      color: "green",
      "text-shadow": "0 0 1px black",
      "font-size": "2rem"
    });
     
  } else {
    compScore++;
    $("#comp-score").text(compScore)
    $(".msg").text("YOU LOSE!");
    $(".msg").css({
      "background-color": "white",
      color: "red",
      "text-shadow": "0 0 1px black",
      "font-size": "2rem"
    });
    
  }
}

const playGame = (user) => {
  let comp = compGenerate();
  console.log("user :",user)
  console.log("comp :",comp)
  
  if(user === comp){
    $(".msg").text("IT'S DRAW, PLAY AGAIN");
    $(".msg").css({
      "background-color": "white",
      color: "yellow",
      "text-shadow": "0 0 3px black",
      "font-size": "2rem"
    });
  }else{
    let Win = true;
    if(user === "R")
    {
      Win = comp === "P" ? false : true;
    }else if(user === "P")
    {
      Win = comp === "S" ? false : true;
    }else{
      Win = comp === "R" ? false : true;
    }
    showWinnwer(Win);
  }
};

//User-Choice
$(".choice").on("click", (e) => {
  const user = $(e.currentTarget).attr("id");
  playGame(user);
});
