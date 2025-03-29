import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const CuteShit = () => {
  return (
    <section
      id="cuteshit"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll />
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Cute Shit
        </h2>
      </div>
    </section>
  );
};
