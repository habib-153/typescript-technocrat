{
    // interface
    type User1 ={
        name: string
        age: number
    }

    type rollNumber = number
    
    interface User2{
        name: string;
        age: number
    }
    /** --> for primitive data -- type alias
     *  --> for object -- interface
     * 
     */
    const user1 : User2 ={
        name: 'Habib',
        age: 20
    }
    interface UserWithRole2 extends User2 {
        role: string
    }

    const user2 : UserWithRole2 ={
        name: 'Habib',
        age: 20,
        role:'Student'
    }

    // js --> object , array --> object func --> object
    type Roll1 = number[]

    interface Roll2 {
        [index: number] : number
    }
    const rollNumber1 : Roll1 = [1,2,3]
    const rollNumber2 : Roll2 = [1,2,3]

    interface Add{
        (x: number, y: number) : number
    }
    const add : Add = (num1, num2) => num1+num2

    /**
     * Array , Func --> type recommended
     * object --> interface
     */
}
