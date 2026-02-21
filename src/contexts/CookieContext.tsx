import React, { createContext, useContext, useState, useEffect } from "react";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp?: number;
  version?: number;
}

interface CookieContextType {
  preferences: CookiePreferences;
  showBanner: boolean;
  showModal: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  hasUserConsented: () => boolean;
  isCookieAccepted: (category: keyof Omit<CookiePreferences, 'timestamp' | 'version'>) => boolean;
  openModal: () => void;
  closeModal: () => void;
  dismissBanner: () => void;
}

const STORAGE_KEY = "tcs_cookies_consent";
const CURRENT_VERSION = 1;

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        setShowBanner(false);
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const withMeta = {
      ...prefs,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    };
    setPreferences(withMeta);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(withMeta));
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
    setShowBanner(false);
    setShowModal(false);
  };

  const rejectAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
    setShowBanner(false);
    setShowModal(false);
  };

  const updatePreferences = (prefs: Partial<CookiePreferences>) => {
    const updated = { ...preferences, ...prefs };
    savePreferences(updated);
    setShowBanner(false);
    setShowModal(false);
  };

  const hasUserConsented = () => {
    return localStorage.getItem(STORAGE_KEY) !== null;
  };

  const isCookieAccepted = (category: keyof Omit<CookiePreferences, 'timestamp' | 'version'>) => {
    return preferences[category] === true;
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const dismissBanner = () => {
    setShowBanner(false);
  };

  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <CookieContext.Provider
      value={{
        preferences,
        showBanner,
        showModal,
        acceptAll,
        rejectAll,
        updatePreferences,
        hasUserConsented,
        isCookieAccepted,
        openModal,
        closeModal,
        dismissBanner,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookies must be used within CookieProvider");
  }
  return context;
};
