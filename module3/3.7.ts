{
    // static
    class Counter{
        count : number = 0
        increment (){
            return (this.count += 1)
        }
        decrement(){
            return (this.count -= 1)
        }
    }

    const instance1 = new Counter()
}