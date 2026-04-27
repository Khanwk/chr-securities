"use client";

import { useState, useRef, useEffect } from "react";
import { botRules, quickChips } from "@/data";
import type { ChatMessage, BotRule, QuickChip } from "@/types";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/ModalContext";

const GREETING =
  "Hi! I'm the CHR Security Assistant. I can help with CCTV, alarms, fire systems, access control, monitoring and cyber security — or book you a consultation. What do you need?";

const FALLBACK =
  "Thanks for getting in touch. For the quickest response, call Ciaran directly on 087 909 6434 or head to our Contact page and he'll get back to you personally.";

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  const matched = botRules.find((rule: BotRule) =>
    rule.keywords.some((kw: string) => lower.includes(kw)),
  );
  return matched ? matched.response : FALLBACK;
}

export function SecurityAssistantSection() {
  const router = useRouter();
  const { openQuote, openCyber } = useModal();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "bot", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [chipsVisible, setChipsVisible] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setChipsVisible(false);
    const userMsg: ChatMessage = { role: "user", text: text.trim() };
    const botMsg: ChatMessage = { role: "bot", text: getBotResponse(text) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  return (
    <section className="bg-sky py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Smart Security Assistant
          </p>
          <h2 className="text-4xl font-black uppercase text-primary tracking-tight">
            Ask Our Security Expert
          </h2>
          <p className="text-textMain text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Get instant answers about CCTV, alarms, fire systems, access control
            or cyber security. Book a consultation or request a quote —
            available around the clock.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-white">
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                <span className="text-white font-black text-xs">CHR</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">
                  CHR Security Assistant
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  Typically replies instantly
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-white/60 text-xs">Online</span>
              </div>
            </div>

            <div
              ref={chatContainerRef}
              className="h-85 overflow-y-auto px-5 py-5 flex flex-col gap-4 bg-white"
            >
              {messages.map((msg: ChatMessage, index: number) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  {msg.role === "bot" && (
                    <span className="text-xs text-textMain/40 font-semibold mb-1 px-1">
                      CHR Assistant
                    </span>
                  )}
                  <div
                    className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-sky text-textMain rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.role === "bot" && index === 0 && chipsVisible && (
                    <div className="flex flex-wrap gap-2 mt-3 max-w-[90%]">
                      {quickChips.map((chip: QuickChip) => (
                        <button
                          key={chip.label}
                          onClick={() => sendMessage(chip.message)}
                          className="bg-white border border-primary text-primary text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm"
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-4 py-3 border-t border-gray-100 bg-white flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 bg-sky rounded-lg px-4 py-2.5 text-sm text-textMain placeholder-textMain/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                onClick={() => sendMessage(input)}
                className="bg-accent text-white font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer shrink-0"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
