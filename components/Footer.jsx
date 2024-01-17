export default function Footer() {
  return (
    <>
      <footer className="bg-gray-950 rounded-lg shadow m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-50 sm:text-center ">
            Custor @{" "}
            <a href="" className="hover:underline">
              Next App™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
