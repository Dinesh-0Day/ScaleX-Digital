import React, { useEffect, useState } from "react";

const CONSENT_KEY = "scalex_cookie_consent_v1";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-4xl rounded-2xl border border-white/15 bg-[#0a0f1f]/90 p-4 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-200 leading-relaxed">
          We use cookies to improve site performance, understand usage, and personalize your experience.
          By continuing, you can accept or reject non-essential cookies.
        </p>
        <div className="flex items-center gap-2 md:flex-shrink-0">
          <button
            onClick={() => saveConsent("rejected")}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-all"
          >
            Reject
          </button>
          <button
            onClick={() => saveConsent("accepted")}
            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black hover:scale-105 transition-all"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
