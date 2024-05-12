{
    // Promise

    type Todo ={
        id: number;
        userId: string;
        title: string;
        completed: boolean
    }
    const getTodo = async() : Promise<Todo> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        return data
        // console.log(data)
    }
    getTodo()

    const cratePromise = (): Promise<boolean> =>{
        return new Promise<boolean>((resolve, reject)=>{
            const data : boolean = true
            if(data){
                resolve(data)
            }else{
                reject('Failed to load')
            }
        })
    }
    //calling create promise func
    const  showData = async (): Promise<boolean> =>{
        const data: boolean = await cratePromise()
        return data
        // console.log(data)
    }

    showData()

}