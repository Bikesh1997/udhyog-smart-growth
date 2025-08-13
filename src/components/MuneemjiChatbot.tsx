import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface MuneemjiChatbotProps {
  onNavigate?: (section: string) => void;
}

const MuneemjiChatbot: React.FC<MuneemjiChatbotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatOptions = [
    { id: 'compliance', label: 'Compliance Dashboard', icon: '📊' },
    { id: 'loans', label: 'Loan Overview', icon: '💰' },
    { id: 'regulatory', label: 'Regulatory Updates', icon: '📋' },
    { id: 'growth', label: 'Business Growth Tips', icon: '📈' },
    { id: 'tax', label: 'Tax & TDS Reminders', icon: '🧾' },
    { id: 'reports', label: 'Financial Reports', icon: '📄' },
    { id: 'apply', label: 'Apply for Loan', icon: '✋' },
    { id: 'services', label: 'Other Services', icon: '🔧' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        setMessages([{
          id: '1',
          text: "Namaste! Main hoon Muneem Ji – aapke business ka digital saathi. Bataiye, aaj main aapki kaise madad kar sakta hoon?",
          isBot: true,
          timestamp: new Date()
        }]);
      }, 500);
    }
  }, [isOpen]);

  const handleOptionClick = (option: typeof chatOptions[0]) => {
    setShowOptions(false);
    setIsTyping(true);
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option.label,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getBotResponse(option.id);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Navigate if needed
      if (onNavigate) {
        onNavigate(option.id);
      }
    }, 1500);
  };

  const getBotResponse = (optionId: string): string => {
    const responses = {
      compliance: "Aapka compliance dashboard ready hai! Yahan aap apne saare regulatory requirements track kar sakte hain. Kya aap dashboard dekhna chahenge?",
      loans: "Aapke liye best loan options mil gaye hain! Current rates aur eligibility check karne ke liye main aapko loan section mein le chalta hoon.",
      regulatory: "Latest MSME regulations aur updates yahan hain. Government schemes aur policy changes ki complete information available hai.",
      growth: "Business growth ke liye personalized tips ready hain! Market analysis aur competitor insights ke saath aapka growth plan dekhen.",
      tax: "Tax filing dates aur TDS reminders set kar diye hain. Aapke pending tasks aur due dates ki complete list yahan hai.",
      reports: "Financial reports generate karne ke liye options ready hain. Profit & Loss, Balance Sheet aur Cash Flow statements download kar sakte hain.",
      apply: "Loan application process start karte hain! Aapki business profile ke basis pe pre-approved offers available hain.",
      services: "Hamari additional services – CA consultation, business registration, compliance audit – sabki details yahan hain."
    };
    return responses[optionId as keyof typeof responses] || "Main aapki madad karne ke liye yahan hoon!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simple bot response for custom queries
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Samjha! Is query ke liye main aapko relevant section mein direct kar sakta hoon. Ya fir aap specific options mein se choose kar sakte hain.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setShowOptions(true);
    }, 1000);
  };

  const resetChat = () => {
    setMessages([]);
    setShowOptions(true);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="muneemji-launcher relative h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-white"
          style={{ backgroundColor: '#C91429' }}
        >
          <img 
            src="/lovable-uploads/a453b6ad-0183-4c91-b51c-a8d0654d2ed2.png"
            alt="Muneem Ji"
            className="muneemji-avatar h-12 w-12 object-contain"
          />
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
        </Button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:inset-auto lg:bottom-6 lg:right-6 lg:h-[600px] lg:w-[400px]">
          <div className="muneemji-panel h-full bg-white rounded-t-2xl lg:rounded-2xl shadow-2xl border border-border flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary to-primary/90 text-white rounded-t-2xl lg:rounded-t-2xl">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/a453b6ad-0183-4c91-b51c-a8d0654d2ed2.png"
                  alt="Muneem Ji"
                  className="h-10 w-10 object-contain bg-white/20 rounded-full p-1"
                />
                <div>
                  <h3 className="font-semibold text-lg">Muneem Ji</h3>
                  <p className="text-xs opacity-90">Digital Business Saathi</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`message-bubble flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  style={{ 
                    animation: 'mj-bubble 0.3s cubic-bezier(0.22,1,0.36,1)', 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2 rounded-2xl ${
                      message.isBot 
                        ? 'bg-muted text-foreground rounded-bl-md' 
                        : 'bg-primary text-white rounded-br-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-2 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <div className="mj-typing-dot w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <div className="mj-typing-dot w-2 h-2 bg-muted-foreground rounded-full" style={{ animationDelay: '120ms' }}></div>
                      <div className="mj-typing-dot w-2 h-2 bg-muted-foreground rounded-full" style={{ animationDelay: '240ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Option Chips */}
              {showOptions && !isTyping && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground text-center">Choose an option:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {chatOptions.map((option, index) => (
                      <Button
                        key={option.id}
                        variant="outline"
                        size="sm"
                        onClick={() => handleOptionClick(option)}
                        className="option-chip justify-start gap-2 p-3 h-auto text-left border-2 hover:border-primary hover:bg-primary/5 transition-all duration-200"
                        style={{ 
                          animation: 'mj-pop 0.3s cubic-bezier(0.22,1,0.36,1)', 
                          animationDelay: `${index * 80}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        <span className="text-base">{option.icon}</span>
                        <span className="text-xs leading-tight">{option.label}</span>
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetChat}
                    className="w-full text-muted-foreground hover:text-foreground"
                  >
                    Reset Chat
                  </Button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="px-3"
                  style={{ backgroundColor: '#C91429' }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MuneemjiChatbot;