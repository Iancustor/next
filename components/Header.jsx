export default function Header() {
  return (
    <nav className="bg-black border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            React App
          </span>
        </a>
        <ul>
          <li>
            <a href="/about" className="text-white">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
