const accountId = 144553
let accountEmail = "greeneplanet@outlook.in"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "rohit@test.com"
accountPassword = "2121221"
accountCity = "Pune"

console.log(accountId);


/*
Prefer not to use var
because of issues with the block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
