{
    //  function with generics

    const createArray =(params : string) : string[] =>{
        return [params]
    }

    const createArrayWithGeneric = <T>(params : T) : T[] =>{
        return [params]
    }

    const res1 = createArray('Bangladesh')
    const res2 = createArrayWithGeneric<boolean>(true)

    type User = {
        id: number; 
        name: string
    }
    const resGenericObj = createArrayWithGeneric<User>({id: 222, name:"Hello"})

    const createArrayWithTuple = <P, Q>(params1 : P, params2: Q) : [P, Q] =>{
        return [params1, params2]
    }

    const res3 = createArrayWithTuple<string, number>('Bangladesh', 222)
}