let expect = require('chai').expect;
let FilmStudio = require('../filmStudio').FilmStudio;

describe("Tests …", function() {
    describe("Constructor check", function() {
        it("expect on initial name to have data", function() {
            let fs = new FilmStudio('someStudio');
            expect(fs.name).to.be.equal('someStudio');
        });
        it('expect on initial to have empty array', function () {
            let fs = new FilmStudio();
            expect(fs.films).to.be.deep.equal([]);
        })
    });
    describe('Make movie tests', function () {
        it('throw error on invalid arguments', function () {
            let fs = new FilmStudio('someStudio');
            expect(() => fs.makeMovie('The Avengers', 'Iron-Man')).to.throw('Invalid arguments')
        });
        it('trow invalid arguments count', function () {
            let fs = new FilmStudio('someStudio');
            expect(() => fs.makeMovie('The Avengers', 'Iron-Man', 'The Avengers', 'Iron-Man')).to.throw('Invalid arguments count');
        });
        it('return correct input', function () {
            let fs = new FilmStudio('someStudio');
            let movie = fs.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(movie).to.be.deep.equal({ filmName: 'The Avengers',
                filmRoles:
                    [ { role: 'Iron-Man', actor: false },
                        { role: 'Thor', actor: false },
                        { role: 'Hulk', actor: false },
                        { role: 'Arrow guy', actor: false } ] });
        });
    });
    describe('Casting tests', function () {
       it('there is no film test', function () {
            let fs = new FilmStudio();
            expect(fs.casting('az', 'nqkva tupa rolq')).to.be.equal('There are no films yet in undefined.')
       });
       it('cannot find role', function () {
            let fs = new FilmStudio('SU-Studio');
            fs.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            expect(fs.casting('az', 'nqma takava rolq')).to.be.equal('az, we cannot find a nqma takava rolq role...');
       });
       it('return correct input', function () {
           let fs = new FilmStudio('SU-Studio');
           fs.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
           expect(fs.casting('az', 'Iron-Man')).to.be.equal('You got the job! Mr. az you are next Iron-Man in the The Avengers. Congratz!');
       });
    });
    describe('Look for producer tests', function () {
       it('throw error film not exist', function () {
           let fs = new FilmStudio('SU-Studio');
           fs.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
           expect(() => fs.lookForProducer('someMovie')).to.throw('someMovie do not exist yet, but we need the money...')
       });
       it('test', function () {
           let fs = new FilmStudio('SU-Studio');
           fs.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
           expect(fs.lookForProducer('The Avengers')).to.be.equal('Film name: The Avengers\nCast:\nfalse as Iron-Man\nfalse as Hulk\nfalse as Arrow guy\nfalse as Ant-man\n');
       });
    });
});
