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

    type TransactionType = {
        description?: string,
        amount: number,
        date: Date
    }

    const transaction1: TransactionType = {
        description: 'Deposit',
        amount: 2000,
        date: new Date()
    }

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


    const user3:user = {...first_user, age: 24}
    const {name, age, logged_in} = user3

    const user4:TransactionType = {...transaction1, amount: 15}
    const {description, amount, date} = user4

    console.log(description, amount, date)

    // const transactionArea: HTMLDivElement = document.getElementById("transactions") as HTMLDivElement

    // const el1 = `<li>${transaction1.date} ${transaction1.description} ${transaction1.amount}</li>`
    // const el2 = `<li>${transaction1.date} ${transaction1.description} ${transaction1.amount}</li>`

    // const ul = `${el1} ${el2}`

    // const element1 = `<li>${first_user.name}</li>`
    // const unorderedList = ``

    const transactionArea: HTMLDivElement = document.getElementById("users") as HTMLDivElement

    const element1 = `<li>${first_user.name}</li>`
    const element2 = `<p>User is not logged in</p>`

    const ul = `<ul>${element1}</ul>`
    
    if (first_user.logged_in === true) {
        transactionArea.innerHTML = ul
    } else {
        transactionArea.innerHTML = element2
    }

    //
    function sayHello(): void {
        console.log("Hello")
    }

    sayHello()

    const sayHelloArrow = ():void => {
        console.log("HelloArrow")
    }

    sayHelloArrow()

    const balance:number= 0 

    const processTransaction = (transaction: TransactionType) : number => {
        const newBalance = balance + transaction.amount
        console.log(`Old balance was ${balance}. New balance is ${newBalance}`)
        return newBalance
    }

    const loginUser = (first_user) => {
        first_user.logged_in = true
        transactionArea.innerHTML = `<p>Welcome ${first_user.name}</p>`
    }
}
