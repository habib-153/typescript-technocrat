{
    // spread operator
    // rest operator
    // destructuring

    //learn spread operator
    const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
    const bros2: string[] = ['Tanmoy', 'Nahid', 'amin']
    bros1.push(...bros2)
    
    const allBros = [...bros1, bros2]

    //learn rest operator
    const greetFriends = (...friends: string[]) =>{
        // console.log(`Hi ${friend1} , ${f2}, ${f3}`)
        friends.forEach((friend : string) => console.log(`Hi ${friend}`))
    }

    greetFriends('Abul', 'Kabul', 'ubul', 'babul', 'labul')
}