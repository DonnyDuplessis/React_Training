{
    // console.log("Hello Tampa!!!!!")

    // const balance:number = 100
    // const account = "ABC123"
    // console.log(typeof balance);

    // let mutableBalance:number = 254000

    // let deposit: number = Number(prompt("What is your deposit amount???"))

    // mutableBalance += deposit
    // console.log("Your new balance is:", mutableBalance)


    // let my_number:number = 200
    // let my_string:string = "hello"
    // let myBoolean:boolean = true

    // console.log(typeof my_number)
    // console.log(typeof my_string)
    // console.log(typeof myBoolean)

    // let greeting:string = "hello"
    // let name:string = String(prompt("Hi there, please enter your name."))

    // console.log(`${greeting} ${name}. This is a test message.`)

    // let transation = {
    //     description: "Deposit",
    //     amount: 20000,
    //     date: new Date()
    // }

    // type TransactionType = {
    //     description?: string,
    //     amount: number,
    //     date: Date
    // }

    // const transaction1: TransactionType = {
    //     description: 'Deposit',
    //     amount: 2000,
    //     date: new Date()
    // }

    // const transaction2: TransactionType = {
    //     description: 'Deposit',
    //     amount: 2000,
    //     date: new Date()
    // }

    // const constdemoArray = [1, 'hello', 3, console.log]

    // const numberArray: (number|string)[] = ['hello', 123]

    type user {
        name: String,
        age: Number,
        logged_in: Boolean
    }

    let first_user: user = {
        name: "Donavan Duplessis",
        age: 28,
        logged_in: true
    }

    let second_user: user = {
        name: "Ron Smith",
        age: 24,
        logged_in: false
    }

    console.log("This is the age of first user: ", first_user.age)
    console.log("This is the age of second user: ", second_user.age)

    let my_array:user[] = [first_user, second_user]
    console.log("This is the array of user objects: ", my_array)

    console.log("This is the first entry of user array: ", my_array[0])
    console.log("This is the name of the second entry of the user array ", my_array[1].name)

}
