import React from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class MainFooter extends React.Component{

  render() {
    return (
      <Footer size="mini">
        <FooterSection type="left">
            <img src='../images/logo-footer.png' alt="logo"/>
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
        </FooterSection>
      </Footer>
    );
  }
}

export default MainFooter;