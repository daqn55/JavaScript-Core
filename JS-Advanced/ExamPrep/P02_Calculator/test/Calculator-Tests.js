let expect = require('chai').expect;
let Calculator = require('../Calculator').Calculator;

describe("tests Calculator", function() {
    it("should return 1 -> 2 -> 3 when add three numbers", function() {
        let expected = "1 -> 2 -> 3";
        let cal = new Calculator();
        cal.add(1);
        cal.add(2);
        cal.add(3);
        expect(cal.toString()).to.be.equal(expected);
    });
    it('should return toString empty Array if array is empty', function () {
       let cal = new Calculator();
       expect(cal.toString()).to.be.equal('empty array');
    });
    it("should throw error when divide number with empty array", function () {
        let cal = new Calculator();
        expect(() => cal.divideNums()).to.throw("There are no numbers in the array!");
    });
    it('should return 1 when divide 10 by 10', function () {
       let cal = new Calculator();
       cal.add(10);
       cal.add(10);
       cal.add('pesho');
       expect(cal.divideNums()).to.be.equal(1);
    });
    it('should return erron Cannot divide by zero when call divideNums', function () {
       let cal = new Calculator();
       cal.add(10);
       cal.add(0);
       expect(cal.divideNums()).to.be.equal('Cannot divide by zero');
    });
    it('should return empty if array is empty and call orderBy', function () {
       let cal = new Calculator();
       expect(cal.orderBy()).to.be.equal('empty');
    });
    it('should return sorted array by number when call orderBy', function () {
       let cal = new Calculator();
       cal.add(9);
       cal.add(2);
       cal.add(10);
       expect(cal.orderBy()).to.be.equal("2, 9, 10");
    });
    it('should return sorted array when data is mixed when call OrderBy', function () {
       let cal = new Calculator();
       cal.add(2);
       cal.add('pesho');
       cal.add('4');
       expect(cal.orderBy()).to.be.equal('2, 4, pesho');
    });
    it('should return length of array', function () {
       let cal = new Calculator();
       expect(cal.expenses.length).to.be.equal(0);
    });
    it('check func are attached to proto', function () {
        expect(typeof Calculator.prototype.add === 'function').to.be.true;
        expect(typeof Calculator.prototype.divideNums === 'function').to.be.true;
        expect(typeof Calculator.prototype.toString === 'function').to.be.true;
        expect(typeof Calculator.prototype.orderBy === 'function').to.be.true;
    });
});
