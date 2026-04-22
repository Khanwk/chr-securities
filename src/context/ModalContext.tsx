"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import QuoteModal from "../components/modals/QouteModal";
import CyberScoreModal from "../components/modals/CyberScoreModal";

interface ModalContextType {
  openQuote: () => void;
  openCyber: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openQuote: () => {},
  openCyber: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

interface Props {
  children: ReactNode;
}

export function ModalProvider({ children }: Props) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [cyberOpen, setCyberOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openQuote: () => setQuoteOpen(true),
        openCyber: () => setCyberOpen(true),
      }}
    >
      {children}

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
      {cyberOpen && <CyberScoreModal onClose={() => setCyberOpen(false)} />}
    </ModalContext.Provider>
  );
}
