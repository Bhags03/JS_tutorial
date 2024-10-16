const accountId = 1234
let accountName = "Bhagavathi"
var accountEmail = "kbh@g.com"
accountCity = "Banglore"
let accountState;
//accountId = 12345  //not possible to change a const value
console.log(accountId)

console.table([accountId,accountEmail,accountName,accountCity,accountState])
/*
prefer not to use var
because of issue in block and functional scope
*/
