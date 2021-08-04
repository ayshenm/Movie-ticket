const container = document.querySelector('.container');
const count = document.querySelector('#count');
const amount = document.querySelector('#amount');
const select = document.querySelector('#movie');


container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');

        let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
        count.innerText = selectedSeatCount;
        

    } 

});