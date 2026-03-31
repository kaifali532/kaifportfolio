export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Md Kaif. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm text-gray-500 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
