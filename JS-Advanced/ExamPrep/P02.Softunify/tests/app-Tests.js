let expect = require('chai').expect;
let SoftUniFy = require('../app').SoftUniFy;

describe("Tests", function() {
    it("should contains allSongs property as empty object", function() {
        let sf = new SoftUniFy();
        expect(sf.allSongs).to.be.deep.equal({})
    });

    it("test download song", function() {
        let sf = new SoftUniFy();
        sf.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        expect(sf).to.be.deep.equal({ allSongs: { Eminem: { rate: 0, votes: 0, songs: [ 'Venom - Knock, Knock let the devil in...' ] } } })
    });

    it('play song test', function () {
        let sf = new SoftUniFy();
        sf.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        expect(sf.playSong('Venom')).to.be.equal('Eminem:\nVenom - Knock, Knock let the devil in...\n');
    })

    it('play song with missing song', function () {
        let sf = new SoftUniFy();
        sf.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        expect(sf.playSong('dane')).to.be.equal(`You have not downloaded a dane song yet. Use SoftUniFy\'s function downloadSong() to change that!`);
    });
});
