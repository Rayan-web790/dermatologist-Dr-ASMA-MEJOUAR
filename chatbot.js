// Chatbot functionality
class Chatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.attachEventListeners();
    this.addWelcomeMessage();
  }

  createChatbotHTML() {
    const chatbotHTML = `
      <div id="chatbot-container" class="chatbot-container">
        <div id="chatbot-header" class="chatbot-header">
          <div class="d-flex align-items-center">
            <i class="bi bi-chat-dots-fill me-2"></i>
            <span>Assistant Virtuel</span>
          </div>
          <button id="chatbot-minimize" class="btn btn-sm btn-link text-white p-0">
            <i class="bi bi-dash-lg"></i>
          </button>
        </div>
        <div id="chatbot-body" class="chatbot-body">
          <div id="chatbot-messages" class="chatbot-messages"></div>
        </div>
        <div id="chatbot-input-container" class="chatbot-input-container">
          <input 
            type="text" 
            id="chatbot-input" 
            class="chatbot-input" 
            placeholder="Tapez votre message..."
          />
          <button id="chatbot-send" class="chatbot-send-btn">
            <i class="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
      <button id="chatbot-toggle" class="chatbot-toggle">
        <i class="bi bi-chat-dots-fill"></i>
        <span class="chatbot-notification"></span>
      </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  attachEventListeners() {
    const toggleBtn = document.getElementById('chatbot-toggle');
    const minimizeBtn = document.getElementById('chatbot-minimize');
    const sendBtn = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');
    const container = document.getElementById('chatbot-container');

    toggleBtn.addEventListener('click', () => this.toggleChatbot());
    minimizeBtn.addEventListener('click', () => this.toggleChatbot());
    sendBtn.addEventListener('click', () => this.sendMessage());
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });

    // Close on outside click (optional)
    document.addEventListener('click', (e) => {
      if (this.isOpen && !container.contains(e.target) && !toggleBtn.contains(e.target)) {
        // Keep it open - user might want to continue chatting
      }
    });
  }

  toggleChatbot() {
    const container = document.getElementById('chatbot-container');
    const toggleBtn = document.getElementById('chatbot-toggle');
    const isMobile = window.innerWidth < 768;
    
    this.isOpen = !this.isOpen;
    
    if (this.isOpen) {
      container.classList.add('chatbot-open');
      if (isMobile) {
        container.style.height = '100dvh';
        container.style.width = '100vw';
        container.style.bottom = '0';
        container.style.right = '0';
        container.style.borderRadius = '0';
      }
      toggleBtn.style.display = 'none';
      document.getElementById('chatbot-input').focus();
    } else {
      container.classList.remove('chatbot-open');
      if (isMobile) {
        container.style.height = '';
        container.style.width = '';
        container.style.bottom = '';
        container.style.right = '';
        container.style.borderRadius = '';
      }
      toggleBtn.style.display = 'flex';
    }
  }

  addWelcomeMessage() {
    const welcomeMessage = "Bonjour cher clients, j'espère que vous allez bien. Merci d'avoir consulté notre assistant. Que puis-je faire pour vous ?";
    
    setTimeout(() => {
      this.addMessage(welcomeMessage, 'bot');
    }, 300);
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message chatbot-message-${sender}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'chatbot-message-content';
    messageContent.textContent = text;
    
    messageDiv.appendChild(messageContent);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    this.messages.push({ text, sender });
  }

  sendMessage() {
    const input = document.getElementById('chatbot-input');
    const userMessage = input.value.trim();
    
    if (!userMessage) return;
    
    this.addMessage(userMessage, 'user');
    input.value = '';
    
    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = this.getBotResponse(userMessage);
      this.addMessage(botResponse, 'bot');
    }, 500);
  }

  getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello') || message.includes('bonsoir')) {
      return "Bonjour ! Comment puis-je vous aider aujourd'hui ? 😊";
    }
    
    // Appointment
    if (message.includes('rendez-vous') || message.includes('rdv') || message.includes('appointment') || message.includes('réserver')) {
      return "Pour prendre un rendez-vous, vous pouvez :\n📱 Nous contacter via WhatsApp : 0524408296 / 0661063999\n✉️ Envoyer un email à : asmamejouar@gmail.com\n📍 Ou nous rendre visite à : J24J+X68, Marrakech, Maroc";
    }
    
    // Services
    if (message.includes('service') || message.includes('traitement') || message.includes('soin')) {
      return "Nous proposons plusieurs services :\n• Diagnostic de la peau\n• Traitement de l'acné\n• Peeling chimique\n• Laser dermatologique\n• Chirurgie des grains de beauté\n• Traitement des verrues\n• Consultation des enfants\n• Injections esthétiques\n\nVoulez-vous plus d'informations sur un service spécifique ?";
    }
    
    // Specialties
    if (message.includes('spécialité') || message.includes('specialite') || message.includes('domaine')) {
      return "Nos spécialités incluent :\n• Maladies de la peau, ongles et cheveux\n• Allergies cutanées\n• Chirurgie dermatologique\n• Maladies sexuellement transmissibles\n• Dermatologie pédiatrique\n• Dermatologie esthétique";
    }
    
    // Contact
    if (message.includes('contact') || message.includes('adresse') || message.includes('localisation') || message.includes('téléphone') || message.includes('telephone') || message.includes('whatsapp')) {
      return "📞 Contactez-nous :\n📱 WhatsApp : 0524408296 / 0661063999\n✉️ Email : asmamejouar@gmail.com\n📍 Adresse : J24J+X68, Marrakech, Maroc";
    }
    
    // Hours
    if (message.includes('horaire') || message.includes('heure') || message.includes('ouvert') || message.includes('fermé') || message.includes('ferme')) {
      return "Pour connaître nos horaires d'ouverture, veuillez nous contacter directement par téléphone ou WhatsApp. Nous serons ravis de vous renseigner !";
    }
    
    // Acne
    if (message.includes('acné') || message.includes('acne') || message.includes('bouton')) {
      return "Le traitement de l'acné dépend de sa gravité. Nous proposons des crèmes topiques, des médicaments oraux, des peelings et des traitements au laser. Pour un diagnostic personnalisé, je vous recommande de prendre rendez-vous avec le Dr. Asma Mejouar.";
    }
    
    // Price/Cost
    if (message.includes('prix') || message.includes('tarif') || message.includes('coût') || message.includes('cout') || message.includes('combien')) {
      return "Les tarifs varient selon le type de consultation et de traitement. Pour obtenir des informations précises sur les prix, veuillez nous contacter directement. Nous serons heureux de vous fournir un devis personnalisé.";
    }
    
    // Doctor info
    if (message.includes('docteur') || message.includes('dr') || message.includes('asma') || message.includes('mejouar') || message.includes('médecin')) {
      return "Le Dr. Asma Mejouar est une dermatologue expérimentée, diplômée de la faculté de médecine de Casablanca, ancienne interne du CHU Ibn Rochd, et lauréate de la faculté de médecine de Marrakech. Elle allie professionnalisme, écoute et expertise pour offrir un suivi personnalisé.";
    }
    
    // Default response
    const defaultResponses = [
      "Merci pour votre question. Pour des informations plus détaillées, je vous recommande de consulter nos pages Services ou Spécialités, ou de nous contacter directement.",
      "Je comprends votre question. Pour une réponse plus précise, n'hésitez pas à nous contacter par WhatsApp ou email. Nous serons ravis de vous aider !",
      "Pour obtenir des informations complètes, je vous suggère de visiter notre site web ou de nous contacter directement. Comment puis-je vous aider autrement ?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
  });
} else {
  new Chatbot();
}

