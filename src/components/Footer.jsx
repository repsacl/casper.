import Links from "../components/motion/Links"
import ThemeToggle from "../components/useTheme"

function Footer() {
  return (
    // bg-gray-900 text-white dark:bg-gray-200 dark:text-black">
    <footer className="p-3 flex justify-center flex-col border-t-1 border-solid  border-black dark:border-gray-200">

      <div className="mt-5 ml-2 flex flex-col justify-center text-xl font-bold w-fit">
          <Links>Instagram</Links>
          <Links>Linkedin</Links>
          <Links>Github</Links>
      </div>

      <div className="flex justify-center items-center">
      <ThemeToggle />
    </div>

      <p className="text-center" >© 2025 Casper. All rights reserved.</p>
    </footer>
  );
}

export default Footer;