class Candidate{
    constructor(ID, name, birthday,) {
        this.id = ID;
        this.name = name;
        this.date = birthday;
        this.score = [];
    }
        showInfo(){
            return 'Ma thi sinh: ' + this.id + 'Ten thi sinh: ' + this.name;
        }
        setScore(a, b, c){
            this.score.push(a, b, c);
        }
        getAverageScore(){
            return (this.score[0] + this.score[1] + this.score[2]) / 3;
        }
}
let candidate1 = new Candidate('HS1', 'Lam', '29-09-2020');
let candidate2 = new Candidate('HS2', 'Duc', '30-09-2020');
let candidate3 = new Candidate('HS1', 'Luan', '01-10-2020');
candidate1.setScore(1,2,3);
candidate2.setScore(4,5,6);
candidate3.setScore(1,1,1);
let averagescore1 = candidate1.getAverageScore();
let averagescore2 = candidate2.getAverageScore();
let averagescore3 = candidate3.getAverageScore()

