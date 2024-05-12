{
    // ternary operator || optional chaining || nullish coalescing operator
    const age =18
    const isAdult = age >= 18 ? "Adult" : 'not adult'
    // console.log(isAdult)

    // nullish
    const isAuthenticated = null
    const result1 = isAuthenticated ?? 'Guest'  // only for null and undefined
    const result2 = isAuthenticated ? isAuthenticated : 'guest'

    console.log({result1}, {result2})

    type User = {
        name: string;
        address: {
          city: string;
          road: string;
          presentaddress: string;
          permanentAddress?: string;
        };
      };
    
      const user: User = {
        name: "Persian",
        address: {
          city: "ctg",
          road: "Awesome Road",
          presentaddress: "ctg town",
        },
      };
    
      const permanentAddress =
        user?.address?.permanentAddress ?? "No Permanent Address";
      console.log({ permanentAddress });
      //
}