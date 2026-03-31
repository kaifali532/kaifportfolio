/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { LeetCode } from "./components/LeetCode";
import { GitHub } from "./components/GitHub";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <GitHub />
      <Contact />
      <Footer />
    </main>
  );
}
