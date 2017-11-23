import React, { Component, PropTypes } from 'react';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import Paragraph from 'grommet/components/Paragraph';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import CheckBox from 'grommet/components/CheckBox';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import Toast from 'grommet/components/Toast';
import Animate from 'grommet/components/Animate';
import Pulse from 'grommet/components/icons/Pulse';
import LinkNext from 'grommet/components/icons//base/LinkNext';
import Label from 'grommet/components/Label';
import Meter from 'grommet/components/Meter';
import Article from 'grommet/components/Article';
import Columns from 'grommet/components/Columns';
import Select from 'grommet/components/Select';
import Headline from 'grommet/components/Headline';
import Distribution from 'grommet/components/Distribution';

import Layer from 'grommet/components/Layer';
import Quote from 'grommet/components/Quote';
import Markdown from 'grommet/components/Markdown';

import fire from '../fire';
import firebase from 'firebase';

var $ = require('jQuery');

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      formErrors: {name: '', email: '', phone:'',},
      nameValid: false,
      emailValid: false,
      phoneValid: false,
      formValid: false,
      power:1000,
      wts:50,
      cost:500000,
      onshore: 50,
      oems:'',
      toast: false,
      savings:0,
      formSent: false,
    };
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetSubmit = this.resetSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.closeToast = this.closeToast.bind(this);
    this._onChangeRange = this._onChangeRange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  // componentWillMount(){
  //   /* Create reference to messages in Firebase Database */
  //   let messagesRef = fire.database().ref('data').orderByKey().limitToLast(100);
  //   messagesRef.on('child_added', snapshot => {
  //     /* Update React state when message is added at Firebase Database */
  //     let message = { text: snapshot.val(), id: snapshot.key };
  //     this.setState({ messages: [message].concat(this.state.messages) });
  //   })
  // }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;


    switch(fieldName) {
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? '' : ' We\'d love to know your name';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Come on, don\'t lie';
        break;
      case 'phone':
        phoneValid = value.length >= 9;
        fieldValidationErrors.phone = phoneValid ? '': ' Sorry, too short';
        break;
      default:
        break;
    }
    this.setState({ nameValid: nameValid,
                    emailValid: emailValid,
                    phoneValid: phoneValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});
  }

  handleChange(event) {
    this.validateField(event.target.name, event.target.value )
    this.setState({ [event.target.name]: event.target.value });
    // console.log('A name was submitted: ' + event.target.name + ' ' + event.target.value);
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({savings: (parseInt(this.state.wts,10) * parseInt(this.state.cost,10))})
    console.log(this.state);
    if (!this.state.formValid) {
      event.preventDefault();
      this.validateField('name',this.state.name);
      this.validateField('email',this.state.email);
      this.validateField('phone',this.state.phone);
      return;
    }
    fire.database().ref('data').push( this.state );
    this.setState({toast: true});
    console.log('Saved into Firebase');
    // this.resetSubmit();
  }

  resetSubmit(event){
    // event.preventDefault();
    if(this.state.formValid){
      this.setState(this.baseState);
    }
  }
  _onChangeRange(event) {
      this.setState({onshore: event.target.value});
  }
  handleSelectChange(event){
    this.setState({oems: event.value});
    console.log(event.value);
  }
  closeToast(event){
    // event.preventDefault();
    this.setState({toast: false});
  }

  onSubmit(e){
    e.preventDefault();
    var submittedName = this.state.name;
    var submittedEmail = this.state.email;
    this.setState({
      name: this.state.name,
      email: this.state.email
      }, function () {
        this.sendEmail(this.state);
    });
  }

  sendEmail(info) {
      console.log("sending email");
        $.ajax({
        url: '/',
        type: 'POST',
        data: info,
        success: function(data) {
          console.dir('success ' + data.message);
        },
        error: function(xhr, status, err) {
          console.dir("error: " + err.message);
        }
      });
  }

  render() {
    let w='336';

    return (
        <Form id="form" ref={(el) => this.myFormRef = el}
          onSubmit={this.handleSubmit} plain={true} >
          <Columns masonry={false}
            justify='center'>
            <Box align='center'
              pad='small'
              margin='small'
              colorIndex='light-2'
              wrap={true}>
              <FormField style={{width:w}} label={<Label uppercase={true} size='small'> Installed Power (MW) </Label>} size='large'>
                <NumberInput name='power' step={100}
                value={this.state.power} onChange={this.handleChange} />
              </FormField>
              <FormField style={{width: w}} label={<Label uppercase={true} size='small'> Number of Wind Turbines </Label>}  size='large'>
                <NumberInput name='wts' step={50}
                value={this.state.wts} onChange={this.handleChange} />
              </FormField>
              <FormField style={{width: w}} label={<Label uppercase={true} size='small'> O&M Annual Cost (€) </Label>}  size='large'>
                <NumberInput name='cost' step={500000}
                value={this.state.cost} onChange={this.handleChange} />
              </FormField>
              <FormField style={{width: w}} label={<Label uppercase={true} size='small'> Onshore/Offshore % </Label>}  size='large'>
                <NumberInput name='onshore' step={10} min={0} max={100}
                value={this.state.onshore} onChange={this._onChangeRange} />


                {// <input id="onshore" type="range" min="0" max="100" step="1"
                // value={this.state.onshore} onChange={this._onChangeRange} onMouseUp={this._onChangeRange}/>
              // <Distribution series={[{"label": "Onshore", "value": parseInt(this.state.onshore,10), "colorIndex": "accent-1"},
              //   {"label": "Offshore", "value": 100 - parseInt(this.state.onshore,10), "colorIndex": "accent-2"}]}
              //   style={{height:500/3, width:350/3}} size='small' units='%' full={true} />
              }
              </FormField>
            </Box>
            <Box align='center'
              pad='small'
              margin='small'
              colorIndex='light-2'>
              <FormField style={{width: w}} label={<Label uppercase={true} size='small'> OEM </Label>} size='medium'>
                <Select multiple={true} inline={true}
                options={['Vestas', 'GE', 'Goldwing','Siemens Gamesa','Enercon', 'Senvion', 'NEG Micon', 'Alstom', 'Mitsubishi','Other*']}
                value={this.state.oems} onChange={this.handleSelectChange}/>
            </FormField>
            </Box>
            <Box align='center'
              pad='small'
              margin='small'
              colorIndex='light-2'>
              <FormField style={{width: w}} label={<Label uppercase={true} size='small'> Name </Label>}  error={this.state.formErrors.name}>
                <TextInput style={{height:50, width: 280}} name='name' placeHolder='*Your Name' value={this.state.name} onDOMChange={this.handleChange}/>
              </FormField>
              <FormField style={{width: w}} label={<Label uppercase={true} size='small'> Email </Label>} error={this.state.formErrors.email}>
                <TextInput style={{height:50, width: 280}} name='email' placeHolder='*Email' value={this.state.email} onDOMChange={this.handleChange}/>
              </FormField>
              <FormField style={{width: w}} label={<Label uppercase={true} size='small'> Phone Number </Label>} error={this.state.formErrors.phone}>
                <TextInput style={{height:50, width: 280}} name='phone' placeHolder='*Phone Number' value={this.state.phone} onDOMChange={this.handleChange}/>
              </FormField>
              <Button label='Send Your Numbers!'
                type='submit'
                primary={true}
                secondary={true}
                onClick={this.handleSubmit} style={{width:'330', margin:'10px 0px 0px 0px'}}/>

                <Button label='Send Email!'
                  type='submit'
                  primary={true}
                  secondary={true}
                  onClick={this.onSubmit} style={{width:'330', margin:'10px 0px 0px 0px'}}/>

              {
                // <Animate visible={this.state.toast}
              //   enter={{"animation": "fade", "duration": 1000, "delay": 0}}
              //   keep={false}>
                  // <Toast status='ok' size='large' onClose={this.closeToast}>
                  //   {<h4 style={{'margin':'10px 0px 0px 0px'}} size='small'> Thank you for your information. Our crazy mathematicians will now send you an email with your savings </h4>}
                  // </Toast>
              //  </Animate>
              }
               <Layer hidden={!this.state.toast} closer={true}  flush={true} onClose={this.resetSubmit}>

                 <Quote style={{width:'700px'}} size="large" borderColorIndex='brand'>
                  <Heading strong={true} margin='large'>  Hi {this.state.name} </Heading>
                   <Markdown  components={{
                    "h1": {"props": {"strong": true}},
                    "h2": {"props": {"strong": true}},
                    "p": {"props": {"align": "center"}},
                    "img": {"props": {"size": "small"}}
                  }} content='
                  ##### Thank you for your interest in NEM Solutions.

                  ###### We have been analyzing your data and based on our **historical data, our neural networks, our fuzzy logic, our knowledge and common sense**, we are confident that could you be saving up a total:
                  '/>
                  <Headline size='small' margin='large' align='center' strong={true}>  {this.state.savings} €</Headline>

                  <Markdown  components={{
                   "h1": {"props": {"strong": true}},
                   "h2": {"props": {"strong": true}},
                   "p": {"props": {"align": "center"}},
                   "img": {"props": {"size": "small"}}
                 }} content='

                  ###### This is a good estimate, but we know that better data leads to better results.
                  ###### If you are interested on knowing more about NEM Solutions and how we turn data into relevant insights allowing to save money, please contact us at:
                  Ander Larrañaga ([alarranaga@nemsolutions.com][email])
                  ###### Remember, if you are using data as you were doing it long time ago, you are already long time behind. **Let data speak.**

                  ###### Your sincerely,

                  ###### NEM Solutions family

                  ![][logo]

                  ###### *This is an estimate, based on other customers and our database of more than 10 years and 12.000 Wind Turbines we are analyzing.


                   [email]: <mailto::alarranaga@nemsolutions.com>
                   [logo]: https://windeurope.org/wp-content/uploads/nem-solutions.gif "NEM"
                   ' />
                 </Quote>
               </Layer>
            </Box>
          </Columns>

        </Form>



    );
  }
}
