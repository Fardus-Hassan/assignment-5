const seats = document.querySelectorAll('.seats');
let count = [];
const ticketPrice = 550;

for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (count.length >= 4) {
            alert('You cannot buy more than 4 seats');
            return;
        }
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';
        seat.childNodes[0].classList.remove('opacity-50');

        const seatName = seat.childNodes[0].innerText;
        count.push(seatName);

        document.getElementById('seat-count').innerText = count.length;

        const span = document.createElement('span');
        span.innerText = seatName;
        const span2 = document.createElement('span');
        span2.innerText = ticketPrice;
        const span3 = document.createElement('span');
        span3.innerText = 'Economy';
        const li = document.createElement('li');
        li.appendChild(span);
        li.appendChild(span3);
        li.appendChild(span2);
        document.getElementById('seats-details').appendChild(li);

        document.getElementById('seats-details').classList.add('list-border');

        document.getElementById('total-price').innerText = ticketPrice * count.length;

        document.getElementById('grand-total').innerText = ticketPrice * count.length;

    });
}

