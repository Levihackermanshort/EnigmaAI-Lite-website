// Nexus AI Assistant
// ... existing code ...
document.addEventListener('DOMContentLoaded', () => {
    class NexusAI {
        constructor() {
            this.widget = document.getElementById('nexusWidget');
            if (!this.widget) return;
            this.header = this.widget.querySelector('.nexus-header[data-draggable]');
            this.messages = document.getElementById('nexusMessages');
            this.input = document.getElementById('nexusInput');
            this.sendButton = document.getElementById('nexusSend');
            this.minimizeButton = this.widget.querySelector('.nexus-minimize');
            this.typingIndicator = document.getElementById('nexusTyping');
            this.moodDisplay = document.getElementById('nexusMood');
            this.avatarPulse = this.widget.querySelector('.avatar-pulse');
            this.isMinimized = false;
            this.isDragging = false;
            this.dragOffset = { x: 0, y: 0 };
            this.moods = [
                {emoji: '🤖', text: 'Logical'},
                {emoji: '😎', text: 'Cool'},
                {emoji: '🤓', text: 'Nerdy'},
                {emoji: '😴', text: 'Sleepy'},
                {emoji: '😂', text: 'Jokester'},
                {emoji: '😇', text: 'Helpful'},
                {emoji: '🧐', text: 'Curious'},
                {emoji: '🥳', text: 'Party'},
                {emoji: '👾', text: 'Glitchy'}
            ];
            this.knowledgeBase = {
                'enigma': 'Enigma AI is a modular, open-domain AI assistant designed for transparency, efficiency, and flexibility. Our mission is to advance ethical, user-centric AI.',
                'vision': 'Our vision is to create an AI that is transparent, ethical, and adaptable to a wide range of domains and users.',
                'background': 'Enigma AI is a research project from the University of Huddersfield, focusing on next-generation AI architectures and responsible deployment.',
                'research': 'Our research explores modular AI design, ethical frameworks, and scalable deployment. Check the Research Questions and Methodology sections for more.',
                'questions': 'Our research questions focus on transparency, modularity, ethical risk, and real-world deployment of AI systems.',
                'methodology': 'We use a combination of experimental validation, user studies, benchmarking, and ethical impact assessment. See the Methodology section for details.',
                'architecture': 'Enigma AI features a modular neural architecture, advanced training methods, and a unique ethical framework.',
                'deployment': 'Deployment strategies include scalable cloud solutions and robust monitoring for safety and performance.',
                'ethics': 'Ethics and risk are at the core of Enigma AI. We prioritize transparency, user privacy, and responsible AI practices.',
                'timeline': 'The project timeline includes research, development, testing, and deployment phases. See the Timeline section for milestones.',
                'contact': 'You can reach the Enigma AI team via the Contact section of this website.',
                'features': 'Key features include advanced neural architecture, ethical framework, modular design, and performance analytics.',
                'website': 'This website uses modern web technologies, animated backgrounds, and a custom AI assistant (me, Nexus!) for a futuristic experience.',
                'nexus': 'I am Nexus, your AI assistant for the Enigma AI project. Ask me about the research, features, or anything on this site!'
            };
            this.setupEventListeners();
            this.setMood(this.randomMood());
        }
        setupEventListeners() {
            this.sendButton.addEventListener('click', () => this.handleUserInput());
            this.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleUserInput();
            });
            this.minimizeButton.addEventListener('click', () => this.toggleMinimize());
            // Dragging
            this.header.addEventListener('mousedown', (e) => this.startDrag(e));
            document.addEventListener('mousemove', (e) => this.onDrag(e));
            document.addEventListener('mouseup', () => this.endDrag());
            // Touch support
            this.header.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]));
            document.addEventListener('touchmove', (e) => this.onDrag(e.touches ? e.touches[0] : e));
            document.addEventListener('touchend', () => this.endDrag());
        }
        startDrag(e) {
            if (this.isMinimized) return;
            this.isDragging = true;
            const rect = this.widget.getBoundingClientRect();
            this.dragOffset.x = e.clientX - rect.left;
            this.dragOffset.y = e.clientY - rect.top;
            this.widget.style.transition = 'none';
            this.widget.style.opacity = '0.95';
        }
        onDrag(e) {
            if (!this.isDragging) return;
            let x = e.clientX - this.dragOffset.x;
            let y = e.clientY - this.dragOffset.y;
            // Keep within viewport
            x = Math.max(0, Math.min(window.innerWidth - this.widget.offsetWidth, x));
            y = Math.max(0, Math.min(window.innerHeight - this.widget.offsetHeight, y));
            this.widget.style.left = x + 'px';
            this.widget.style.top = y + 'px';
            this.widget.style.right = 'auto';
            this.widget.style.bottom = 'auto';
            this.widget.style.position = 'fixed';
        }
        endDrag() {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.widget.style.transition = '';
            this.widget.style.opacity = '';
        }
        async handleUserInput() {
            const userInput = this.input.value.trim();
            if (!userInput) return;
            this.addMessage(userInput, 'user');
            this.input.value = '';
            this.showTypingIndicator();
            let response = '';
            try {
                response = await this.fetchOpenAIResponse(userInput);
            } catch (e) {
                response = this.generateResponse(userInput.toLowerCase());
            }
            this.hideTypingIndicator();
            this.addMessage(response, 'nexus');
            // Randomly change mood after a response
            if (Math.random() < 0.25) this.setMood(this.randomMood());
        }
        async fetchOpenAIResponse(userInput) {
            const systemPrompt = `You are Nexus, the friendly, futuristic AI assistant for the Enigma AI research project website. You answer questions about Enigma AI, its research, methodology, vision, ethics, deployment, and website features. You are concise, helpful, and always on-topic.`;
            const body = {
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userInput }
                ]
            };
            const API_URL = 'https://enigma-ai-proxy.onrender.com'; // Update this with your deployed server URL
            const res = await fetch(`${API_URL}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!res.ok) throw new Error('API error');
            const data = await res.json();
            return data.content.trim();
        }
        generateResponse(input) {
            // Check knowledge base
            for (const [key, value] of Object.entries(this.knowledgeBase)) {
                if (input.includes(key)) {
                    return value;
                }
            }
            if (input.includes('hello') || input.includes('hi')) {
                return `Hello! I'm Nexus, your AI assistant for Enigma AI. How can I help you with our research or features today?`;
            }
            if (input.includes('joke')) {
                return "Why do programmers prefer dark mode? Because light attracts bugs!";
            }
            if (input.includes('help')) {
                return "You can ask me about Enigma AI's vision, methodology, research, features, ethics, deployment, or any section of this website!";
            }
            return "I'm Nexus, your AI guide for Enigma AI. Ask me about our research, features, or any section of this site!";
        }
        addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.innerHTML = `<p>${text}</p>`;
            this.messages.appendChild(messageDiv);
            this.messages.scrollTop = this.messages.scrollHeight;
        }
        showTypingIndicator() {
            this.typingIndicator.style.display = 'flex';
        }
        hideTypingIndicator() {
            this.typingIndicator.style.display = 'none';
        }
        toggleMinimize() {
            this.isMinimized = !this.isMinimized;
            this.widget.classList.toggle('minimized');
            const icon = this.minimizeButton.querySelector('i');
            icon.className = this.isMinimized ? 'fas fa-plus' : 'fas fa-minus';
        }
        randomMood() {
            return this.moods[Math.floor(Math.random() * this.moods.length)];
        }
        setMood(mood) {
            this.currentMood = mood;
            if (this.moodDisplay) {
                this.moodDisplay.textContent = `${mood.emoji} ${mood.text}`;
            }
        }
    }
    new NexusAI();
}); 