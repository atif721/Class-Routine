import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <footer className="mt-10 mb-6">
        <div className="mx-auto h-px w-full bg-gray-200 dark:bg-gray-700" />

        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built for CSE students — no more asking{" "}
            <span className="font-semibold text-blue-500">
              "ভাই ক্লাস কয়টায়?"
            </span>
          </p>

          <div className="flex flex-row items-center gap-4">
            <a
              href="https://github.com/atif721"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 text-sm text-gray-500 transition-colors dark:text-gray-400"
            >
              <FaGithub className="text-base" />
              atif721
            </a>

            <span className="text-gray-300 dark:text-gray-600">•</span>

            <a
              href="https://atif721.github.io/cover-page-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 text-sm text-gray-500 transition-colors dark:text-gray-400"
            >
              Cover Page Designer
              <HiOutlineExternalLink className="text-sm" />
            </a>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} VUCSE Routine · Made with 💙 and way
            too much caffeine
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
