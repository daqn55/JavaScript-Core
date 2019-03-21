class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = shelfCapacity;

        return this;
    }

    get room(){
        return this._room;
    }

    set room(room){
        if(room !== 'livingRoom' && room !== 'bedRoom' && room !== 'closet'){
            throw (`Cannot have book shelf in ${room}`);
        }

        this._room = room;
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre){
        if(this.shelf.length >= this.shelfCapacity) {
            this.shelf.shift();
        }
        let book = {bookName, bookAuthor, genre};

        this.shelf.push(book);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }

    showBooks(genre){
        let result = `Results for search "${genre}":\n`;
        for(let b of this.shelf){
            if(b.genre === genre){
                result += `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"\n`
            }
        }

        return result.trim();
    }

    throwAwayBook(bookName){
        //for (let i = this.shelf.length-1; i >= 0; i--) {
        //    if(this.shelf[i][0] === bookName){
        //        this.shelf.splice(i, 1);
        //    }
        //}

        this.shelf = this.shelf.filter(b => b.bookName !== bookName);

        return this;
    }

    toString(){
        if(this.shelf.length <= 0){
            return "It's an empty shelf";
        }

        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
        for(let b of this.shelf){
            result += `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}\n`
        }

        return result.trim();
    }
}

//let newBookCol = new BookCollection('asd', 'asd', 3);

let livingRoom = new BookCollection("Programming", "livingRoom", 5);
    livingRoom.addBook("BIntroduction to Programming with C#", "Svetlin Nakov");
console.log(livingRoom.addBook("CIntroduction to Programming with J", "Svetlin Nakov"));;
    livingRoom.addBook("AProgramming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
bedRoom.addBook("CIntroduction to Programming with J", "Svetlin Nakov");
bedRoom.addBook("AProgramming for .NET Framework", "Svetlin Nakov");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.toString());
bedRoom.throwAwayBook('Atlas of Remote Islands');
console.log(bedRoom.toString());
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
bedRoom.addBook("AProgramming for .NET Framework", "Svetlin Nakov");
console.log(bedRoom.toString());
bedRoom.throwAwayBook('AProgramming for .NET Framework');
console.log(bedRoom.toString());



