'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, Zap, Shield, Cpu, Mic, User } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const AUTO_RESPONSES: Record<string, string> = {
    'default': "I'm not sure I understand. Could you please rephrase that or ask about our services, AI solutions, or how to contact us?",
    'hello': "Hello! I'm WLOPER AI. How can I help you scale your business with AI today?",
    'hi': "Hi there! How can WLOPER assist you today?",
    'services': "We provide a range of next-gen services: AI Strategy Consulting, Custom Bot Development, Web & Mobile App Development, and Digital Marketing.",
    'ai': "Our AI expertise includes Natural Language Processing, Computer Vision, and custom LLM integrations. We help businesses automate workflows and enhance user experiences.",
    'contact': "You can reach us through our contact page, via email at sales@wloper.com, or call us directly at +91-8433462546.",
    'pricing': "Our pricing is flexible and depends on the project scope. We offer everything from startup packages to enterprise solutions. Let's discuss your requirements!",
    'who': "WLOPER is a next-generation tech company dedicated to building scalable, AI-driven solutions for the modern world.",
    'strategy': "Our AI strategy helps businesses identify high-impact AI opportunities and implement them efficiently.",
    'bots': "We build custom, intelligent chatbots that can handle customer service, lead generation, and complex internal workflows.",
    'security': "We prioritize data privacy and security in all our AI implementations, ensuring your business and user data remain protected.",
    'integration': "We specialize in seamlessly integrating AI capabilities into your existing tech stack and workflows."
};

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! I'm WLOPER AI. How can I help you scale your product with artificial intelligence today?",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, isTyping]);

    const getAutoResponse = (input: string) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('service')) return AUTO_RESPONSES['services'];
        if (lowerInput.includes('ai') || lowerInput.includes('artificial intelligence')) return AUTO_RESPONSES['ai'];
        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) return AUTO_RESPONSES['contact'];
        if (lowerInput.includes('price') || lowerInput.includes('cost')) return AUTO_RESPONSES['pricing'];
        if (lowerInput.includes('who') || lowerInput.includes('what is wloper')) return AUTO_RESPONSES['who'];
        if (lowerInput.includes('strategy')) return AUTO_RESPONSES['strategy'];
        if (lowerInput.includes('bot')) return AUTO_RESPONSES['bots'];
        if (lowerInput.includes('security') || lowerInput.includes('privacy')) return AUTO_RESPONSES['security'];
        if (lowerInput.includes('integration') || lowerInput.includes('integrate')) return AUTO_RESPONSES['integration'];
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) return AUTO_RESPONSES['hello'];

        return AUTO_RESPONSES['default'];
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputValue;
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: getAutoResponse(currentInput),
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const startListening = () => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInputValue(transcript);
        };

        recognition.start();
    };

    const quickLinks = [
        { label: 'AI Strategy', icon: Zap, key: 'strategy' },
        { label: 'Custom Bots', icon: Bot, key: 'bots' },
        { label: 'Security', icon: Shield, key: 'security' },
        { label: 'Integration', icon: Cpu, key: 'integration' },
    ];

    const handleQuickLink = (link: { label: string, key: string }) => {
        setInputValue(link.label);
        // We could directly send it too
        const userMessage: Message = {
            id: Date.now().toString(),
            text: link.label,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        setTimeout(() => {
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: AUTO_RESPONSES[link.key] || AUTO_RESPONSES['default'],
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[350px] md:w-[400px] max-w-[calc(100vw-2rem)] glass-strong rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-wl-accent p-6 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-wl-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-black text-sm">WLOPER AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className={`w-1.5 h-1.5 rounded-full ${isListening ? 'bg-red-600 animate-ping' : 'bg-green-600 animate-pulse'}`}></div>
                                        <span className="text-[10px] font-bold text-black/60 uppercase tracking-tighter">
                                            {isListening ? 'Listening...' : isTyping ? 'Typing...' : 'Online & Thinking'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-black/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-black" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 h-[400px] overflow-y-auto space-y-4 flex-1 scrollbar-hide">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'ai' ? 'bg-wl-accent/20' : 'bg-white/10'}`}>
                                        {msg.sender === 'ai' ? <Bot className="w-4 h-4 text-wl-accent" /> : <User className="w-4 h-4 text-white/60" />}
                                    </div>
                                    <div className={`max-w-[80%] rounded-2xl p-4 text-sm border ${msg.sender === 'ai' ? 'bg-white/5 text-white/80 border-white/5' : 'bg-wl-accent text-black border-wl-accent/20'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-wl-accent/20 flex items-center justify-center shrink-0">
                                        <Bot className="w-4 h-4 text-wl-accent" />
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-4 text-sm text-white/80 border border-white/5">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-wl-accent/50 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-wl-accent/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                            <span className="w-1.5 h-1.5 bg-wl-accent/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />

                            <div className="space-y-3 pt-4">
                                <p className="text-[10px] font-bold text-wl-muted-dark uppercase tracking-widest px-1">Quick Inquiries</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {quickLinks.map((link) => (
                                        <button
                                            key={link.label}
                                            onClick={() => handleQuickLink(link)}
                                            className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-wl-accent/30 hover:bg-wl-accent/5 transition-all text-xs font-medium group text-left"
                                        >
                                            <link.icon className="w-3.5 h-3.5 text-wl-accent group-hover:scale-110 transition-transform" />
                                            {link.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer / Input */}
                        <div className="p-4 border-t border-white/10 bg-black/20 shrink-0">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex items-center gap-2"
                            >
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Ask about AI solutions..."
                                        className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-wl-accent/50 transition-colors text-white"
                                    />
                                    <button
                                        type="button"
                                        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-transparent text-white/40 hover:text-wl-accent'}`}
                                        onClick={startListening}
                                    >
                                        <Mic className="w-4 h-4" />
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    className="p-3 bg-wl-accent rounded-full text-black hover:scale-110 transition-transform flex-shrink-0 disabled:opacity-50 disabled:scale-100"
                                    disabled={!inputValue.trim() || isTyping}
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-white text-black' : 'bg-wl-accent text-black'}`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wl-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-wl-accent"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}

