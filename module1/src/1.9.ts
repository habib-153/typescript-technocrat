{
    // Type Alias

    type Student = {
        name: string;
        age: number,
        gender:string,
        contact ?: string,
        address: string
    }


    const std1: Student = {
        name: 'Habib',
        age: 18,
        gender: 'male',
        contact: '0155555555',
        address: 'mmmmmmmmm'
    }
    const std2: Student ={
        name: 'Mir',
        age: 40,
        gender: 'Male',
        address:'ssssssssssss'
    }

    type Add =(x: number, y: number) => number

    const add: Add =(num1, num2)=> num1+num2
}