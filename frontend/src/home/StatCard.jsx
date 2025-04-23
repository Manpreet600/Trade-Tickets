import React from "react";

const colorThemes = {
  blue: {
    background: "bg-[rgba(56,139,253,0.2)]",
    border: "border-blue-500 border-opacity-20",
    text: "text-blue-400",
  },
  green: {
    background: "bg-[rgba(46,160,67,0.2)]",
    border: "border-green-600 border-opacity-20",
    text: "text-green-600",
  },
  violet: {
    background: "bg-[rgba(163,113,247,0.2)]",
    border: "border-violet-400 border-opacity-20",
    text: "text-violet-400",
  },
  sky: {
    background: "bg-[rgba(121,192,255,0.2)]",
    border: "border-sky-300 border-opacity-20",
    text: "text-sky-300",
  },
};

const StatCard = ({ value, label, colorTheme = "blue", prefix = "" }) => {
  const theme = colorThemes[colorTheme] || colorThemes.blue;

  return (
    <article
      className={`p-6 rounded-xl border border-solid transition-all ${theme.background} ${theme.border} duration-[0.2s] ease-[ease]`}
    >
      <div className={`mb-2 text-4xl font-semibold ${theme.text}`}>
        {prefix && <span>{prefix}</span>}
        <span>{value}</span>
      </div>
      <div className="text-sm font-medium text-zinc-400">{label}</div>
    </article>
  );
};

export default StatCard;
