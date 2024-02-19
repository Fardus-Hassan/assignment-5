const seats = document.querySelectorAll('.seats');
let count=[];
 
 for (const seat of seats) {
    seat.addEventListener('click', function() {
        if (count.length >= 4){
            alert('You cannot buy more than 4 seats');
            return;
        }
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';
        seat.childNodes[0].classList.remove('opacity-50');
        const span = seat.childNodes[0].innerText;
        count.push(span);
        console.log(count);
    });
 }
