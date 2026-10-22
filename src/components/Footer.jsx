import Links from "../components/motion/Links"

const label = "text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400";

function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 backdrop-blur-sm dark:border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 py-8 sm:grid-cols-2 sm:py-10">
          <div className="flex flex-col gap-3">
            <span className={label}>Links</span>
            <div className="flex flex-row items-center gap-6 text-base sm:text-lg">
              <Links to={"https://www.linkedin.com/in/casper-landberg-56371443b/"}>LinkedIn</Links>
              <Links to={"https://github.com/repsacl"}>Github</Links>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <span className={label}>Kontakt</span>
            <a href="mailto:" className="w-fit break-all py-1 text-base transition-opacity hover:opacity-70 sm:text-lg">
              caslandberg@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-black/10 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center text-xs text-gray-500 sm:text-left dark:border-white/10 dark:text-gray-400">
          &copy; 2026 Casper Landberg
        </div>
      </div>
    </footer>
  );
}

export default Footer;
