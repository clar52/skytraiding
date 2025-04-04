import { useEffect, useRef } from "react";

export default function LiveData() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "NASDAQ:TSLA", title: "Tesla" },
      ],
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "fr",
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        const scriptElement = containerRef.current.querySelector("script");
        if (scriptElement) {
          containerRef.current.removeChild(scriptElement);
        }
      }
    };
  }, []);

  return (
    <section className="py-12 bg-blue-deep">
      <div className="container mx-auto px-4">
        <div className="tradingview-widget-container" ref={containerRef}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </section>
  );
}