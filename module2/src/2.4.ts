{
    // interface --> generic
    interface Developer<T> {
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T
    }

    const poorDeveloper : Developer<{
        brand: string;
        model: string;
        display: string
    }> ={
        name: 'habib',
        computer:{
            brand: 'Acer',
            model: 'ABCD',
            releaseYear: 2023
        },
        smartWatch: {
            brand: 'emiL',
            model: "H23",
            display: 'OLE'
        }
    }
}