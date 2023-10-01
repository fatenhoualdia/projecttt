let countValue = 0;

function increment() {
  countValue++;
  document.getElementById('count').innerText = countValue;
}

function decrement() {
  if (countValue > 0) {
    countValue--;
    document.getElementById('count').innerText = countValue;
  }
}
