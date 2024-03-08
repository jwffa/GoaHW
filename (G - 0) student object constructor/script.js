function Student(name, surename, score){
    this.name = name;
    this.surename = surename;
    this.score = score;
}
let name1 = prompt('Enter your name: ');
let surename1 = prompt('Enter your surename: ');
let score1 = prompt('Your score: ');

let result = new Student(name1, surename1, score1);

console.log(result)