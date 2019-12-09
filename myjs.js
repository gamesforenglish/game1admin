let nQuestion = 0;

$('button#add-question-3').click( () => {
  let formSnippet = "";
  formSnippet += "<br>";
  for(let i=0; i<3; i++){
    formSnippet += "<input class='question" + nQuestion +  "' id='field" + i + "'>"
  }
  nQuestion++;
  $('body').append(formSnippet);
});

$('button#add-question-4').click( () => {
  let formSnippet = "";
  formSnippet += "<br>";
  for(let i=0; i<4; i++){
    formSnippet += "<input class='question" + nQuestion +  "' id='field" + i + "'>"
  }
  nQuestion++;
  $('body').append(formSnippet);
});

$('button#add-question-5').click( () => {
  let formSnippet = "";
  formSnippet += "<br>";
  for(let i=0; i<5; i++){
    formSnippet += "<input class='question" + nQuestion +  "' id='field" + i + "'>"
  }
  nQuestion++;
  $('body').append(formSnippet);
});

$('button#add-all').click( () => {
  let data = [];

  for(let i=0; i<nQuestion; i++){
    let condition = "input" + ".question" + i;
    let a = $(condition);
    let tmpData = [];
    for(let j=0; j<a.length; j++){
      tmpData.push(a[j].value);
    }
    data.push(tmpData);
  }

  $.post('https://api-for-game.herokuapp.com/', {data}, (err, res) => {
    if(err) {console.log(err)}
    else{console.log(res)}
  });
});
