import QRCode from "qrcode";// import React, { useState } from "react";
import React, { useState, useEffect, useRef } from "react";

// All-in-One Tools
// Single-file React component styled with Tailwind CSS
// - Mobile-first, responsive
// - Focused tool view
// Note: paste this into a React project with Tailwind configured.

export default function AllInOneTools() {
  const tools = [
    { id: "stopwatch", name: "Stopwatch", emoji: "🕒" },
    { id: "calculator", name: "Calculator", emoji: "🧮" },
    { id: "counter", name: "Counter", emoji: "🔢" },
    { id: "timer", name: "Timer", emoji: "⏲" },
    { id: "notepad", name: "Notepad", emoji: "📝" },
    { id: "converter", name: "Unit Converter", emoji: "🔁" },
    { id: "flashlight", name: "Flashlight", emoji: "💡" },
    { id: "worldclock", name: "World Clock", emoji: "🌍" },
    { id: "calendar", name: "Calendar Viewer", emoji: "📅" },
    { id: "clipboard", name: "Clipboard Manager", emoji: "📋" },
    { id: "passwordgen", name: "Password Generator", emoji: "🔐" },
    { id: "qrcode", name: "QR Code Scanner (simulate)", emoji: "🔍" },
    { id: "todo", name: "To-Do List Manager", emoji: "📦" },
    { id: "compass", name: "Compass (simulated)", emoji: "🧭" },
    { id: "weather", name: "Weather (dummy UI)", emoji: "🌡" },
    { id: "filesize", name: "File Size Converter", emoji: "📁" },
    { id: "colorpicker", name: "Color Picker", emoji: "🎨" },
    { id: "voicerecorder", name: "Voice Recorder (UI only)", emoji: "🎙" },
    { id: "typing", name: "Typing Speed Test", emoji: "⌨️" },
    { id: "grammar", name: "Grammar Checker", emoji: "📝" },
    { id: "agecalc", name: "Age Calculator", emoji: "🎂" },
    { id: "quiz", name: "Quiz Maker", emoji: "📝" },
    { id: "distance", name: "Distance Calculator", emoji: "📏" },
    { id: "currency", name: "Currency Converter", emoji: "💱" },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300">
      <div className="max-w-xl mx-auto p-4">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between py-6 px-4 sm:px-6 gap-4 sm:gap-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md rounded-2xl text-white">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="text-4xl animate-bounce">🔧</div>
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-xl font-bold leading-none">
                All-in-One Tools
              </h1>
              <p className="text-sm text-white/80 sm:text-white/70">
                Handy utilities — compact & mobile-first
              </p>
            </div>
          </div>
          <div className="w-20 h-20 bg-gray-800  sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-white/30">
            <img
              className="w-full h-full object-cover"
              src="images/logo.png"
              alt="Logo"
            />
          </div>
        </header>

        {/* Tools grid */}
        <main className="mt-6">
          {/* Show tools only when no active tool is selected */}
          {!active && (
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-3">
              {tools.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className="group bg-white p-3 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-150 border border-transparent hover:border-gray-200"
                  title={t.name}
                >
                  <div className="text-2xl">{t.emoji}</div>
                  <div className="text-xs text-gray-600">{t.name}</div>
                </button>
              ))}
            </div>
          )}

          {/* Active Tool Panel */}
          {active && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{tools.find((x) => x.id === active)?.emoji}</div>
                <h2 className="text-xl font-semibold">
                  {tools.find((x) => x.id === active)?.name}
                </h2>
              </div>
              <div className="w-full">
                {/* Tool Component Placeholder */}
                {active === "stopwatch" && <Stopwatch />}
                {active === "calculator" && <Calculator />}
                {active === "counter" && <Counter />}
                {active === "timer" && <TimerTool />}
                {active === "notepad" && <Notepad />}
                {active === "converter" && <Converter />}
                {active === "flashlight" && <Flashlight />}
                {active === "worldclock" && <WorldClock />}
                {active === "calendar" && <Calendar />}
                {active === "clipboard" && <Clipboard />}
                {active === "passwordgen" && <PasswordGenerator />}
                {active === "qrcode" && <QRCodeScanner />}
                {active === "todo" && <TodoList />}
                {active === "compass" && <Compass />}
                {active === "weather" && <Weather />}
                {active === "filesize" && <FileSizeConverter />}
                {active === "colorpicker" && <ColorPicker />}
                {active === "voicerecorder" && <VoiceRecorder />}
                {active === "typing" && <TypingSpeedTest />}
                {active === "grammar" && <GrammarChecker />}
                {active === "agecalc" && <AgeCalculator />}
                {active === "quiz" && <QuizMaker />}
                {active === "distance" && <DistanceCalculator />}
                {active === "currency" && <CurrencyConverter />}
              </div>
              <button
                onClick={() => setActive(null)}
                className="mt-4 px-6 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition"
              >
                Close Tool
              </button>
            </div>
          )}

          {!active && (
            <div className="mt-6 text-center text-sm text-gray-500">
              Select a tool to open it
            </div>
          )}
        </main>

        <footer className="mt-6 text-center text-xs text-gray-400">
          © 2025 Usman Ali. Built with ReactJS & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

