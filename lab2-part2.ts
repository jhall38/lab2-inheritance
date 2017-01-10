class SavingsAccount {
  private balance : number;
  private ownerName : string;
  allowedWithdraws : number;

  constructor(initialBalance, ownerName) {
    this.balance = initialBalance;
    this.ownerName = ownerName;
    this.allowedWithdraws = 3;
  }

  deposit(amount : number) : void {
    this.balance += amount;
  }

  withdraw(amount : number) : void {
    if (this.allowedWithdraws <= 0) {
      console.log("You cannot make anymore withdraws at this time.");
      return;
    }
    this.balance -= amount;
    this.allowedWithdraws--;
  }

  checkBalance() : void {
    console.log(`${this.ownerName} has \$${this.balance} in their account`);
  }
  
}

//test
var account : SavingsAccount = new SavingsAccount(400, "Jack");
account.checkBalance();
account.withdraw(100);
account.deposit(25);
account.checkBalance();
account.withdraw(10);
account.withdraw(10);
account.withdraw(1000);
account.checkBalance();
