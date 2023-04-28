 
  const form = document.forms.quiz;
  const question1 = form.question1;
  const question2 = form.answer;
  const question3 = form.answer1;
  const question3A = form.answer2;
  const question3B = form.answer3;
  const question3C = form.answer4;
   let correct = 0;

const question = {
  correctanswer: 'Manila',

}




form.addEventListener('submit', function(e){
e.preventDefault();
if(question1.value.toLowerCase() !== question.correctanswer.toLowerCase()){

  document.getElementById('result-question1').style.display = 'block';
  document.getElementById('result-question1').innerText = 'Your answer is incorrect, The Correct answer is Manila';
  document.getElementById('result-question1').style.color = 'red';

} else {
  document.getElementById('result-question1').style.display = 'block';
  document.getElementById('result-question1').innerText = 'Your Answer is correct';
  document.getElementById('result-question1').style.color = 'green'; 

}

if(question2.value === 'x=13'){
     document.getElementById('result-question2').style.display = 'block';
     document.getElementById('result-question2').innerText = 'Your Answer is correct';
     document.getElementById('result-question2').style.color = 'green'; 
}else {
     document.getElementById('result-question2').style.display = 'block';
     document.getElementById('result-question2').innerText = 'Your Answer is incorrect, the correct answer is x = 13';
     document.getElementById('result-question2').style.color = 'red'; 
}
let checkbox = document.getElementsByName('answer1');
for(let i = 0; i < checkbox.length; i++){ 
  checkbox[i].checked
  if(checkbox[0].checked == true  && checkbox[1].checked == true && checkbox[2].checked == true){

    document.getElementById('result-question3').style.display = 'block';
    document.getElementById('result-question3').innerText = 'Your Answers are correct';
    document.getElementById('result-question3').style.color = 'green'; 
console.log(checkbox);
      
}else {
     document.getElementById('result-question3').style.display = 'block';
     document.getElementById('result-question3').innerText = 'Your Answers are incorrect, the correct answers are Parrot, Eagle and Crow';
     document.getElementById('result-question3').style.color = 'red'; 
}
}
});

