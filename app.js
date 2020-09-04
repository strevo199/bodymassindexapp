class Data{
  constructor(height,weight){
    this.height = document.querySelector('height')
    this.weight = document.querySelector('weight')
  }
}

class UI{
 
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
