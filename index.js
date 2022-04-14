var fs = require('fs');

var ifSentences = 0;
var elseSentences = 0;
var switchSentences = 0;
var whileSentences = 0;

try {
    var data = fs.readFileSync('code.txt', 'utf-8');
    
    var texto = data.toString().split('\n');

    const regexIf = /if/g;
    const regexSwitch  = /switch/g;
    const regexWhile = /while/g;

    
    console.log(texto);

    for (let index = 0; index < texto.length; index++) {
        
        if(regexIf.test(texto) )
        {
            ifSentences = ifSentences + 1 ;
        }
        else if(regexSwitch.test(texto))
        {
            switchSentences = switchSentences + 1;
        }
        else if(regexWhile.test(texto))
        {
            whileSentences = whileSentences + 1;
        }

    }

   console.log(`Las veces que se encontro el condicional "if" fue de  ${ifSentences}`);
   console.log(`Las veces que se encontro el condicional "switch" fue de  ${switchSentences}`);
   console.log(`Las veces que se encontro el condicional "while" fue de  ${whileSentences}`);

 
} catch (error) {
    console.log('Error:', error.stack);
}