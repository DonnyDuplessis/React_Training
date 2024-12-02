var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var transaction1 = {
        description: 'Deposit',
        amount: 2000,
        date: new Date()
    };
    var first_user = {
        name: "Donavan Duplessis",
        age: 28,
        logged_in: true
    };
    var second_user = {
        name: "Ron Smith",
        age: 24,
        logged_in: false
    };
    console.log("This is the age of first user: ", first_user.age);
    console.log("This is the age of second user: ", second_user.age);
    var my_array = [first_user, second_user];
    console.log("This is the array of user objects: ", my_array);
    console.log("This is the first entry of user array: ", my_array[0]);
    console.log("This is the name of the second entry of the user array ", my_array[1].name);
    var user3 = __assign(__assign({}, first_user), { age: 24 });
    var name_1 = user3.name, age = user3.age, logged_in = user3.logged_in;
    var user4 = __assign(__assign({}, transaction1), { amount: 15 });
    var description = user4.description, amount = user4.amount, date = user4.date;
    console.log(description, amount, date);
}
