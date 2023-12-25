/* eslint-disable max-lines-per-function */
function createInvoice(services = {}) {
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,
    payments: [],

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentTotal() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
}

function createPayment(services = {}) {
  let phonePayment = services.phone;
  if (phonePayment === undefined) {
    phonePayment = 0;
  }

  let internetPayment = services.internet;
  if (internetPayment === undefined) {
    internetPayment = 0;
  }

  return {
    phone: phonePayment,
    internet: internetPayment,

    total: function() {
      if (services.amount) {
        return services.amount;
      } else {
        return this.phone + this.internet;
      }
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());