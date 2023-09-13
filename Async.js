console.log('person 1 show ticket');
console.log('person 2 show ticket');
console.log('person 3 show ${`tickets`}')

async function tickets() 
{
    try{
        const getColdDrinks = new Promise((resolve, reject)=> resolve('drinks'))
        const butter = new promise((resolve, reject) => resolve('bsutter'));
        let [drinks, bsutter] = await promise.all([getColdDrinks, butter])
    }
    catch(error)
    {
        console.log(error);
    }
}

tickets();
