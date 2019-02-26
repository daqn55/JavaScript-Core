function solve(arr, sortingCriterion){
    class Ticked{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickeds = [];
    for (const a of arr) {
        let data = a.split("|");
        let destination = data[0];
        let price = Number(data[1]);
        let status = data[2];

        let newTicked = new Ticked(destination, price, status);
        tickeds.push(newTicked);
    }

    return tickeds.sort(function(a, b) {
        let newA = a;
        let newB = b;
        switch (sortingCriterion) {
            case 'destination': newA = a.destination; newB = b.destination; break;
            case 'price': newA = a.price; newB = b.price; break;
            case 'status': newA = a.status; newB = b.status; break;
        }

        if (newA < newB) {
          return -1;
        }
        if (newA > newB) {
          return 1;
        }
        return 0;
      });
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));