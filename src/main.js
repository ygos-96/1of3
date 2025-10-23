import './style.css'

// Funcionalidades da 1of3
document.addEventListener('DOMContentLoaded', () => {
  console.log('🏀 1of3 - Aplicação carregada com sucesso!')
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
  }
  
  // Smooth scrolling para links de navegação
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        
        // Fechar menu mobile se estiver aberto
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden')
        }
      }
    })
  })
  
  // Newsletter signup
  const newsletterForm = document.querySelector('input[type="email"]')
  const newsletterBtn = document.querySelector('button[class*="bg-orange-600"]')
  
  if (newsletterBtn && newsletterForm) {
    newsletterBtn.addEventListener('click', () => {
      const email = newsletterForm.value
      if (email && email.includes('@')) {
        alert('Obrigado por se inscrever! Você receberá nossas novidades em breve. 🏀')
        newsletterForm.value = ''
      } else {
        alert('Por favor, insira um e-mail válido.')
      }
    })
  }
  
  // Adicionar efeitos de hover aos cards de produtos
  const productCards = document.querySelectorAll('.bg-white.rounded-2xl')
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)'
    })
  })
  
  // Intersection Observer para animações ao scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)
  
  // Aplicar animação aos elementos
  const animatedElements = document.querySelectorAll('section')
  animatedElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(el)
  })
  
  // Contador de visitantes (simulado)
  let visitorCount = Math.floor(Math.random() * 1000) + 500
  console.log(`👥 Visitantes online: ${visitorCount}`)
  
  // Adicionar efeito de typing no hero
  const heroTitle = document.querySelector('h1')
  if (heroTitle) {
    const text = heroTitle.innerHTML
    heroTitle.innerHTML = ''
    heroTitle.style.borderRight = '3px solid white'
    
    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      } else {
        heroTitle.style.borderRight = 'none'
      }
    }
    
    setTimeout(typeWriter, 1000)
  }
})

// Função para adicionar produtos dinamicamente (para futuras implementações)
function addProduct(name, description, price, image, affiliateLink) {
  const productsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
  
  if (productsContainer) {
    const productCard = document.createElement('div')
    productCard.className = 'bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
    productCard.innerHTML = `
      <div class="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
        <span class="text-6xl">${image}</span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2">${name}</h3>
        <p class="text-gray-600 mb-4">${description}</p>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold text-orange-600">${price}</span>
          <a href="${affiliateLink}" target="_blank" class="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors">
            Ver Produto
          </a>
        </div>
      </div>
    `
    
    productsContainer.appendChild(productCard)
  }
}

// Exemplo de como adicionar um produto (descomente para testar)
// addProduct('Tênis Nike Air Jordan', 'O clássico que nunca sai de moda', 'R$ 899', '👟', 'https://exemplo.com/produto')

console.log('🎯 Sistema de produtos carregado!')
