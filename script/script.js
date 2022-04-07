const doneElem = document.querySelector('#done');
let done = localStorage.getItem('valueDone') || 0;
doneElem.innerText = done;

const canceledElem = document.querySelector('#canceled');
let canceled = localStorage.getItem('valueCancel') || 0;
canceledElem.innerText = canceled;

const formElem = document.querySelector('form');
const nameElem = document.querySelector('#name');
const notesElem = document.querySelector('#notes');
const btnElem = document.querySelector('button');
const listElem = document.querySelector('#list');

formElem.addEventListener('submit', event => {
	event.preventDefault();
	if(nameElem.value && notesElem.value != '') {
		const cardElem = document.createElement('div');
		const card = document.createElement('div');
		const nameCard = document.createElement('p');
		const notesCard = document.createElement('p');
		const enterBtn = document.createElement('div');
		const closeBtn = document.createElement('div');
		listElem.append(cardElem);
		cardElem.append(card, enterBtn, closeBtn);
		card.append(nameCard, notesCard);

		cardElem.classList.add('card');
		card.classList.add('add_card');
		enterBtn.classList.add('enterBtn');
		closeBtn.classList.add('closeBtn');

		nameCard.innerText = nameElem.value;
		notesCard.innerText = notesElem.value;
		enterBtn.innerText = '✓';
		closeBtn.innerText = '×';
		nameElem.value = '';
		notesElem.value = '';

		enterBtn.addEventListener('click', event =>{
			doneElem.innerText = ++done;
			localStorage.setItem('valueDone', done)
			cardElem.remove();
		});
		closeBtn.addEventListener('click', event =>{
			canceledElem.innerText = ++canceled;
			localStorage.setItem('valueCancel', canceled);
			cardElem.remove();
		});
	}
})