import { X } from "lucide-react";
import { useCookies } from "@/contexts/CookieContext";

export const CookieConsentBanner = () => {
  const { showBanner, acceptAll, openModal, dismissBanner } = useCookies();

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg">
      <div className="container py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-serif font-semibold text-foreground mb-2">Cookies</h3>
            <p className="text-sm text-muted-foreground mb-3">
              We use cookies to improve your experience. We use three types:
            </p>
            <ul className="text-xs text-muted-foreground space-y-1 mb-4 sm:mb-0">
              <li>• <strong>Essential:</strong> Required for website functionality</li>
              <li>• <strong>Analytics:</strong> Help us understand how you use our site</li>
              <li>• <strong>Marketing:</strong> Used for advertising and promotional purposes</li>
            </ul>
          </div>

          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => openModal()}
              className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              Manage
            </button>
            <button
              onClick={() => acceptAll()}
              className="px-4 py-2 text-sm font-medium bg-gradient-gold text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Accept All
            </button>
            <button
              onClick={() => dismissBanner()}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss cookie banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
