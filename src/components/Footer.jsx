import Links from "../components/motion/Links"

function Footer() {
  return (
    <footer className="mt-auto border-t border-black/80 backdrop-blur-sm dark:border-white/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:py-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Links
          </span>
          <div className="flex flex-col gap-2 text-base sm:flex-row sm:items-center sm:gap-5 sm:text-lg">
            <Links>LinkedIn</Links>
            <Links>Github</Links>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-4 pb-3 text-center text-[10px] font-light sm:text-[14px] mt-5">
          &copy; 2026 Casper Landberg
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Kontakt
          </span>
          <div className="flex flex-col gap-2 text-base sm:text-lg">
            <a href="mailto:" className="transition-opacity hover:opacity-70">
              caslandberg@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;