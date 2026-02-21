import { X } from "lucide-react";
import { useCookies } from "@/contexts/CookieContext";
import { useState } from "react";

export const CookiePreferencesModal = () => {
  const { showModal, preferences, updatePreferences, acceptAll, rejectAll, closeModal } = useCookies();
  const [tempPrefs, setTempPrefs] = useState(preferences);

  if (!showModal) {
    return null;
  }

  const handleToggle = (category: 'analytics' | 'marketing') => {
    setTempPrefs({
      ...tempPrefs,
      [category]: !tempPrefs[category],
    });
  };

  const handleSave = () => {
    updatePreferences(tempPrefs);
  };

  const handleAcceptAll = () => {
    acceptAll();
  };

  const handleRejectAll = () => {
    rejectAll();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={() => closeModal()}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4">
        <div className="bg-background rounded-lg border border-border shadow-lg p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-foreground">Cookie Preferences</h2>
            <button
              onClick={() => closeModal()}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6 mb-6">
            {/* Essential */}
            <div className="pb-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">Strictly Necessary Cookies</h3>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-5 h-5 rounded border-border cursor-not-allowed opacity-50"
                  aria-label="Essential cookies toggle"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Required for the website to function properly. Includes sidebar state, shopping cart, and security protection. Always enabled.
              </p>
            </div>

            {/* Analytics */}
            <div className="pb-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    tempPrefs.analytics ? 'bg-accent' : 'bg-gray-300'
                  }`}
                  aria-label="Analytics cookies toggle"
                  role="switch"
                  aria-checked={tempPrefs.analytics}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      tempPrefs.analytics ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                Help us understand how you use our site to improve your experience. Optional and can be disabled.
              </p>
            </div>

            {/* Marketing */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">Marketing Cookies</h3>
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    tempPrefs.marketing ? 'bg-accent' : 'bg-gray-300'
                  }`}
                  aria-label="Marketing cookies toggle"
                  role="switch"
                  aria-checked={tempPrefs.marketing}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      tempPrefs.marketing ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                Used for advertising and promotional purposes. Optional and can be disabled.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleRejectAll()}
              className="px-4 py-2.5 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={() => handleSave()}
              className="px-4 py-2.5 text-sm font-medium bg-gradient-gold text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Save Preferences
            </button>
            <button
              onClick={() => handleAcceptAll()}
              className="px-4 py-2.5 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
