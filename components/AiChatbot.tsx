
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const FAQ_LIST = `
1. What products do you offer?
- We specialize in heavy-duty industrial crates, garment export accessories, and custom injection molds.
2. Where is your factory located?
- Plot 42, Tongi Industrial Area, Gazipur, Bangladesh.
3. How can I get a quote?
- You can use the "CONTACT US" button on our navbar or fill out the form in the Contact HQ page to send us a WhatsApp inquiry.
4. What materials do you use?
- We use high-quality HDPE, PP, ABS, and recycled plastic blends.
5. What are your operational hours?
- Our factory operates 24/7, and our office is open Saturday to Thursday from 9:00 AM to 6:00 PM.
`;

const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Noor Plastics Industry FAQ Assistant. I can help with general questions about our products, location, and hours. How can I assist?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are the FAQ Assistant for Noor Plastics Industry. ONLY answer questions related to the following FAQ data: ${FAQ_LIST}. If a user asks something outside this scope, politely inform them that you are limited to basic FAQs and suggest they contact our sales team via WhatsApp for more details. Keep answers brief and professional.`,
          temperature: 0.3,
        }
      });

      const aiText = response.text || "I apologize, please try again.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Please contact us directly for detailed information.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-zinc-950 text-white p-4 rounded-full shadow-2xl z-[90] border-2 border-orange-600/30 flex items-center justify-center hover:bg-zinc-800 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 text-orange-500" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 w-[350px] max-w-[90vw] h-[450px] bg-white shadow-2xl z-[90] border border-zinc-200 flex flex-col overflow-hidden rounded-xl"
          >
            {/* Header */}
            <div className="bg-zinc-950 p-4 flex items-center justify-between border-b border-orange-600/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-industrial font-bold text-xs tracking-wider">FAQ BOT</h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-zinc-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-lg text-sm ${
                    m.role === 'user' 
                      ? 'bg-zinc-900 text-white' 
                      : 'bg-white border border-zinc-200 text-zinc-800'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && <Loader2 className="w-4 h-4 animate-spin text-orange-600 mx-auto" />}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-100 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-grow bg-zinc-100 border-none rounded px-3 py-2 text-xs focus:ring-1 focus:ring-orange-600 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-orange-600 text-white p-2 rounded hover:bg-orange-700"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiChatbot;
