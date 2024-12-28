import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold tracking-wide text-white">
              Personal Signature Job Hunt
            </h2>
            <p className="mt-2 text-sm">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-end">
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg
                className="w-8 h-8 fill-current text-white hover:text-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
              </svg>
            </a>

            {/* Twitter Icon */}
            <a
              href="https://twitter.com"
              className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-400"
              aria-label="Twitter"
            >
              <svg
                className="w-8 h-8 fill-current text-white hover:text-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <svg
                className="w-8 h-8 fill-current text-white hover:text-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com"
              className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-400"
              aria-label="GitHub"
            >
              <svg
                className="w-8 h-8 fill-current text-white hover:text-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.801 8.207 11.387.6.111.793-.261.793-.582 0-.287-.01-1.047-.015-2.052-3.338.727-4.036-1.607-4.036-1.607-.544-1.378-1.332-1.745-1.332-1.745-1.089-.743.083-.728.083-.728 1.204.085 1.838 1.232 1.838 1.232 1.07 1.834 2.808 1.303 3.495.996.107-.774.418-1.303.762-1.603-2.664-.303-5.467-1.334-5.467-5.935 0-1.313.469-2.392 1.238-3.23-.125-.303-.537-.815-.12-1.663 0 0 1.008-.323 3.304 1.256 1.547-.43 3.159-.43 4.704 0 2.297-1.58 3.304-1.256 3.304-1.256-.417.848-.005 1.36-.12 1.663.769.838 1.238 1.918 1.238 3.23 0 4.607-2.805 5.63-5.469 5.933.428.364.802 1.098.802 2.212 0 1.599-.014 2.89-.014 3.28 0 .322.189.697.798.582C20.563 21.801 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-400"
              aria-label="Instagram"
            >
              <svg
                className="w-8 h-8 fill-current text-white hover:text-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.146 0 3.536.012 4.788.07 1.207.057 2.26.22 3.064.465a5.704 5.704 0 0 1 2.08 1.434c.868.868 1.408 1.97 1.434 3.064.058 1.252.07 1.642.07 4.788 0 3.146-.012 3.536-.07 4.788-.057 1.207-.22 2.26-.465 3.064a5.704 5.704 0 0 1-1.434 2.08c-.868.868-1.97 1.408-3.064 1.434-1.252.058-1.642.07-4.788.07-3.146 0-3.536-.012-4.788-.07-1.207-.057-2.26-.22-3.064-.465a5.704 5.704 0 0 1-2.08-1.434c-.868-.868-1.408-1.97-1.434-3.064-.058-1.252-.07-1.642-.07-4.788 0-3.146.012-3.536.07-4.788.057-1.207.22-2.26.465-3.064a5.704 5.704 0 0 1 1.434-2.08c.868-.868 1.97-1.408 3.064-1.434 1.252-.058 1.642-.07 4.788-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.33a4.168 4.168 0 1 1 0-8.336 4.168 4.168 0 0 1 0 8.336zm6.426-10.267a.901.901 0 1 0 0 1.803.901.901 0 0 0 0-1.803z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Done styles
