"use client";
import React, { useState } from "react";
import Image from "next/image";
import Counter from './Counter';
import PillNav from './PillNav';

export default function Home() {
  const [count, setCount] = useState(1);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="flex flex-col items-center justify-center w-full gap-2">
        <PillNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Leaderboard', href: './leaderboard' },
            { label: 'Log In', href: './login' },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
        <div className="flex items-center justify-center gap-4 w-full">
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <Counter
            value={count}
            places={[100, 10, 1]}
            fontSize={80}
            padding={5}
            gap={10}
            textColor="white"
            fontWeight={900}
          />
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button className="bg-sky-500 hover:bg-sky-700 rounded-full w-25 h-9 flex items-center justify-center">
          Add Hours
        </button>
                <div class="col-span-full">
          <label for="about" class="block text-sm/6 font-medium text-white">Activity</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></textarea>
          </div>
          <p class="mt-3 text-sm/6 text-gray-400">What have you been working on today?</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}
