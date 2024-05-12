{
    //  abstraction : 1. interface 2.abstract

    interface Vehicle{
        name: string
        model: string
        startEngine():void
        stopEngine(): void
        move():void
    }

    class Car implements Vehicle{
        name: string
        model: string
        constructor( name: string, model: string){
            this.name =  name
            this.model = model
        }
        startEngine(): void {
            console.log("I am starting the car Engine")
        }
        stopEngine(): void {
            console.log('I am stopping the car Engine')
        }
        move(): void {
            console.log("move the car")
        }
    }

    // abstract class --> abstract theke instance toiri hoy na 
    abstract class Car2{
        abstract startEngine(): void 
        abstract stopEngine(): void 
        move(): void {
            console.log("move the car")
        }
    }
    // const car = new Car2()

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log("I am starting the car Engine")
        }
        stopEngine(): void {
            console.log('I am stopping the car Engine')
        }
        
    }
}