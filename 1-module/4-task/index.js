function checkSpam(str) {
	
  const spamWords = ['1xBet', 'XXX'];
  
  return spamWords.some(function(word) { 
    return str.toLowerCase().includes(word.toLowerCase());
  });
  
}
