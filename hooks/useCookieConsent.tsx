'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  hasConsent: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  updatePreferences: (preferences: Partial<CookiePreferences>) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const COOKIE_NAME = 'cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    return cookieValue ? decodeURIComponent(cookieValue) : null;
  }
  return null;
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  functional: false,
  analytics: false,
};

export function CookieProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const saved = getCookie(COOKIE_NAME);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences({ ...defaultPreferences, ...parsed });
        setHasConsent(true);
      } catch {
        setHasConsent(false);
      }
    }
  }, []);

  const savePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setCookie(COOKIE_NAME, JSON.stringify(newPreferences), CONSENT_EXPIRY_DAYS);
    setHasConsent(true);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      functional: true,
      analytics: true,
    });
  };

  const acceptNecessary = () => {
    savePreferences({
      essential: true,
      functional: false,
      analytics: false,
    });
  };

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    savePreferences({
      ...preferences,
      ...newPreferences,
    });
  };

  return (
    <CookieContext.Provider
      value={{
        preferences,
        hasConsent,
        acceptAll,
        acceptNecessary,
        updatePreferences,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
