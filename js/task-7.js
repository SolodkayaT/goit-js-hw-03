const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const { DEPOSIT, WITHDRAW } = Transaction;

const account = {
  balance: 0,
  transactions: [],

  addTransaction(transaction) {
    return this.transactions.push(transaction);
  },

  deposit(amount) {
    this.balance += amount;
    const depositTransaction = {
      id: Math.floor(Math.random() * 10),
      type: DEPOSIT,
      amount,
    };
    return this.addTransaction(depositTransaction);
  },

  withdraw(amount) {
    if (account.balance < amount) {
      return console.log(
        `Вы попытались снять сумму =  ${amount}! Недостаточно средств!`,
      );
    }
    this.balance -= amount;
    const withdrawTransaction = {
      id: Math.floor(Math.random() * 10),
      type: WITHDRAW,
      amount,
    };
    return this.addTransaction(withdrawTransaction);
  },

  getBalance() {
    return console.log(`Ваш баланс: ${this.balance}`);
  },
  getTransactionDetails(id) {
    console.log(this.transactions);
    let message = `Транзакция с указанным ID = ${id} не найдена!`;
    for (obj of this.transactions) {
      const keys = Object.keys(obj);
      for (const key of keys) {
        if (obj[key] === id) {
          message = `Ваша транзакция найдена с ID = ${id}: Тип = ${obj.type} , Сумма = ${obj.amount} .`;
        }
      }
    }
    return console.log(message);
  },
  getTransactionTotal(type) {
    for (obj of this.transactions) {
      const keys = Object.keys(obj);
      for (const key of keys) {
        if (obj[key] === type) {
          console.log(
            (message = `Ваша транзакция найдена с типом = ${type}: ID = ${obj.id} , Сумма = ${obj.amount} .`),
          );
        }
      }
    }
  },
};
console.log(account);

account.deposit(200);
account.withdraw(300);
account.deposit(2000);
account.deposit(2000);
account.withdraw(200);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);

account.getBalance();
account.getTransactionDetails(6);
account.getTransactionDetails(16);
account.getTransactionTotal('deposit');
