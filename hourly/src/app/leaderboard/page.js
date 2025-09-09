"use client";
import React, { useState } from "react";
import Link from "next/link";
import AnimatedList from '../list'

export default function leaderboard() {

      const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 
      
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <header>
                <Link href="./">
                    Home
                </Link>
            </header>
            <main>
                <AnimatedList
                    items={items}
                    onItemSelect={(item, index) => console.log(item, index)}
                    showGradients={true}
                    enableArrowNavigation={true}
                    displayScrollbar={true}
                />
            </main>
        </div>
    );
}