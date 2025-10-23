import './style.css'

// Exemplo de funcionalidade JavaScript
let count = 0
const button = document.getElementById('counter')

button.addEventListener('click', () => {
  count++
  button.textContent = `Clique aqui: ${count}`
})

console.log('🚀 Aplicação carregada com sucesso!')
