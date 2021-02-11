const Nav = ({ darkMode, handleDarkMode }) => (
  <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-white">First Link</a>
        <a className="mr-5 hover:text-white">Second Link</a>
        <a className="mr-5 hover:text-white">Third Link</a>
        <a className="mr-5 hover:text-white">Fourth Link</a>
      </nav>

      <button
        className="activeFocusElements buttonPadding"
        aria-label="Dark Mode"
        onClick={handleDarkMode}
      >
        <span class="material-icons md-48 text-lightShades-700 dark:text-lightAccents-500">
          {darkMode}
        </span>
      </button>
    </div>
  </header>
);

export default Nav;
