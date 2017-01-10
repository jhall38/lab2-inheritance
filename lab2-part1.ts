class CheckingsAccount {
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

//test
var account : CheckingsAccount = new CheckingsAccount(400, "Jack");
account.checkBalance();
account.withdraw(100);
account.deposit(25);
account.checkBalance();

