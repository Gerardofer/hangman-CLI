const wordArray = ['cat', 'dog', 'horse', 'fish'];
//const userInput = process.argv[2];
// let newWordArray = [];
//let rightArray = [];
//let wrongArray = [];


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
    // console.log(this.word);
  }
  replaceLetter(answers){
    let wordIndex = this.word.indexOf(answers);
    if (this.word.includes(answers)){
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
}


//console.log("Hello!!!");
module.exports = WordGenerator;

//var newWord = new WordGenerator();
//newWord.printWordUnder();
//newWord.replaceLetter();

