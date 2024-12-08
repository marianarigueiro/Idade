document.getElementById('calculateButton').addEventListener('click', () => {
  const birthYear = parseInt(document.getElementById('birthYear').value);
  const currentYear = new Date().getFullYear();

  if (!birthYear || birthYear > currentYear || birthYear < 1900) {
    document.getElementById('result').textContent = 'Por favor, insira um ano válido.';
  } else {
    const age = currentYear - birthYear;
    document.getElementById('result').textContent = `Sua idade é ${age} anos.`;
  }
});
