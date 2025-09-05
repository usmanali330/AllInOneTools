import { useEffect, useState } from "react";

const Clock1 = ({ textColor = "#ffffff", bgColor = "rgba(255, 255, 255, 0.2)" }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 animate-gradient-x">
      <h1
        className="text-5xl font-extrabold text-center rounded-3xl shadow-2xl px-10 py-8 w-72 backdrop-blur-md border border-white/30 transform transition duration-500 hover:scale-105 hover:shadow-3xl"
        style={{
          color: textColor,
          background: `linear-gradient(135deg, ${bgColor}, rgba(197, 250, 5, 0.1))`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default Clock1;
