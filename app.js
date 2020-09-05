class Data{
  constructor(height,weight){
    this.height = height;
    this.weight = weight;
    
  }
}

class UI{

   calculData(data){
    if (data.height !== '' && data.weight !== '') {
      let resultValue = document.querySelector('.result-value');
      let resultStatus = document.querySelector('.result-status');
      const hV = data.height
      
      const wV =data.weight;
      //Calculatew BMI;
      let x = ((wV /(hV * hV))).toFixed(2);
      if (isFinite(x)) {
        console.log();
        //Obese
       if (x >= 50 || x<= 1) {
        resultValue.innerText =`sorry`;
        resultStatus.innerText = 'Out of range!!!'
       }
        else if (x >= 30) {
          resultValue.innerText =` ${x}kg/m2`;
          resultStatus.innerText = 'You are Obese'
        }
        //Overweight
        else if (x >= 25 && x <= 29.9) {
          resultValue.innerText =` ${x}kg/m2`;
          resultStatus.innerText = 'You are Overweight';
        }
        //Normal weight
         else if (x >= 18.5 && x <= 24.9) {
          resultValue.innerText =` ${x}kg/m2`;
          resultStatus.innerText = 'You are Normal weight'
        } 
        //You are Underweight
        else{
          resultValue.innerText =` ${x}kg/m2`;
          resultStatus.innerText = 'You are Underweight'
        }
      }
    }
   }
   
   //clearInput;
   clearInput(dat){
document.querySelector('#height').value = ''
 document.querySelector('#weight').value = ''
   }
}

const lightMode = document.querySelector('.lM')
lightMode.addEventListener('click',(e) =>{
  if (e.target.textContent === 'Dark Mode') {
    e.target.classList.add('dark');
    e.target.textContent = 'Light Mode';
    document.querySelector('header').classList.add('dark')
    document.querySelector('.main-body').classList.add('dark')
  }else{
    e.target.classList.remove('dark');
    e.target.textContent = 'Dark Mode';
    document.querySelector('header').classList.remove('dark')
    document.querySelector('.main-body').classList.remove('dark')
  }
})

const form = document.querySelector('.myFrom');
form.addEventListener('submit',(e) =>{
  e.preventDefault()
  const data = new Data()
    data.height = document.querySelector('#height').value
    data.weight = document.querySelector('#weight').value

    const ui = new UI();
    ui.calculData(data)
    //clear all;
    ui.clearInput()
})