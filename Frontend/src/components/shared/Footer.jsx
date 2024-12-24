// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-12">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {/* Left Section: Brand and Copyright */}
//           <div className="mb-6 md:mb-0 text-center md:text-left">
//             <h2 className="text-3xl font-bold text-indigo-500 mb-2">
//               Job Hunt
//             </h2>
//             <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
//           </div>

//           {/* Right Section: Social Media Links */}
//           <div className="flex space-x-6 mt-6 md:mt-0 justify-center md:justify-end">
//             <a
//               href="https://facebook.com"
//               className="transition transform hover:scale-110 hover:text-blue-600"
//               aria-label="facebook"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {/* Facebook Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-8 h-8"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.407.593 24 1.324 24h11.235v-9.294H9.785v-3.622h2.774V9.41c0-2.76 1.635-4.354 4.184-4.354 1.214 0 2.472.228 2.472.228v2.738h-1.474c-1.457 0-1.915.906-1.915 1.837v2.428h3.239l-.517 3.622h-2.722V24h5.347c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
//               </svg>
//             </a>

//             <a
//               href="https://twitter.com"
//               className="transition transform hover:scale-110 hover:text-blue-400"
//               aria-label="twitter"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {/* Twitter Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-8 h-8"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.606 1.79-1.566 2.163-2.725-.949.563-2.002.974-3.127 1.178-.896-.953-2.175-1.544-3.593-1.544-2.719 0-4.922 2.243-4.922 5.006 0 .392.044.77.128 1.132-4.092-.205-7.712-2.16-10.14-5.144-.424.725-.664 1.565-.664 2.464 0 1.698.877 3.194 2.213 4.048-.815-.026-1.585-.249-2.26-.621.057 2.372 1.698 4.327 3.988 4.791-1.254.354-2.536.427-3.745.167 1.054 3.288 4.126 5.692 7.749 5.756-2.863 2.246-6.49 3.596-10.39 3.596-.677 0-1.346-.039-2.006-.112 3.719 2.383 8.124 3.774 12.684 3.774 15.247 0 23.672-12.657 23.672-23.672 0-.36-.008-.72-.024-1.078.991-.712 1.85-1.594 2.522-2.594z" />
//               </svg>
//             </a>

//             <a
//               href="https://linkedin.com"
//               className="transition transform hover:scale-110 hover:text-blue-700"
//               aria-label="linkedin"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {/* LinkedIn Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-8 h-8"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.3 20.45H3.9v-11.5h3.4v11.5zm-1.7-13.4c-1.1 0-1.8-.7-1.8-1.7s.7-1.7 1.8-1.7c1 0 1.8.7 1.8 1.7s-.8 1.7-1.8 1.7zm14.4 13.4h-3.4v-5.7c0-1.4-.5-2.4-1.8-2.4-1.1 0-1.8.8-1.8 2.4v5.7h-3.4v-11.5h3.4v1.6h.1c.5-.9 1.7-1.7 3.3-1.7 2.4 0 4.4 1.6 4.4 5.1v6.5z" />
//               </svg>
//             </a>

//             <a
//               href="https://github.com"
//               className="transition transform hover:scale-110 hover:text-gray-600"
//               aria-label="github"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {/* GitHub Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-8 h-8"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.207 11.388.6.111.825-.26.825-.577v-2.173c-3.338.727-4.032-1.495-4.032-1.495-.548-1.392-1.34-1.768-1.34-1.768-1.095-.748.082-.734.082-.734 1.213.085 1.854 1.245 1.854 1.245 1.078 1.857 2.826 1.32 3.515 1.009.109-.779.422-1.32.77-1.627-2.665-.303-5.467-1.332-5.467-5.932 0-1.312.468-2.381 1.238-3.221-.124-.302-.536-.883-.098-1.76 0 0 1.003-.31 3.28 1.193 1.42-.395 2.944-.591 4.452-.591 1.516 0 3.032.196 4.452.591 2.278-1.493 3.28-1.193 3.28-1.193.439.877.026 1.457-.098 1.76.77.84 1.238 1.91 1.238 3.221 0 4.6-2.805 5.627-5.476 5.924.43.37.821 1.103.821 2.223v3.293c0 .317.225.689.825.577C20.562 21.8 24 17.303 24 12c0-6.63-5.37-12-12-12z" />
//               </svg>
//             </a>

