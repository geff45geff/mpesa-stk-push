function sendSTK() {
  const phone = document.getElementById('phone').value;
  const amount = document.getElementById('amount').value;

  fetch('/stk-push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, amount })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('message').textContent = data.success
      ? 'STK Push sent successfully!'
      : 'Failed to send STK Push';
  })
  .catch(() => {
    document.getElementById('message').textContent = 'Error sending request.';
  });
}
