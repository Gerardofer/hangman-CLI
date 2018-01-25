const wordArray = ['leopard', 'dog', 'horse', 'fish', 'goat', 'dove', 'lion', 'rhino', 'bear', 'puma', 'pig', 'tiger', 'whale'];

class WordGenerator {
  constructor(word, rightArray, wrongArray, newWordArray){
    this.word = wordArray[Math.floor(Math.random() * wordArray.length)],
      this.rightArray = [],
      this.wrongArray = [],
      this.newWordArray = []
  }
  printWordUnder(){
	    for (var i = 0; i < this.word.length; i++){
	       this.newWordArray.push("_");
	    };
  }
  replaceLetter(answers){
    let wordIndex = this.word.indexOf(answers);
    if (answers === ""){
      console.log("Invalid entree, please enter a letter")
    }
    else if (this.word.includes(answers)) {
      this.newWordArray.splice(wordIndex, 1);
      this.newWordArray.splice(wordIndex, 0, answers);
      console.log(JSON.stringify(this.newWordArray.join(" ")));
      console.log("Correct!");
      this.rightArray.push(answers);
    }
    else {
      console.log(JSON.stringify(this.newWordArray.join(" ")));
      console.log("Incorrect");
      this.wrongArray.push(answers);
    }
  }
};

module.exports = WordGenerator;

