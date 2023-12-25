/* eslint-disable max-lines-per-function */
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

function paymentTotal(payments) {
  return payments.reduce((sum, payment) => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));