import Links from "../components/motion/Links"
import ThemeToggle from "../components/useTheme"

function Footer() {
  return (
    <footer className="flex flex-col border-t border-black dark:border-gray-200 mt-auto">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 gap-6">
        
        {/* Social Links */}
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          {/* <h1 className="font-bold text-lg sm:text-xl">Social</h1> */}
          <div className="flex flex-col gap-1 text-base sm:text-lg">
            <Links>Instagram</Links>
            <Links>LinkedIn</Links>
            <Links>Github</Links>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <ThemeToggle />
        </div>

      </div>

      {/* Copyright */}
        <p className="text-center text-sm sm:text-base p-3 sm:p-4">
          © 2025 repsac
        </p>
      
    </footer>
  );
}

export default Footer;