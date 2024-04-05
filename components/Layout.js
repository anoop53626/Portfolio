// Import Sora font from the @next/font/google package
import { Sora } from '@next/font/google';

// Font settings for Sora
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// Import components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
// import { Children } from 'react';


// Layout component
const Layout = ({ children }) => {

  return (
    // Apply font styles dynamically based on the font settings
   
   <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      {/* Render TopLeftImg component */}
     
      <TopLeftImg />
      {/* Render Nav component */}
     
      <Nav />
      {/* Render Header component */}
      
      <Header />
      {/* Render children components */}
     
      {children}
    </div>
  );
};

export default Layout;
