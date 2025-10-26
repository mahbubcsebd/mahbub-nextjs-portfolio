'use client';
import {
  Bot,
  Check,
  Copy,
  Maximize2,
  Minimize2,
  Send,
  User,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Mahbub's AI Assistant. Ask me anything!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setIsTyping(true);

    try {
      const conversationHistory = messages.slice(-10);

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory: conversationHistory,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();
      const delay = Math.min(1200, data.reply.length * 8);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: data.reply || 'Sorry, I could not process that.',
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, delay);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Oops! Something went wrong. Please try again.',
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };

  const quickQuestions = [
    "What are Mahbub's skills?",
    'Tell me about his projects',
    'What is his experience?',
    'How can I contact him?',
  ];

  const handleQuickQuestion = (question) => {
    setInput(question);
    inputRef.current?.focus();
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const MarkdownComponents = {
    p: ({ children }) => (
      <p className="mb-2 text-sm leading-relaxed last:mb-0">{children}</p>
    ),

    a: ({ href, children }) => (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-blue-600 underline break-all hover:text-blue-700"
      >
        {children}
      </Link>
    ),

    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),

    em: ({ children }) => <em className="italic">{children}</em>,

    h1: ({ children }) => (
      <h1 className="mt-3 mb-2 text-lg font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-3 mb-2 text-base font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-2 mb-1 text-sm font-bold">{children}</h3>
    ),

    ul: ({ children }) => (
      <ul className="mb-2 ml-4 space-y-1 text-sm list-disc">{children}</ul>
    ),

    ol: ({ children }) => (
      <ol className="mb-2 ml-4 space-y-1 text-sm list-decimal">{children}</ol>
    ),

    li: ({ children }) => <li className="leading-relaxed">{children}</li>,

    blockquote: ({ children }) => (
      <blockquote className="py-1.5 pl-3 my-2 text-sm italic border-l-4 border-gray-300 rounded-r bg-gray-50">
        {children}
      </blockquote>
    ),

    code: ({ inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const codeString = String(children).replace(/\n$/, '');
      const language = match ? match[1] : 'text';

      return !inline && match ? (
        <div className="relative my-3 overflow-hidden rounded-lg">
          <div className="flex items-center justify-between px-3 py-1.5 text-xs text-white bg-gray-800">
            <span className="font-medium">{language}</span>
            <button
              onClick={() =>
                copyToClipboard(codeString, `${language}-${codeString}`)
              }
              className="flex items-center gap-1 px-2 py-1 transition-colors rounded hover:bg-gray-700"
            >
              {copiedCode === `${language}-${codeString}` ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3 overflow-x-auto text-xs bg-gray-900">
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        </div>
      ) : (
        <code className="px-1.5 py-0.5 text-xs bg-gray-100 text-red-600 rounded font-mono">
          {children}
        </code>
      );
    },

    table: ({ children }) => (
      <div className="my-3 overflow-x-auto">
        <table className="min-w-full text-xs border border-gray-300 divide-y divide-gray-300">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-100">{children}</thead>,
    tbody: ({ children }) => (
      <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
    ),
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="px-3 py-1.5 text-left font-semibold text-gray-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-3 py-1.5 text-gray-700">{children}</td>
    ),

    hr: () => <hr className="my-3 border-gray-300" />,
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed z-50 flex items-center justify-center text-white transition-all bg-blue-600 rounded-full shadow-lg w-14 h-14 bottom-6 right-6 hover:bg-blue-700 hover:scale-105 active:scale-95"
          aria-label="Open chat"
        >
          <Bot className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all ${
            isMinimized
              ? 'w-64 h-14 bottom-6 right-6'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[calc(100vh-2rem)] sm:h-[600px] max-h-[700px]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-blue-600 border-b border-blue-700 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  AI Assistant
                </h3>
                <p className="text-xs text-blue-100">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 text-white transition-colors rounded-lg hover:bg-blue-700"
                aria-label={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white transition-colors rounded-lg hover:bg-blue-700"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div
                ref={chatRef}
                className="flex-1 p-3 space-y-3 overflow-y-auto sm:p-4 bg-gray-50"
                style={{ height: 'calc(100% - 140px)' }}
              >
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.role === 'assistant' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`flex items-start gap-2 max-w-[85%] sm:max-w-[90%] ${
                        msg.role === 'assistant' ? '' : 'flex-row-reverse'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                          msg.role === 'assistant'
                            ? 'bg-blue-600'
                            : 'bg-gray-700'
                        }`}
                      >
                        {msg.role === 'assistant' ? (
                          <Bot className="w-4 h-4 text-white" />
                        ) : (
                          <User className="w-4 h-4 text-white" />
                        )}
                      </div>

                      <div className="flex flex-col flex-1 gap-1">
                        <div
                          className={`p-2.5 sm:p-3 rounded-2xl ${
                            msg.role === 'assistant'
                              ? 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                              : 'bg-blue-600 text-white rounded-tr-none'
                          }`}
                        >
                          {msg.role === 'assistant' ? (
                            <div className="prose-sm prose max-w-none">
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={MarkdownComponents}
                              >
                                {msg.content}
                              </ReactMarkdown>
                            </div>
                          ) : (
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                              {msg.content}
                            </p>
                          )}
                        </div>
                        <span className="px-2 text-xs text-gray-400">
                          {msg.timestamp.toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="flex items-center justify-center flex-shrink-0 bg-blue-600 rounded-full w-7 h-7">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-2.5 bg-white border border-gray-200 rounded-tl-none rounded-2xl">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="px-1 text-xs font-semibold text-gray-500">
                      Quick questions:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {quickQuestions.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickQuestion(q)}
                          className="px-2.5 py-1.5 text-xs font-medium text-blue-700 transition-colors bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-3 bg-white border-t border-gray-200 sm:p-4 rounded-b-2xl">
                <form onSubmit={sendMessage} className="flex items-end gap-2">
                  <div className="flex-1">
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      rows="1"
                      className="w-full p-2.5 text-sm text-gray-900 transition-all border border-gray-300 outline-none resize-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-500"
                      placeholder="Ask me anything..."
                      disabled={loading}
                      style={{
                        maxHeight: '80px',
                        minHeight: '40px',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="flex items-center justify-center w-10 h-10 text-white transition-all bg-blue-600 shadow-md rounded-xl hover:bg-blue-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <p className="mt-1.5 text-xs text-center text-gray-400">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 5px;
        }

        div::-webkit-scrollbar-track {
          background: transparent;
        }

        div::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </>
  );
}