//             <a
//               href="https://instagram.com"
//               className="transition transform hover:scale-110 hover:text-pink-600"
//               aria-label="instagram"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {/* Instagram Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-8 h-8"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm0 2c-5.527 0-10 4.473-10 10s4.473 10 10 10 10-4.473 10-10-4.473-10-10-10zm0 3c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 6c-2.211 0-4 1.789-4 4s1.789 4 4 4 4-1.789 4-4-1.789-4-4-4z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-blue-700 to-teal-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Brand and Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-extrabold text-white tracking-wide mb-2">
              Job Hunt
            </h2>
            <p className="text-sm text-gray-200">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex space-x-6 mt-6 md:mt-0 justify-center md:justify-end">
            <a
              href="https://facebook.com"
              className="text-gray-200 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
              aria-label="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Facebook Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.407.593 24 1.324 24h11.235v-9.294H9.785v-3.622h2.774V9.41c0-2.76 1.635-4.354 4.184-4.354 1.214 0 2.472.228 2.472.228v2.738h-1.474c-1.457 0-1.915.906-1.915 1.837v2.428h3.239l-.517 3.622h-2.722V24h5.347c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              className="text-gray-200 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
              aria-label="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Twitter Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.606 1.79-1.566 2.163-2.725-.949.563-2.002.974-3.127 1.178-.896-.953-2.175-1.544-3.593-1.544-2.719 0-4.922 2.243-4.922 5.006 0 .392.044.77.128 1.132-4.092-.205-7.712-2.16-10.14-5.144-.424.725-.664 1.565-.664 2.464 0 1.698.877 3.194 2.213 4.048-.815-.026-1.585-.249-2.26-.621.057 2.372 1.698 4.327 3.988 4.791-1.254.354-2.536.427-3.745.167 1.054 3.288 4.126 5.692 7.749 5.756-2.863 2.246-6.49 3.596-10.39 3.596-.677 0-1.346-.039-2.006-.112 3.719 2.383 8.124 3.774 12.684 3.774 15.247 0 23.672-12.657 23.672-23.672 0-.36-.008-.72-.024-1.078.991-.712 1.85-1.594 2.522-2.594z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="text-gray-200 hover:text-teal-500 transition-all duration-300 transform hover:scale-110"
              aria-label="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.3 20.45H3.9v-11.5h3.4v11.5zm-1.7-13.4c-1.1 0-1.8-.7-1.8-1.7s.7-1.7 1.8-1.7c1 0 1.8.7 1.8 1.7s-.8 1.7-1.8 1.7zm14.4 13.4h-3.4v-5.7c0-1.4-.5-2.4-1.8-2.4-1.1 0-1.8.8-1.8 2.4v5.7h-3.4v-11.5h3.4v1.6h.1c.5-.9 1.7-1.7 3.3-1.7 2.4 0 4.4 1.6 4.4 5.1v6.5z" />
              </svg>
            </a>

            <a
              href="https://github.com"
              className="text-gray-200 hover:text-gray-700 transition-all duration-300 transform hover:scale-110"
              aria-label="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.207 11.388.6.111.825-.26.825-.577v-2.173c-3.338.727-4.032-1.495-4.032-1.495-.548-1.392-1.34-1.768-1.34-1.768-1.095-.748.082-.734.082-.734 1.213.085 1.854 1.245 1.854 1.245 1.078 1.857 2.826 1.32 3.515 1.009.109-.779.422-1.32.77-1.627-2.665-.303-5.467-1.332-5.467-5.932 0-1.312.468-2.381 1.238-3.221-.124-.302-.536-.883-.098-1.76 0 0 1.003-.31 3.28 1.193 1.42-.395 2.944-.591 4.452-.591 1.516 0 3.032.196 4.452.591 2.278-1.493 3.28-1.193 3.28-1.193.439.877.026 1.457-.098 1.76.77.84 1.238 1.91 1.238 3.221 0 4.6-2.805 5.627-5.476 5.924.43.37.821 1.103.821 2.223v3.293c0 .317.225.689.825.577C20.562 21.8 24 17.303 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
