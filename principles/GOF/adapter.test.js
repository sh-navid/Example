//adapts interface of an existing class to another interface. For example eletrical adapter.

// old interface
function Ticket() {
    this.calculate = function (price) {
        return "$" + price;
    }
}

// new interface
function NewTicket() {
    this.newCalculator = function (price, unit) {
        return "$" + (price * unit);
    };
}

// adapter interface
function TicketAdapter(unit) {
    this.calculate = function (price) {
        return (new NewTicket()).newCalculator(price, unit);
    }
}

//------------------------------------------------------------------

test('GOF - Adapter Design Pattern', () => {
    // original ticket pricing and interface
    var price = new Ticket();
    expect(price.calculate(200)).toEqual("$200");

    // new ticket pricing with adapted interface
    price = new TicketAdapter(2/*unit*/);
    expect(price.calculate(200)).toEqual("$400");
});