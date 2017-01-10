class Account {
  private balance : number;
  private ownerName : string;

  constructor(initialBalance, ownerName) {
    this.balance = initialBalance;
    this.ownerName = ownerName;
  }

  deposit(amount : number) : void {
    this.balance += amount;
  }

  withdraw(amount : number) : void {
    this.balance -= amount;
  }

  checkBalance() : void {
    console.log(`${this.ownerName} has \$${this.balance} in their account`);
  } 
}

class CheckingsAccount extends Account {
  constructor(initialBalance, ownerName) {
    super(initialBalance, ownerName);
  }
}

class SavingsAccount extends Account {
  private allowedWithdraws : number;
  
  constructor(initialBalance, ownerName) {
    super(initialBalance, ownerName);
    this.allowedWithdraws = 3;
  }

  withdraw(amount : number) : void {
    if (this.allowedWithdraws <= 0) {
      console.log("You cannot make anymore withdraws at this time.");
      return;
    }
    this.allowedWithdraws--;
    super.withdraw(amount);
  }
}

//test
var account1 : Account = new SavingsAccount(400, "Jack");
var account2 : Account = new CheckingsAccount(400, "Jill");
account1.checkBalance();
account1.withdraw(100);
account1.deposit(25);
account1.checkBalance();
account1.withdraw(10);
account1.withdraw(10);
account1.withdraw(1000);
account2.checkBalance();
account2.checkBalance();
account2.withdraw(100);
account2.deposit(25);
account2.checkBalance();
account2.withdraw(10);
account2.withdraw(10);
account2.withdraw(10);
account2.withdraw(10);
account2.checkBalance();

