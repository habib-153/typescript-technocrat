// destructuring

{
    const user ={
        id: 345,
        name:{
            first: 'Habibur',
            middle: 'Rahman',
            last: 'Sihab'
        },
        contact: '01575632219',
        address: 'Uganda'
    }

    const { contact, name: { middle: mdName }} = user

    // Array Destructuring
    const myFriends =[ 'Chandler', 'joey', 'ross', 'alex', 'rachel']

    const [ ,, bestFriend, ...rest] = myFriends
}