/* ------------------------- Tools implementations ------------------------- */

function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [ms, setMs] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (running) {
      ref.current = setInterval(() => setMs((m) => m + 100), 100);
    } else if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running]);

  const reset = () => {
    setMs(0);
    setRunning(false);
  };

  const format = (m) => {
    const s = Math.floor(m / 1000);
    const mm = Math.floor(s / 60);
    const ss = s % 60;
    const cs = Math.floor((m % 1000) / 100);
    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(
      2,
      "0"
    )}.${cs}`;
  };

  return (
    <div className="max-w-xs mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white">
      {/* Display */}
      <div className="text-center text-5xl font-mono font-bold py-6 drop-shadow-lg">
        {format(ms)}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setRunning((r) => !r)}
          className={`px-6 py-3 rounded-xl text-lg font-semibold shadow-md transform hover:scale-105 transition ${
            running
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-200 shadow-md transform hover:scale-105 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function Calculator() {
  const [expr, setExpr] = useState("");

  const append = (v) => setExpr((e) => e + v);
  const clear = () => setExpr("");
  const back = () => setExpr((e) => e.slice(0, -1));
  const evalExpr = () => {
    try {
      if (!/^[0-9+\-*/(). %]+$/.test(expr)) throw new Error("Invalid chars");
      // eslint-disable-next-line no-new-func
      const r = Function(`"use strict"; return (${expr})`)();
      setExpr(String(r));
    } catch {
      setExpr("Error");
    }
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "%", "+"],
  ];

  return (
    <div className="max-w-xs mx-auto p-4">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-4 text-2xl font-mono text-right shadow-lg">
        {expr || "0"}
      </div>

      <div className="grid grid-cols-4 gap-3 mt-5">
        <button
          onClick={clear}
          className="py-3 rounded-2xl bg-red-500 text-white font-semibold shadow-md hover:scale-105 transition"
        >
          C
        </button>
        <button
          onClick={back}
          className="py-3 rounded-2xl bg-yellow-400 text-white font-semibold shadow-md hover:scale-105 transition"
        >
          ⌫
        </button>
        <button
          onClick={() => append("(")}
          className="py-3 rounded-2xl bg-gray-300 dark:bg-gray-700 font-semibold shadow-md hover:scale-105 transition"
        >
          (
        </button>
        <button
          onClick={() => append(")")}
          className="py-3 rounded-2xl bg-gray-300 dark:bg-gray-700 font-semibold shadow-md hover:scale-105 transition"
        >
          )
        </button>

        {buttons.flat().map((b) => (
          <button
            key={b}
            onClick={() => append(b)}
            className={`py-4 rounded-2xl font-semibold shadow-md hover:scale-105 transition
              ${
                ["+", "-", "*", "/"].includes(b)
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              }`}
          >
            {b}
          </button>
        ))}

        <button
          onClick={evalExpr}
          className="col-span-4 py-4 rounded-2xl bg-green-500 text-white font-bold text-xl shadow-lg hover:scale-105 transition"
        >
          =
        </button>
      </div>
    </div>
  );
}

