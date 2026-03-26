import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<SeemaDivan />";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1200);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">

      {/* Typing Text */}
      <div className="mb-8 text-4xl font-mono font-bold">
        {text}
        <span className="ml-1 animate-pulse">|</span>
      </div>

      {/* Loading Bar */}
      <div className="w-56 h-1 bg-gray-800 rounded overflow-hidden">
        <div className="h-full bg-blue-500 animate-pulse"></div>
      </div>

    </div>
  );
};