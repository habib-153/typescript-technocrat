{
    // class and object

    class Animal  {
        // parameter properties---> initialize er kaj kore dibe
        // constructor
        constructor(public name: string, public species:string, private sound: string){
            
        }
        // method
        // array function e this kaj kore na
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const cat = new Animal('Bilai', 'cat', 'mew mew')
}