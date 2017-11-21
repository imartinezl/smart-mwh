import React, { Component, PropTypes } from 'react';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Form from 'grommet/components/Form';
import Pulse from 'grommet/components/icons/Pulse';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import SocialFacebookOptionIcon from 'grommet/components/icons/base/SocialFacebookOption';
import SocialLinkedinOptionIcon from 'grommet/components/icons/base/SocialLinkedinOption';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import MailIcon from 'grommet/components/icons/base/Mail';
import Button from 'grommet/components/Button';
import Split from 'grommet/components/Split';
import Card from 'grommet/components/Card';
import Headline from 'grommet/components/Headline';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import SocialShare from 'grommet/components/SocialShare';
import Meter from 'grommet/components/Meter';

export default class AddFooter extends Component {
  render() {
    return (
        <Footer justify='between'
          size='large'>
          <Title>
            <s />
             <Label size='small'>Powered by </Label>
             <Image src='../img/nem-logo-direccion-transparente.png' full='vertical' size='small'/>
          </Title>
          <Box direction='row'
            basis='1/4'
            align='center'
            pad={{"between": "medium"}}>

            <Menu direction='row'
              size='medium'
              dropAlign={{"left": "left", "top":"top"}}>
              <Anchor target="_blank" style={{padding:'5'}} href='https://www.nemsolutions.com/contact'>
                Contact
              </Anchor>
              <Anchor target="_blank" style={{padding:'5'}} href='http://www.nemsolutions.com'>
                About
              </Anchor>
              <Anchor target="_blank" href='mailto::alarranaga@nemsolutions.com'>
                <MailIcon />
              </Anchor>
              <Anchor target="_blank" href='https://twitter.com/nemsolutions?lang=es'>
                <SocialTwitterIcon />
              </Anchor>
              <Anchor target="_blank" href='https://www.facebook.com/nemsolutions/'>
                <SocialFacebookOptionIcon />
              </Anchor>
              <Anchor target="_blank" href='https://www.linkedin.com/company/619695/'>
                <SocialLinkedinOptionIcon />
              </Anchor>
                <s />
            </Menu>

          </Box>
        </Footer>
      );
    }
}
