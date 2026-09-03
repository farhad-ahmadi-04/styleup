function Header() {
  return (
    <header className="border-b bg-white">
      <div className="lg:container m-auto flex items-center justify-between gap-6 px-4 py-4">
        <div className="shrink-0 text-2xl font-bold">StyleUp</div>

        <div className="flex min-w-0 items-center gap-4">
          <input
            type="search"
            placeholder="جستجو"
            aria-label="Search"
            className="hidden w-full max-w-xs rounded-md border px-3 py-2 outline-none focus:border-gray-500 sm:block"
          />
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 md:flex"
          >
            <a href="#shop" className="hover:text-gray-600">
              Shop
            </a>
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </nav>
          <button type="button" className="whitespace-nowrap font-medium">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
