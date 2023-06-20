import React from 'react';
import './layout.css'; //
import Header from './Header';

const Layout = ({children}) => {
  return (
    <div className="layout">
        <Header/>
         {children}
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Layout;
