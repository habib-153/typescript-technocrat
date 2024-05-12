// Learning Function
// Normal Func
// Array Func

function add(num1: number, num2: number=10): number{
    return num1+num2;
}

const addArrow = (num1: number, num2: number): number => num1+ num2


//  Object --> func --> method
const poorUser = {
    name: 'Habib',
    balance : 0,
    addBalance(balance: number): string{
        return `My New balance is: ${this.balance + balance}`
    }
}

const arr : number[] = [1,2,3,4]

const newArr : number[] = arr.map((elem : number): number => elem*elem)