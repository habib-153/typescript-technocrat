{
    // generic constrains with generic operator

    type Vehicle ={
        bike: string;
        car: string;
        ship: string
    }

    type Owner = 'bike' | 'car' | 'ship'  // manually

    type Owner2 = keyof Vehicle   // using keyof operator --both are same

    const person1 : Owner2 = "car"

    const getPropertyValue = <X, Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }

    const user ={
        name: 'Hello',
        age: 22,
        address: 'ctg'
    }

    const result1 = getPropertyValue(user, 'age')
    //const result2 = getPropertyValue(user, 'hudai')

}