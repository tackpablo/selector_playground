import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Selector Playground",
  description: "Testing selectors across breakpoints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          id="keak-general-script"
          src="http://localhost:3000/api/scripts/4/general/full/script.js"
          type="text/javascript"
          data-domain="4"
        ></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `.async-hide { opacity: 0 !important; background: white !important; }`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(KEAK, K, E, A, K_, H, I, D, E_) {
                K.className += ' ' + E;
                H.start = 1 * new Date;
                H.end = I = function() {
                  K.className = K.className.replace(RegExp(' ?' + E), '');
                };
                (KEAK[A] = KEAK[A] || []).hide = H;
                setTimeout(function() {
                  I();
                  H.end = null;
                }, K_);
                H.timeout = K_;
              })(window, document.documentElement, 'async-hide', 'dataLayer', 800,
                { 'CONTAINER_ID': true });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
