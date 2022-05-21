function getWords(type) {
    // Return words of a given type, or all words if type is 'WORD'
    let words = [
      {type: 'ADJECTIVE', value: 'big'},
      {type: 'ADJECTIVE', value: 'purple'},
      {type: 'ADJECTIVE', value: 'new'},
      {type: 'ADJECTIVE', value: 'interesting'},
      {type: 'ADJECTIVE', value: 'curious'},
      {type: 'ADJECTIVE', value: 'happy'},
      {type: 'ADJECTIVE', value: 'busy'},
      {type: 'ADJECTIVE', value: 'tiny'},
      {type: 'NOUN', value: 'umbrella'},
      {type: 'NOUN', value: 'knee'},
      {type: 'NOUN', value: 'banana'},
      {type: 'NOUN', value: 'platypus'},
      {type: 'NOUN', value: 'cat'},
      {type: 'NOUN', value: 'mouse'},
      {type: 'NOUN', value: 'house'},
      {type: 'VERB', value: 'impressed'},
      {type: 'VERB', value: 'honoured'},
      {type: 'VERB', value: 'saw'},
      {type: 'VERB', value: 'ate'},
      {type: 'VERB', value: 'surprised'},
      {type: 'VERB', value: 'annoyed'},
      {type: 'VERB', value: 'touched'},
      {type: 'VERB', value: 'understood'},
      {type: 'VERB', value: 'taught'},
    ];
    return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
  }
  
  function randomInt(n) {
    // Return a random number from in [0, n[
    return Math.floor(Math.random()*n);
  }
  
  function randomMember(arr) {
    // Return a random member of the array
    return arr[randomInt(arr.length)]
  }
  
  
  
  document.getElementById('noun1').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('NOUN'));
  
  });
  
  document.getElementById('verb').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('VERB'));
  
  });
  
  document.getElementById('adjective').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('ADJECTIVE'));
  
  });
  
  document.getElementById('noun2').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('NOUN'));
  
  });
  
  document.getElementById('daymode').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    element_list.style.color = '#663333';
    element_list.style.backgroundColor = '#ffffff';
  
  });
  
  document.getElementById('nightmode').addEventListener('click', (event) => {
    let element_list2 = document.getElementById('list');
    element_list2.style.color = '#ffffff';
    element_list2.style.backgroundColor = '#333333';
  
  });
  
  document.getElementById('colour').addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#993300';
  
  });
  
  document.getElementById('image').addEventListener('click', (event) => {
    event.target.setAttribute("src", 'data:image/jpeg;base64,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');
  
  });