
function base37Decrypt(base37Number) {

        let positionArray = [], decryptedArray = [], 
        moduloRemainder = 0, hashKey = 'acdegilmnoprstuw', increment = 11;

        while (increment > 0) {        
                increment--;
                moduloRemainder = ( base37Number % 37 );
                positionArray[increment] = moduloRemainder;
                base37Number = (base37Number - moduloRemainder)/37;
                decryptedArray[increment+1] = hashKey.charAt(positionArray[increment]);		
            }

  return decryptedArray.join("");
    
}

console.log(base37Decrypt(680131659347))
console.log(base37Decrypt(1317985395604951854))
