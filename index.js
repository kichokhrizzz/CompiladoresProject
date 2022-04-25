var fs = require('fs');

try {
    var data = fs.readFileSync('code.txt', 'utf-8');

    console.log(data)
    

    const regexIf = /if/g;
    const regexSwitch  = /switch/g;
    const regexWhile = /while/g;

    
    let foundIf = data.match(regexIf);
    let foundSwitch = data.match(regexSwitch);
    let foundWhile = data.match(regexWhile);


    if(foundIf != null)
    {
        console.log(`Hay un total de ${foundIf.length} if en el código`);
    }
    else{
        console.log('No se encontraron if en el código');
    }

    if(foundSwitch != null)
    {
        console.log(`Hay un total de ${foundSwitch.length} switch en el código`);
    }
    else{
        console.log('No se encontraron switch en el código');
    }
    
    if(foundWhile != null)
    {
        console.log(`Hay un total de ${foundWhile.length} while en el código`);
    }
    else{
        console.log('No se encontraron while en el código');
    }

} catch (error) {
    console.log('Error:', error.stack);
}