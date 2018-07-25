 
   class Scooby_doo{


   	constructor(){};
  
  /**This method returns an array of  words spacial caracters antared into it 
   * @param {string} sentenceOrWord is the word or sentence
  */
      static getAllWords(sentenceOrWord){
         return sentenceOrWord.split(/[\s]/);
      }

     /**The method selects gets three words before and after the index goven
     * @param {number} index is the word or sentence
     * @param {string} sentenceOrWord is the word or sentence
     */
      static getCharBeforeAndAfterIndex(index,sentenceOrWord){
    return   sentenceOrWord.substr(index-4,index+2) ;

};



  /**The method checks for a number in each word and returns the number and the word in which the number occured
   * @param {string} userInput is the word or sentence
  */


     static isNumPresent(userInput){
  
       const numRegex = /[0-9]/gim;

       let numArray=[];

        let numsChecked;

       let wordArr=[];

       let outputlog =[];
       let wordIndex=0;

       let allWords=Scooby_doo.getAllWords(userInput)
       let i=0 ; 
 //ititates through all the  word or chracters in the array
while (i< allWords.length){
     let z =i;
     ((numsChecked= numRegex.exec(allWords)) !== null);

       let currentIndex= numRegex.lastIndex;

       if(numsChecked!==null){

               numArray.push(numsChecked[0]);       
      
          wordArr.push(Scooby_doo.getCharBeforeAndAfterIndex(currentIndex,userInput));

          console.log(z);

        }
 
        /* incriment the number of words if the numbers checked is not null and all words 
        *is not empty and all words have not been checked 
        */
        else if (numsChecked !==null && i< allWords.length){
         i++;
        }

        else break;
      }
      
      /* if the numbers array is not empty return the numbers and the words in which it was found
        * else return the users input
        */
     if (numArray.length > 0){  
      outputlog.push(true);
      outputlog.push(`Replace the number(s):\n\n\t${numArray}\n\n in the hint(s):\n\n\t${wordArr}\n\nand lets enjoy Scooby doo !`);

      return  outputlog;

       }

   else {   
           outputlog.push(false);
           return outputlog ;
         }          

   } 

    
/** The method checks if the user input is empty
 * @param {string} userInput is the word or sentence
*/
    static isEmpty(userInput){

     let outputlog=[];

    if (userInput===""){

       outputlog.push(true);

       outputlog.push("\toops!\n\nYou have entered nothing!");

       return outputlog;
           
          }


 
    
  };

 
/** The functon replaces the consonant in the consonant vowel cluster with the @param replacement given the inputs
 * @param {number} index is the word 
 *  @param {string}replacement
 *  @param {string} word
 */  
   	 static replaceAt (index, replacement,word){
    return  replacement+ word.substr(index + replacement.length);
};



/**search for a consonant followed by a vowel and replace the consonant with a "r"
 * @param {string} allWords is the word or phrase
*/

     static getScoobyDoo(allWords){

     let consonantVowelIndex;

     //Splits the word/sentence accodinly and return an array
      let splitSentence= Scooby_doo.getAllWords(allWords);

     let scoobyArr=[];

     //Regex to get a consonant vowel pair ignoring the whethet its lower or upper case 
     const consonantVowelRegex = /[b-df-hj-np-tv-z](?=[aeiou])/gim;


     //Itirates through the array of words for consonant vowel cluster 
       
     for (let i=0 ; i< splitSentence.length; i++){

     // returns the index of the consonant vowel cluster and -1 if it finds no cluster

     consonantVowelIndex = splitSentence[i].search(consonantVowelRegex) 
     
        /*
         *  Checks if the consonant vowel cluster is not -1,if true replace the consonant with with r
         *  else put the outcome in an array
         */
        if (consonantVowelIndex !=(-1)){ 

      let scoobyWord= Scooby_doo.replaceAt(consonantVowelIndex,"r",splitSentence[i]);
         scoobyArr.push(scoobyWord);
        }

         else scoobyArr.push(splitSentence[i]);         
     }; 

       //returns the outcome
      return(scoobyArr.join(" "));
     
      };

   };


let scooby_btn = document.getElementById("scooby_btn");


let scooby_display = document.getElementById("scooby_output");


let scooby_div_display = document.getElementById("output_display");



 scooby_btn.addEventListener("click", ()=>{
 
 //Get the word or sentence 
  let usersInput=document.getElementById("scooby_input").value;

  let scoobyReply="";

  let outcome =Scooby_doo.isEmpty(usersInput);

//if user input is empty return the reply to scoobyReply
  if  (outcome) {
    scoobyReply=outcome[1];
     console.log(scoobyReply ,outcome);
  }

 //else check if there is a number in the input and if no numbers scooby the word 

  else{
  outcome = Scooby_doo.isNumPresent(usersInput);

  if  (outcome[0]){
               
     scoobyReply = outcome[1];
     console.log(scoobyReply);
  }
  

  else {
      scooby_display.style.color="#7647A2"
      scoobyReply = Scooby_doo.getScoobyDoo(usersInput)
 }

};

//if true its an error hence colour the text red
 if(outcome[0]){
  console.log(outcome[0],scoobyReply);
scooby_display.style.color="red";

}

//make the output textarea visible to display scooby reply
scooby_div_display.style.display ="";
scooby_display.innerHTML=scoobyReply;

 
}


 );


