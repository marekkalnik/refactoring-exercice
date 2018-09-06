class Bowling{
    constructor() {
        this.previousHit = 0;
        this.beforePreviousHit = 0;
        this.isRoundBeginning = true;
        this.score = 0;
    }

    getScore(){
        return this.score;
    }

    hit(pins) {
        if (this.isRoundBeginning) {
            if (this.previousHit + this.beforePreviousHit == 10) {
                this.score += pins;
            }
        }

        this.score += pins;    

        this.beforePreviousHit = this.previousHit;
        this.previousHit = pins;

        this.isRoundBeginning = !this.isRoundBeginning;
    }
}

module.exports = Bowling;