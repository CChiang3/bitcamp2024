const editButton = document.getElementById('editButton');
const billForm = document.getElementById('billForm');

editButton.addEventListener('click', () => {
  billForm.style.display = 'block';
});

billForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const billName = document.getElementById('billName').value;
  const billAmount = document.getElementById('billAmount').value;

  // Create a new bill element
  const newBill = document.createElement('p');
  newBill.textContent = `${billName}: $${billAmount}`;
  document.querySelector('.rectangle').appendChild(newBill);

  // Reset the form and hide it
  billForm.reset();
  billForm.style.display = 'none';
});
