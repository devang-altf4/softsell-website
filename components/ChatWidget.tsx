"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const EXAMPLE_QUESTIONS = [
  "How do I sell my license?",
  "Is SoftSell secure?",
  "How long does the process take?",
  "What types of licenses can I sell?"
]

function mockLLMResponse(question: string): Promise<string> {
  // Simple mock logic for demo; replace with real API call if needed
  return new Promise(resolve => {
    setTimeout(() => {
      if (question.toLowerCase().includes("sell my license")) {
        resolve("To sell your license, click 'Sell My Licenses' and fill out the form. We'll guide you through the process!")
      } else if (question.toLowerCase().includes("secure")) {
        resolve("Yes, SoftSell uses enterprise-grade security to protect your data and transactions.")
      } else if (question.toLowerCase().includes("process")) {
        resolve("The process is fast! Get a valuation within 24 hours and payment in 3-5 business days.")
      } else if (question.toLowerCase().includes("types of licenses")) {
        resolve("You can sell most major software licenses. Contact us if you're unsure about your license type.")
      } else {
        resolve("I'm here to help! Please provide more details about your question.")
      }
    }, 900)
  })
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{role: 'user'|'ai', text: string}[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  const sendMessage = async (msg: string) => {
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setLoading(true)
    const aiReply = await mockLLMResponse(msg)
    setMessages(prev => [...prev, { role: 'ai', text: aiReply }])
    setLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage(input.trim())
    setInput("")
  }

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white dark:bg-background border border-primary/30 rounded-xl shadow-2xl flex flex-col"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-primary/10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-xl">
              <span className="font-semibold text-primary">AI Chat Assistant</span>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-xl font-bold hover:text-red-500">×</button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2" style={{ minHeight: 220, maxHeight: 320 }}>
              {messages.length === 0 && (
                <div className="text-sm text-muted-foreground mb-2">Try asking one of these:</div>
              )}
              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {EXAMPLE_QUESTIONS.map(q => (
                    <button
                      key={q}
                      className="px-2 py-1 rounded bg-muted text-xs hover:bg-primary/10 border border-primary/10"
                      onClick={() => { setInput(q); sendMessage(q) }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'user' ? "text-right" : "text-left"}>
                  <span className={
                    m.role === 'user'
                      ? "inline-block bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs mb-1"
                      : "inline-block bg-muted px-2 py-1 rounded-lg text-xs mb-1"
                  }>
                    {m.text}
                  </span>
                </div>
              ))}
              {loading && (
                <div className="text-left text-xs text-muted-foreground">AI is typing...</div>
              )}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-primary/10">
              <input
                type="text"
                className="flex-1 rounded border border-primary/20 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Type your question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                aria-label="Type your question"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/90 text-sm font-semibold disabled:opacity-60"
                disabled={loading || !input.trim()}
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-secondary-foreground text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:scale-105 transition-all"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="currentColor" opacity=".15"/><path d="M7 10.5a5 5 0 0 1 10 0c0 2.485-2.239 4.5-5 4.5-.56 0-1.1-.08-1.6-.23l-2.4.73.73-2.4A4.98 4.98 0 0 1 7 10.5Z" stroke="#6366F1" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="9" cy="10" r="1" fill="#6366F1"/><circle cx="12" cy="10" r="1" fill="#6366F1"/><circle cx="15" cy="10" r="1" fill="#6366F1"/></svg>
      </motion.button>
    </div>
  )
}