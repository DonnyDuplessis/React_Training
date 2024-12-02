{
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
}
