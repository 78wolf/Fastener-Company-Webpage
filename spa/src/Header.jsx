import './Header.css';

import GlobalNav from "./GlobalNav";
import headerlogo from './companylogo.jpg';

function Header({setPage}){
 return(
   <header className="header">
     <a href="#main" className="skip-link">Skip to main content</a>

     <a href="/home.html">
      <img className="header__logo" 
      src={headerlogo} 
      alt="Universal-L Fastener Co., Ltd" />
    </a>
     <GlobalNav className="header__nav" setPage={setPage}/>
   </header>
      
  
 );
}

export default Header;