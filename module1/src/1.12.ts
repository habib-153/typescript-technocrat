{
    // nullable types / unknown types
  
    const searchName = (value: string | null) => {
      if (value) {
        console.log("Searching");
      } else {
        console.log("There is nothing to search");
      }
    };
    searchName(null);
  
    // unknown  typeof
    const getSpeedInMeterPerSecond = (value : unknown) =>{
        if(typeof value == "number"){
            const convertedSpeed = (value * 1000) / 3600
            console.log(`The speed is ${convertedSpeed} m/s`)
        }
        if (typeof value == 'string'){
            const [speed , unit] = value.split(" ")
            const convertedSpeed = (parseInt(speed) * 1000) / 3600
            console.log(`The speed is ${convertedSpeed} m/s`)
        }
        else {
            console.log('Wrong Input')
        }
    }
    getSpeedInMeterPerSecond(1000)
    getSpeedInMeterPerSecond(`1000 km/h`)
}