// "use client";
// import { useState } from "react";
// import Link  from 'react-router-dom'
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuContent,
//   NavigationMenuLink,
// } from "@/components/ui/navigation-menu";

// const components = [
//   { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
//   { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
//   { title: "Progress", href: "/docs/primitives/progress", description: "Displays an indicator showing the completion progress of a task." },
//   { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually or semantically separates content." },
//   { title: "Tabs", href: "/docs/primitives/tabs", description: "A set of layered sections of content displayed one at a time." },
//   { title: "Tooltip", href: "/docs/primitives/tooltip", description: "A popup that displays information when hovered." },
// ];

// const Navbar2 = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link href="/" className="flex items-center space-x-3">
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             H#Booking
//           </span>
//         </Link>

//         <div className="flex items-center space-x-3">
//           {/* Language Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
//             >
//               🌎 English (US)
//             </button>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg dark:bg-gray-700">
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-300">
//                   <li>
//                     <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600">
//                       🇬🇧 English (US)
//                     </button>
//                   </li>
//                   <li>
//                     <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600">
//                       🇫🇷 Français
//                     </button>
//                   </li>
//                   <li>
//                     <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600">
//                       🇩🇪 Deutsch
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid grid-cols-2 gap-3 p-4">
//                 {components.map((component) => (
//                   <li key={component.title}>
//                     <Link href={component.href} passHref>
//                       <NavigationMenuLink className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//                         <div className="text-sm font-medium">{component.title}</div>
//                         <p className="text-xs text-gray-500">{component.description}</p>
//                       </NavigationMenuLink>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </nav>
//   );
// };

// export default Navbar2;
