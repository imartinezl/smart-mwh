import React, { Component } from 'react';

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
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';

import TodoAppDashboard from './components/TodoAppDashboard';
import AddTask from './components/AddTask';
import AddFooter from './components/AddFooter';

import Slider from 'react-rangeslider'
import Particles from 'react-particles-js'

import fire from './fire';
import firebase from 'firebase';
//style={{backgroundImage: "url(" + "../img/pexels.jpeg" + ")", height:1920, width: 1080}}

export default class Main extends Component {
  render() {
    return (
      // <Box>
      // <Hero background={<Image src='../img/back2.jpg'
      //   fit={'cover'} full='vertical'/>}
      //   backgroundColorIndex='dark' size='small'>
      //   <Box direction='row'
      //     justify='center'
      //     align='center'
      //     full='vertical'>
      //     <Box basis='1/2'
      //       align='end'
      //       pad='medium'
      //       full='true'>
      //       <Box basis='1/2' colorIndex='grey-2-a'>
      //         <Card heading={<Headline announce='true' size='small' uppercase='true'>How Smart Is Your MWh?</Headline>}
      //           description='By NEM Solutions'
      //           textSize='small'
      //           headingStrong='false'
      //           />
      //           <Meter value={40}/>
      //       </Box>
      //     </Box>
      //     <Box basis='1/2'
      //       align='start'
      //       pad='medium'
      //       alignContent='center'>
      //       <AddTask/>
      //       </Box>
      //   </Box>
      // </Hero>
      // <AddFooter/>
      // <Image src='./img/pexels.jpeg' fit='cover'/>
      // </Box>
      // <Hero size='large' background={<Image src='../img/back2.jpg' fit={'cover'} full='vertical'/>}>

      //<App centered={false} style={{position: 'relative', backgroundImage: "url(" + "../img/gradient2.jpg" + ")"}}>



      <App centered={false} style={{position: 'relative', backgroundColor:'transparent'}}>
        <Box full={true}>
          <Box basis='1/4'/>
          <Header>
            <Box margin={{top:'50'}}
              flex={true}
              justify='center'
              full='true'
              direction='row'
              wrap={true}>
              <Title>
                <Headline style={{color:'rgb(245, 245, 245)'}} size='medium'>How Smart Is Your MWh?</Headline>
              </Title>
            </Box>
          </Header>

          <Section>
            <AddTask/>
          </Section>
          <Box basis='1/4'/>
          <Box colorIndex='light-2'>
            <AddFooter/>
          </Box>
        </Box>
      </App>
      



    );
  }
}
