import React from 'react';

function Footer() {

  return (
    <footer>
      <div className="social-container">
        <ul className="social-icons">
          <li><a href="https://www.linkedin.com/in/daveoliverio" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/davezer" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
          <li><a href="https://stackoverflow.com/users/16883200/daveo" target="_blank" rel="noreferrer"><i class="fa-brands fa-stack-overflow"></i></a></li>
        </ul>
        <h4>© 2022 Dave Oliverio</h4><br/>
      </div>
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
    </footer>
  );
};

export default Footer;