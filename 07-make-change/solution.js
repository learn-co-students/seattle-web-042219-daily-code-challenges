function makeChange(amount) {
    amount = amount * 100;
    const Coins = {Quarters: 25, Dimes: 10, Nickles: 5, Pennies: 1};
    let change = {};

    for (let coin in Coins) {
        change[coin] = ~~(amount/Coins[coin]);
        amount = amount % Coins[coin];
    }
    console.log(change);
    return change;
}

function makeChange2(amount) {
    amount = amount * 100;
    const Coins = [["Quarters", 25], ["Dimes", 10], ["Nickles", 5], ["Pennies", 1]];
    let change = {};

    for ( let i = 0; i < Coins.length; i++ ) {
        change[Coins[i][0]] = Math.floor(amount/Coins[i][1]);
        amount = amount % Coins[i][1];
    }
    console.log(change);
    return change;
}
