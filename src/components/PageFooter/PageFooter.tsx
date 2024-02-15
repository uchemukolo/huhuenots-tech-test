import React from 'react';
import './PageFooter.css';

type PageFooterProps = {
  logo: string;
}
const PageFooter: React.FC<PageFooterProps> = ({ logo }) => {
  return (
    <div className="page-footer">
      <div className="footer">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className='info'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</div>
        <div className="footer-links">
          <span>Terms of Use</span>
          <span>Legal Terms</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
