{
    // type assertion
    /** if developer ca declare a type which is better than typescript types that is type assertion */
    let anything : any

    anything = "Next Web"

    anything = 222;
    // (anything as number).

    type CustomError = {
        message: string
    }

    try{

    }
    catch(error){
        console.log((error as CustomError).message);
    }
}