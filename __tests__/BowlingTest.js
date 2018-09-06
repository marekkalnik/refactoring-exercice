const Bowling = require('../src/Bowling');

describe('Bowling game score calculator', () => {
    it('is a class', () => {
        const game = new Bowling();
        expect(game).toBeDefined();
    });

    it('has initial score of 0', () => {
        const game = new Bowling();
        expect(game.getScore()).toBe(0);
    });

    it('sums up the number of pins', () => {
        const game = new Bowling();
        game.hit(1);
        game.hit(2);
        expect(game.getScore()).toBe(3)
    });

    it('handles spare', () => {
        const game = new Bowling();
        game.hit(1);
        game.hit(9);
        game.hit(2);
        expect(game.getScore()).toBe(14)
        game.hit(8);
        game.hit(2);
        expect(game.getScore()).toBe(26)
    });

    xit('handles strike', () => {
        const game = new Bowling();
        game.hit(10);
        game.hit(2);
        game.hit(2);
        expect(game.getScore()).toBe(18)

        game.hit(10);
        game.hit(2);
        game.hit(2);
        expect(game.getScore()).toBe(36)
    });
});