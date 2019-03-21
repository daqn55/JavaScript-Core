class Hotel {
    constructor(name, capacity){
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.services = [];

        this.roomsCapacity = {
            single: Math.floor(capacity * 0.5),
            double: Math.floor(capacity * 0.3),
            maisonette: Math.floor(capacity * 0.2)
        };
    }

    get roomsPricing(){
        return {
            single: 50,
            double: 90,
            maisonette: 135
        };
    }

    get servicesPricing(){
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        };
    }

    rentARoom(clientName, roomType, nights){
        let roomNumber = this.currentBookingNumber;
        let output = '';
        if(this.roomsCapacity[roomType] > 0){
            let clientObj = {clientName, roomType, nights, roomNumber};
            this.bookings.push(clientObj);
            this.currentBookingNumber++;
            this.roomsCapacity[roomType]--;

            output = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${roomNumber}.`;
        }else{
            output = `No ${roomType} rooms available!`;
            for(let x in this.roomsCapacity){
                if(x !== roomType){
                    output += ` Available ${x} rooms: ${this.roomsCapacity[x]}.`;
                }
            }
        }

        return output;
    }

    roomService(currentBookingNumber, serviceType){
        let output = '';
        let client = this.bookings.filter(x => x.roomNumber === currentBookingNumber);
        if(this.servicesPricing[serviceType] !== undefined) {
            if (client.length === 1) {
                let bookingNumber = currentBookingNumber;
                this.services.push({bookingNumber, serviceType});

                output = `Mr./Mrs. ${client[0].clientName}, Your order for ${serviceType} service has been successful.`;
            } else {
                output = `The booking ${currentBookingNumber} is invalid.`;
            }
        }else{
            output = `We do not offer ${serviceType} service.`;
        }

        return output;
    }

    checkOut(currentBookingNumber){
        let client = this.bookings.filter(x => x.roomNumber === currentBookingNumber);
        let output = '';

        if(client.length === 1){
            let totalMoney = client[0].nights * this.roomsPricing[client[0].roomType];
            this.roomsCapacity[client[0].roomType]++;
            let services = this.services.filter(x => x.bookingNumber === currentBookingNumber);
            if(services.length > 0){
                let totalServiceMoney = services.map(x => this.servicesPricing[x.serviceType]).reduce((a, b) => a + b);
                output = `We hope you enjoyed your time here, Mr./Mrs. ${client[0].clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`
            }else{
                output = `We hope you enjoyed your time here, Mr./Mrs. ${client[0].clientName}. The total amount of money you have to pay is ${totalMoney} BGN."`
            }
            let index = this.bookings.indexOf(client[0]);
            this.bookings.splice(index);
        }else{
            output = `The booking ${currentBookingNumber} is invalid.`;
        }

        return output;
    }

    report(){
        let output = '';

        output = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
        if(this.bookings.length > 0){
            let count = this.bookings.length;
            for(let x in this.bookings){
                output += `bookingNumber - ${this.bookings[x].roomNumber}\n`;
                output += `clientName - ${this.bookings[x].clientName}\n`;
                output += `roomType - ${this.bookings[x].roomType}\n`;
                output += `nights - ${this.bookings[x].nights}\n`;
                //console.log(this.bookings[x].roomNumber);
                let room = this.bookings[x].roomNumber;
                if(this.services.filter(x => x.bookingNumber === room).length > 0) {
                    output += `services: ${this.services.filter(x => x.bookingNumber === room).map(x => x.serviceType).join(', ')}\n`;
                }
                count--;
                if(count !== 0) {
                    output += '----------\n';
                }
            }
        }else{
            output += `There are currently no bookings.`;
        }

        return output.trim();
    }
}

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

console.log(hotel.roomService(3, 'housekeeping'));
console.log(hotel.roomService(3, 'drink'));
console.log(hotel.roomService(2, 'room'));

console.log(hotel.report());