function Counter() {
  const [n, setN] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6 p-6 rounded-2xl shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Display */}
      <div className="text-6xl font-extrabold drop-shadow-lg">{n}</div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setN(n + 1)}
          className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-lg font-semibold shadow-md transform hover:scale-105 transition"
        >
          +1
        </button>
        <button
          onClick={() => setN(n - 1)}
          className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-lg font-semibold text-gray-900 shadow-md transform hover:scale-105 transition"
        >
          -1
        </button>
        <button
          onClick={() => setN(0)}
          className="px-6 py-3 rounded-xl bg-white text-gray-900 hover:bg-gray-200 text-lg font-semibold shadow-md transform hover:scale-105 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
function TimerTool() {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (running && seconds > 0) {
      ref.current = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running, seconds]);

  const format = (s) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="max-w-xs mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Display */}
      <div className="text-center text-5xl font-mono font-bold py-6 drop-shadow-lg">
        {format(seconds)}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setRunning((r) => !r)}
          className={`px-6 py-3 rounded-xl text-lg font-semibold shadow-md transform hover:scale-105 transition ${
            running
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setSeconds(60);
            setRunning(false);
          }}
          className="px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-200 shadow-md transform hover:scale-105 transition"
        >
          Reset
        </button>
      </div>

      {/* Tip */}
      <div className="mt-4 text-sm text-center text-gray-200 opacity-80">
        Tip: Change the seconds below to set a custom timer length.
      </div>

      {/* Input */}
      <div className="mt-3">
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          className="w-full p-3 rounded-xl bg-white text-gray-900 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
    </div>
  );
}

function Notepad() {
  const [text, setText] = useState(() => {
    try {
      return localStorage.getItem("aio-notes") || "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("aio-notes", text);
    } catch {}
  }, [text]);

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
      {/* Title */}
      <h2 className="text-xl font-bold mb-3">📝 Notepad</h2>

      {/* Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        className="w-full p-4 rounded-xl bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 font-mono shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        placeholder="Write your notes here..."
      />

      {/* Info */}
      <div className="mt-3 text-sm text-gray-200 opacity-80">
        💾 Autosaves to your browser storage.
      </div>
    </div>
  );
}function Converter() {
  const [val, setVal] = React.useState("1");
  const [type, setType] = React.useState("m-ft");

  const n = parseFloat(val) || 0;
  const result = (() => {
    if (type === "m-ft") return `${(n * 3.28084).toFixed(4)} ft`;
    if (type === "ft-m") return `${(n / 3.28084).toFixed(4)} m`;
    if (type === "c-f") return `${((n * 9) / 5 + 32).toFixed(2)} °F`;
    if (type === "f-c") return `${(((n - 32) * 5) / 9).toFixed(2)} °C`;
    return "";
  })();

  return (
    <div className="w-full p-4">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md text-white mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          🔄 Unit Converter
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Enter value..."
            className="flex-1 p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition w-full"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full sm:w-auto"
          >
            <option value="m-ft">Meters → Feet</option>
            <option value="ft-m">Feet → Meters</option>
            <option value="c-f">Celsius → Fahrenheit</option>
            <option value="f-c">Fahrenheit → Celsius</option>
          </select>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 shadow-inner text-lg sm:text-xl font-semibold text-center">
          Result: <span className="text-pink-600 dark:text-pink-400">{result}</span>
        </div>
      </div>
    </div>
  );
}


function Flashlight() {
  const [on, setOn] = useState(false);

  return (
    <div className="text-center">
      {/* Icon + Description */}
      <div className="text-7xl mb-2">{on ? "🔦" : "💡"}</div>
      <p className="text-gray-600 dark:text-gray-300">
        Simulated flashlight — tap the button to toggle light.
      </p>

      {/* Toggle Button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setOn((o) => !o)}
          className={`px-6 py-3 rounded-2xl text-lg font-semibold transition-all shadow-lg ${
            on
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
          }`}
        >
          {on ? "Turn Off" : "Turn On"}
        </button>
      </div>

      {/* Flashlight Overlay */}
      {on && (
        <div
          onClick={() => setOn(false)}
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer bg-gradient-to-b from-yellow-200/80 via-white/95 to-yellow-100/90 backdrop-blur-sm transition-opacity"
        >
          <div className="text-black text-center animate-pulse">
            <div className="text-8xl drop-shadow-lg">🔦</div>
            <p className="mt-3 text-lg font-medium">Tap anywhere to dismiss</p>
          </div>
        </div>
      )}
    </div>
  );
}
function WorldClock() {
  const cities = [
    { id: "karachi", label: "Karachi", tz: "Asia/Karachi", flag: "🇵🇰" },
    { id: "newyork", label: "New York", tz: "America/New_York", flag: "🇺🇸" },
    { id: "london", label: "London", tz: "Europe/London", flag: "🇬🇧" },
    { id: "tokyo", label: "Tokyo", tz: "Asia/Tokyo", flag: "🇯🇵" },
  ];

  const [, tick] = useState(0);
  useEffect(() => {
    const ix = setInterval(() => tick((t) => t + 1), 1000);
    return () => clearInterval(ix);
  }, []);

  return (
    <div className="grid gap-4">
      {cities.map((c) => (
        <div
          key={c.id}
          className="flex items-center justify-between p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:scale-[1.02] transition-all"
        >
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">{c.flag}</span>
            <div>
              <div className="text-lg font-semibold">{c.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {new Intl.DateTimeFormat([], {
                  timeZone: c.tz,
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                }).format(new Date())}
              </div>
            </div>
          </div>

          {/* Right Section (Date) */}
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            {new Intl.DateTimeFormat([], {
              timeZone: c.tz,
              weekday: "short",
              month: "short",
              day: "numeric",
            }).format(new Date())}
          </div>
        </div>
      ))}
    </div>
  );
}
function Calendar() {
  const [date, setDate] = useState(new Date());

  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const today = new Date();

  const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
  const firstDay = new Date(year, date.getMonth(), 1).getDay();

  const prevMonth = () => setDate(new Date(year, date.getMonth() - 1, 1));
  const nextMonth = () => setDate(new Date(year, date.getMonth() + 1, 1));

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-center">📅 Calendar Viewer</h2>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="px-3 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition"
        >
          ◀
        </button>
        <div className="text-lg font-semibold">
          {month} {year}
        </div>
        <button
          onClick={nextMonth}
          className="px-3 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition"
        >
          ▶
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-semibold mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {Array(firstDay)
          .fill(null)
          .map((_, i) => (
            <div key={"empty" + i}></div>
          ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isToday =
            today.getDate() === day &&
            today.getMonth() === date.getMonth() &&
            today.getFullYear() === date.getFullYear();

          return (
            <div
              key={day}
              className={`p-2 rounded-lg cursor-pointer transition ${
                isToday
                  ? "bg-pink-600 text-white font-bold shadow-md"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
function Clipboard() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("clipboard-history")) || [];
    } catch {
      return [];
    }
  });

  // Save history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("clipboard-history", JSON.stringify(history));
    } catch {}
  }, [history]);

  const copyToClipboard = () => {
    if (!text.trim()) return;
    navigator.clipboard.writeText(text);
    setHistory([text, ...history.slice(0, 9)]); // keep only 10 items
    setText("");
  };

  const pasteFromClipboard = async () => {
    try {
      const clip = await navigator.clipboard.readText();
      setText(clip);
    } catch (e) {
      alert("Clipboard access denied.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-center">
        📋 Clipboard Manager
      </h2>

      {/* Input box */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="Type or paste something here..."
        className="w-full p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />

      {/* Buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition"
        >
          Copy
        </button>
        <button
          onClick={pasteFromClipboard}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md transition"
        >
          Paste
        </button>
      </div>

      {/* History */}
      <div className="mt-5">
        <h3 className="font-semibold mb-2">Recent Copies:</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {history.length === 0 && (
            <div className="text-sm text-white/80">No history yet.</div>
          )}
          {history.map((item, i) => (
            <div
              key={i}
              onClick={() => navigator.clipboard.writeText(item)}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 cursor-pointer text-sm truncate"
              title="Click to copy"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_-+=<>?{}[]|~";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-center">
        🔐 Password Generator
      </h2>

      {/* Controls */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label>Password Length:</label>
          <input
            type="number"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-20 p-2 rounded-lg text-gray-900 font-semibold shadow-inner"
          />
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers (0-9)
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols (!@#$%)
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5 justify-center">
        <button
          onClick={generatePassword}
          className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition"
        >
          Generate
        </button>
        <button
          onClick={copyPassword}
          disabled={!password}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white font-semibold shadow-md transition"
        >
          Copy
        </button>
      </div>

      {/* Result */}
      {password && (
        <div className="mt-5 p-4 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 shadow-inner text-lg font-semibold text-center">
          {password}
        </div>
      )}
    </div>
  );
}
function QRCodeScanner() {
  const [text, setText] = useState("https://example.com");

 const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text || " ")}`;

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-center">
        🔍 QR Code Generator
      </h2>

      {/* Input */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL..."
        className="w-full p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />

      {/* QR Preview */}
      <div className="flex justify-center mt-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <img src={qrUrl} alt="QR Code" className="w-44 h-44" />
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 text-sm text-center text-gray-200">
        Generated live from your input 👆
      </div>
    </div>
  );
}function TodoList() {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h2 className="text-xl font-bold mb-4 text-center">📦 To-Do List Manager</h2>

      <div className="flex gap-2">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow transition"
        >
          Add
        </button>
      </div>

      <ul className="mt-5 space-y-3">
        {tasks.length === 0 && (
          <li className="text-center text-gray-200">No tasks yet 👀</li>
        )}
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 shadow-md"
          >
            <span
              onClick={() => toggleTask(t.id)}
              className={`flex-1 cursor-pointer ${t.done ? "line-through text-gray-400" : ""}`}
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(t.id)}
              className="ml-3 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


function Compass() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleOrientation = (event) => {
      // "alpha" gives compass heading in degrees if supported
      if (event.alpha !== null) {
        setAngle(event.alpha);
      }
    };
    window.addEventListener("deviceorientation", handleOrientation, true);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  return (
    <div className="max-w-sm mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
      <h2 className="text-xl font-bold mb-6">🧭 Compass</h2>

      {/* Compass Circle */}
      <div className="relative w-48 h-48 mx-auto rounded-full border-8 border-white shadow-xl flex items-center justify-center bg-gray-900">
        {/* Needle */}
        <div
          className="absolute w-1 h-20 bg-red-500 origin-bottom"
          style={{ transform: `rotate(${angle}deg)` }}
        />
        <div className="absolute -top-6 text-sm">N</div>
        <div className="absolute -bottom-6 text-sm">S</div>
        <div className="absolute -left-6 text-sm">W</div>
        <div className="absolute -right-6 text-sm">E</div>
      </div>

      {/* Angle Display */}
      <p className="mt-6 text-lg font-semibold">
        Heading: <span className="text-yellow-300">{Math.round(angle)}°</span>
      </p>
      <p className="text-sm text-gray-200 mt-1">
        (Uses device orientation if supported)
      </p>
    </div>
  );
}
function Weather() {
  const [temp, setTemp] = useState(25); // dummy temperature
  const [condition, setCondition] = useState("Sunny"); // dummy condition
  const [unit, setUnit] = useState("C");

  const iconMap = {
    Sunny: "☀️",
    Rainy: "🌧️",
    Cloudy: "☁️",
    Snow: "❄️",
    Storm: "⛈️",
  };

  const toggleUnit = () => {
    if (unit === "C") {
      setTemp(Math.round((temp * 9) / 5 + 32));
      setUnit("F");
    } else {
      setTemp(Math.round(((temp - 32) * 5) / 9));
      setUnit("C");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white text-center">
      <h2 className="text-xl font-bold mb-4">🌡 Weather</h2>

      <div className="text-6xl mb-2">{iconMap[condition]}</div>
      <div className="text-4xl font-bold mb-2">
        {temp}°{unit}
      </div>
      <div className="text-lg mb-4">{condition}</div>

      {/* Buttons to simulate changes */}
      <div className="flex justify-center gap-3 flex-wrap">
        {Object.keys(iconMap).map((c) => (
          <button
            key={c}
            onClick={() => setCondition(c)}
            className="px-3 py-2 rounded-lg bg-white/30 hover:bg-white/50 transition"
          >
            {c}
          </button>
        ))}
      </div>

      <button
        onClick={toggleUnit}
        className="mt-4 px-4 py-2 rounded-lg bg-white/30 hover:bg-white/50 transition font-semibold"
      >
        Toggle °C/°F
      </button>
    </div>
  );
}function FileSizeConverter() {
  const [value, setValue] = useState("1024");
  const [unitFrom, setUnitFrom] = useState("B");
  const [unitTo, setUnitTo] = useState("KB");

  const units = ["B", "KB", "MB", "GB"];

  const calculate = () => {
    let bytes = parseFloat(value) || 0;
    if (unitFrom === "KB") bytes *= 1024;
    if (unitFrom === "MB") bytes *= 1024 ** 2;
    if (unitFrom === "GB") bytes *= 1024 ** 3;
    let result = bytes;
    if (unitTo === "KB") result /= 1024;
    if (unitTo === "MB") result /= 1024 ** 2;
    if (unitTo === "GB") result /= 1024 ** 3;
    return result.toFixed(4);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          📁 File Size Converter
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 mb-4">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-white transition w-full"
            placeholder="Enter value..."
          />
          <select
            value={unitFrom}
            onChange={(e) => setUnitFrom(e.target.value)}
            className="p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-white transition w-full sm:w-auto"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
          <select
            value={unitTo}
            onChange={(e) => setUnitTo(e.target.value)}
            className="p-3 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-white transition w-full sm:w-auto"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 rounded-xl bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 shadow-inner text-lg sm:text-xl font-semibold text-center">
          Result:{" "}
          <span className="text-green-600 dark:text-green-400">{calculate()}</span>{" "}
          {unitTo}
        </div>
      </div>
    </div>
  );
}

function ColorPicker() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
      <h2 className="text-xl font-bold mb-4 text-center">🎨 Color Picker</h2>

      {/* Color input */}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full h-16 p-2 rounded-xl border-2 border-white shadow-inner cursor-pointer transition"
      />

      {/* Preview */}
      <div
        className="mt-6 w-full h-24 rounded-xl shadow-lg flex items-center justify-center font-mono text-lg"
        style={{ backgroundColor: color }}
      >
        <span className="text-white dark:text-gray-900">
          {color.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
function VoiceRecorder() {
  const [recording, setRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const timerRef = useRef(null);

  // Timer effect
  useEffect(() => {
    if (recording) {
      timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [recording]);

  const reset = () => setDuration(0);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h2 className="text-xl font-bold mb-4 text-center">🎙 Voice Recorder</h2>

      {/* Display */}
      <div className="text-center text-5xl font-mono font-bold py-6 drop-shadow-lg">
        {formatTime(duration)}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setRecording((r) => !r)}
          className={`px-6 py-3 rounded-xl text-lg font-semibold shadow-md transform hover:scale-105 transition ${
            recording
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {recording ? "Stop" : "Record"}
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold shadow-md transform hover:scale-105 transition"
        >
          Reset
        </button>
      </div>

      {/* Tip */}
      <div className="mt-4 text-sm text-center text-gray-200 opacity-80">
        UI only — actual audio recording requires MediaRecorder API integration.
      </div>
    </div>
  );
}
function TypingSpeedTest() {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const handleChange = (e) => {
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());
    setText(val);

    const words = val.trim().split(/\s+/).length;
    const minutes = (Date.now() - startTime) / 60000 || 1;
    setWpm(Math.round(words / minutes));
  };

  const reset = () => {
    setText("");
    setStartTime(null);
    setWpm(0);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <h2 className="text-xl font-bold mb-3 text-center">⌨️ Typing Speed Test</h2>
      <textarea
        value={text}
        onChange={handleChange}
        rows={6}
        className="w-full p-3 rounded-xl text-gray-900 font-mono focus:outline-none shadow-inner"
        placeholder="Start typing..."
      />
      <div className="mt-4 flex justify-between items-center">
        <span>WPM: <b>{wpm}</b></span>
        <button onClick={reset} className="px-4 py-2 bg-white text-gray-900 rounded-xl shadow hover:bg-gray-200 transition">Reset</button>
      </div>
    </div>
  );
}
function GrammarChecker() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
    setCharCount(text.length);
  }, [text]);

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 text-white">
      <h2 className="text-xl font-bold mb-3 text-center">📝 Grammar Checker</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        className="w-full p-3 rounded-xl text-gray-900 font-mono focus:outline-none shadow-inner"
        placeholder="Paste or type your text..."
      />
      <div className="mt-4 flex justify-between">
        <span>Words: <b>{wordCount}</b></span>
        <span>Characters: <b>{charCount}</b></span>
      </div>
    </div>
  );
}
function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const diff = Date.now() - birthDate.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(years);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white">
      <h2 className="text-xl font-bold mb-3 text-center">🎂 Age Calculator</h2>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="w-full p-3 rounded-xl text-gray-900 font-semibold shadow-inner focus:outline-none mb-4"
      />
      <button
        onClick={calculateAge}
        className="w-full py-3 rounded-xl bg-white text-gray-900 font-semibold shadow hover:bg-gray-200 transition"
      >
        Calculate Age
      </button>
      {age !== null && (
        <div className="mt-4 text-center text-lg">
          Your Age: <b>{age}</b> years
        </div>
      )}
    </div>
  );
}
function QuizMaker() {
  const [questions, setQuestions] = useState([
    {
      q: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
    },
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1,
    },
    {
      q: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      answer: 1,
    },
    {
      q: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: 2,
    },
    {
      q: "Which language is used for web apps?",
      options: ["Python", "HTML", "C++", "Java"],
      answer: 1,
    },
  ]);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowScore(true);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h2 className="text-xl font-bold mb-4 text-center">❓ Quiz Maker</h2>

      {!showScore ? (
        <div>
          <div className="mb-4 text-lg font-semibold">
            Q{current + 1}: {questions[current].q}
          </div>
          <div className="grid gap-3">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full py-3 bg-white text-gray-900 rounded-xl shadow hover:bg-gray-200 transition font-semibold"
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-200">
            Question {current + 1} of {questions.length}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-2xl font-bold mb-3">
            You scored {score} / {questions.length}
          </div>
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-white text-gray-900 rounded-xl shadow hover:bg-gray-200 transition font-semibold"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
function DistanceCalculator() {
  const [lat1, setLat1] = useState("");
  const [lon1, setLon1] = useState("");
  const [lat2, setLat2] = useState("");
  const [lon2, setLon2] = useState("");
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    const R = 6371; // Earth radius in km
    const toRad = (deg) => (deg * Math.PI) / 180;

    const φ1 = toRad(parseFloat(lat1));
    const φ2 = toRad(parseFloat(lat2));
    const Δφ = toRad(parseFloat(lat2) - parseFloat(lat1));
    const Δλ = toRad(parseFloat(lon2) - parseFloat(lon1));

    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    setDistance(R * c);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h2 className="text-xl font-bold mb-4 text-center">📏 Distance Calculator</h2>

      <div className="grid gap-3">
        <input
          type="number"
          placeholder="Latitude 1"
          value={lat1}
          onChange={(e) => setLat1(e.target.value)}
          className="p-3 rounded-xl text-gray-900 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="number"
          placeholder="Longitude 1"
          value={lon1}
          onChange={(e) => setLon1(e.target.value)}
          className="p-3 rounded-xl text-gray-900 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="number"
          placeholder="Latitude 2"
          value={lat2}
          onChange={(e) => setLat2(e.target.value)}
          className="p-3 rounded-xl text-gray-900 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="number"
          placeholder="Longitude 2"
          value={lon2}
          onChange={(e) => setLon2(e.target.value)}
          className="p-3 rounded-xl text-gray-900 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={calculateDistance}
          className="px-6 py-3 bg-white text-gray-900 rounded-xl shadow hover:bg-gray-200 transition font-semibold"
        >
          Calculate
        </button>
      </div>

      {distance !== null && (
        <div className="mt-4 text-center text-lg font-semibold">
          Distance: {distance.toFixed(2)} km
        </div>
      )}
    </div>
  );
}
function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");

  const rates = {
    USD: { USD: 1, PKR: 285, SAR: 3.75, EUR: 0.92, GBP: 0.81, INR: 83, AED: 3.67, CNY: 7.1, JPY: 150, AUD: 1.65, CAD: 1.35 },
    PKR: { USD: 0.0035, PKR: 1, SAR: 0.013, EUR: 0.0032, GBP: 0.0028, INR: 0.92, AED: 0.013, CNY: 0.025, JPY: 0.005, AUD: 0.0058, CAD: 0.0047 },
    SAR: { USD: 0.27, PKR: 77, SAR: 1, EUR: 0.25, GBP: 0.22, INR: 22, AED: 1, CNY: 1.89, JPY: 40, AUD: 0.44, CAD: 0.36 },
    EUR: { USD: 1.09, PKR: 310, SAR: 4.0, EUR: 1, GBP: 0.88, INR: 90, AED: 4.0, CNY: 7.75, JPY: 163, AUD: 1.78, CAD: 1.45 },
    GBP: { USD: 1.23, PKR: 352, SAR: 4.57, EUR: 1.14, GBP: 1, INR: 102, AED: 4.57, CNY: 8.84, JPY: 185, AUD: 2.0, CAD: 1.63 },
    INR: { USD: 0.012, PKR: 3.44, SAR: 0.045, EUR: 0.011, GBP: 0.0098, INR: 1, AED: 0.045, CNY: 0.086, JPY: 1.82, AUD: 0.019, CAD: 0.016 },
    AED: { USD: 0.27, PKR: 77, SAR: 0.27, EUR: 0.25, GBP: 0.22, INR: 22, AED: 1, CNY: 1.89, JPY: 40, AUD: 0.44, CAD: 0.36 },
    CNY: { USD: 0.14, PKR: 40, SAR: 0.53, EUR: 0.13, GBP: 0.11, INR: 11.6, AED: 0.53, CNY: 1, JPY: 21.0, AUD: 0.23, CAD: 0.19 },
    JPY: { USD: 0.0067, PKR: 2.0, SAR: 0.025, EUR: 0.0061, GBP: 0.0054, INR: 0.55, AED: 0.025, CNY: 0.048, JPY: 1, AUD: 0.011, CAD: 0.009 },
    AUD: { USD: 0.61, PKR: 174, SAR: 2.27, EUR: 0.56, GBP: 0.50, INR: 52, AED: 2.27, CNY: 4.35, JPY: 90, AUD: 1, CAD: 0.81 },
    CAD: { USD: 0.74, PKR: 210, SAR: 2.78, EUR: 0.69, GBP: 0.61, INR: 64, AED: 2.78, CNY: 5.2, JPY: 108, AUD: 1.23, CAD: 1 },
  };

  const result = (amount * (rates[from]?.[to] || 0)).toFixed(2);
  const currencies = Object.keys(rates);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">💱 Currency Converter</h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 mb-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="flex-1 p-3 rounded-xl text-gray-900 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            placeholder="Amount"
          />

          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-3 rounded-xl text-gray-900 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <span className="self-center text-lg font-bold text-center">→</span>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-3 rounded-xl text-gray-900 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="text-center text-lg sm:text-xl font-semibold bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-white p-4 rounded-xl shadow-inner">
          Result: {result} {to}
        </div>
      </div>
    </div>
  );
}

