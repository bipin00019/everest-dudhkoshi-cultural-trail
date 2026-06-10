

// import React, { useState, useEffect } from 'react';
// import { Menu, X, Facebook } from 'lucide-react';
// import { useNavigate } from "react-router-dom";
// import { PATHS } from "../constants/Paths";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     setIsOpen(false); // Close mobile menu after navigation
//   };

//   // Detect scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // WhatsApp icon component
//   const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
//     <svg 
//       className={className}
//       viewBox="0 0 24 24" 
//       fill="currentColor"
//     >
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
//     </svg>
//   );

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-18 lg:h-24">
//           {/* Logo/Brand */}
//           <div className="flex-shrink-0 flex-1 text-center lg:text-left lg:flex-initial">
//             <button onClick={() => handleNavigation('/')}>
//               <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
//                 scrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
//               }`}>
//                 <span className="hidden sm:inline">Everest Dudhkoshi Cultural Trail</span>
//                 <span className="sm:hidden">EDCT</span>
//               </h1>
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex lg:flex-1 lg:justify-center">
//             <div className="flex items-center space-x-2">
//               {[
//                 { name: 'Home', path: '/' },
//                 { name: 'About', path: PATHS.ABOUT },
//                 { name: 'Contact', path: PATHS.CONTACTPAGE }
//               ].map((link) => (
//                 <button
//                   key={link.name}
//                   onClick={() => handleNavigation(link.path)}
//                   className={`px-5 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:scale-105 ${
//                     scrolled 
//                       ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
//                       : 'text-white hover:text-blue-200 hover:bg-white/10 drop-shadow-md'
//                   }`}
//                 >
//                   {link.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Social Icons & Mobile Menu */}
//           <div className="flex items-center space-x-4 lg:flex-1 lg:justify-end">
           

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className={`p-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   scrolled 
//                     ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
//                     : 'text-white hover:text-blue-200 hover:bg-white/10 drop-shadow-md'
//                 }`}
//               >
//                 {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
//           <div className="px-4 pt-4 pb-6 space-y-2">
//             {[
//               { name: 'Home', path: '/' },
//               { name: 'About', path: PATHS.ABOUT },
//               { name: 'Contact', path: PATHS.CONTACTPAGE }
//             ].map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => handleNavigation(link.path)}
//                 className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
//               >
//                 {link.name}
//               </button>
//             ))}
            
           
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { PATHS } from "../constants/Paths";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu after navigation
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 lg:h-24">
          
          {/* Logo/Brand (Left side) */}
          <div className="flex-shrink-0">
            <button onClick={() => handleNavigation('/')}>
              <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
              }`}>
                <span className="hidden sm:inline">Everest Dudhkoshi Cultural Trail</span>
                <span className="sm:hidden">EDCT</span>
              </h1>
            </button>
          </div>

          {/* Desktop Navigation (Right side) */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: PATHS.ABOUT },
              { name: 'Contact', path: PATHS.CONTACTPAGE }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10 drop-shadow-md'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button (Right side for small screens) */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className={`p-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-200 hover:bg-white/10 drop-shadow-md'
              }`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: PATHS.ABOUT },
              { name: 'Contact', path: PATHS.CONTACTPAGE }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
