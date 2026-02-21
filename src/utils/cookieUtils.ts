import { CookiePreferences } from "@/contexts/CookieContext";

const STORAGE_KEY = "tcs_cookies_consent";

/**
 * Set cookie consent preferences in localStorage
 */
export const setConsentCookie = (preferences: CookiePreferences): void => {
  const withMeta = {
    ...preferences,
    timestamp: Date.now(),
    version: 1,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(withMeta));
};

/**
 * Get cookie consent preferences from localStorage
 */
export const getConsentCookie = (): CookiePreferences | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

/**
 * Clear cookie consent preferences (shows banner again)
 */
export const clearConsentCookie = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

/**
 * Check if a specific cookie category has been accepted
 */
export const isCookieAccepted = (category: 'essential' | 'analytics' | 'marketing'): boolean => {
  const prefs = getConsentCookie();
  if (!prefs) return category === 'essential'; // Essential is always true if not set
  return prefs[category] === true;
};

/**
 * Placeholder for future analytics initialization
 * Call this in App.tsx after CookieProvider is set up
 */
export const initializeAnalytics = (consentState: CookiePreferences): void => {
  if (!consentState.analytics) {
    console.log("Analytics consent not given, tracking disabled");
    return;
  }

  // TODO: Initialize your analytics provider here
  // Examples:
  // - Google Analytics: gtag('consent', 'update', { 'analytics_storage': 'granted' })
  // - Plausible Analytics: window.plausible = window.plausible || function() { ... }
  // - Fathom Analytics: window.fathom = window.fathom || {}
  console.log("Analytics consent given, ready for analytics initialization");
};

/**
 * Placeholder for tracking custom events
 * Use this throughout your app once an analytics provider is configured
 */
export const trackEvent = (
  eventName: string,
  data?: Record<string, any>,
  properties?: Record<string, any>
): void => {
  if (!isCookieAccepted('analytics')) {
    console.log("Analytics not consented, event not tracked:", eventName);
    return;
  }

  // TODO: Implement your analytics event tracking here
  // Examples:
  // - Google Analytics: gtag('event', eventName, data)
  // - Plausible: window.plausible(eventName, { props: properties })
  // - Fathom: window.fathom.trackGoal('YOUR_GOAL_ID', 0)
  console.log("Event tracked:", eventName, { data, properties });
};

/**
 * Get the sidebar cookie name (for reference)
 */
export const getSidebarCookieName = (): string => {
  return "sidebar:state";
};

/**
 * Check if user has made a cookie decision
 */
export const hasConsentDecision = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};
