import React from 'react';
import { ConversationalForm } from 'conversational-form';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        'tag': 'input',
        'type': 'text',
        'name': 'firstname',
        'cf-questions': 'What is your firstname?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'lastname',
        'cf-questions': 'What is your lastname?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'lastname',
        'cf-questions': 'What is your age?'
      },
      {
        "tag": "select",
        "cf-input-placeholder": "Choose one of the above",
        "multiple": "multiple",
        "cf-questions": "Gender?",
        "children":[
          {
            "tag": "option",
            "name": "option-dropdown-1",
            "cf-label": "Male",
            "value": "-1"
          },
          {
            "tag": "option",
            "name": "option-dropdown-2",
            "cf-label": "Female",
            "value": "0"
          },
          {
            "tag": "option",
            "name": "option-dropdown-3",
            "cf-label": "Other",
            "value": "1"
          }
        ]
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'Email',
        'cf-questions': 'Please enter your email so we can get in touch with you'
      },
      {
        "tag": "select",
        "cf-input-placeholder": "Choose one of the above",
        "multiple": "multiple",
        "cf-questions": "Would you like to sign up for the ReLive invited beta program?",
        "children":[
          {
            "tag": "option",
            "name": "option-dropdown-1",
            "cf-label": "Yes",
            "value": "1"
          },
          {
            "tag": "option",
            "name": "option-dropdown-2",
            "cf-label": "No",
            "value": "0"
          }
        ]
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'Diseases',
        'cf-questions': 'Do you have any diseases we can help monitor?'
      },
      {
        "tag": "select",
        "cf-input-placeholder": "Choose one of the above",
        "multiple": "multiple",
        "cf-questions": "Would you like to pre-order Xeet - our custom insoles?",
        "children":[
          {
            "tag": "option",
            "name": "option-dropdown-1",
            "cf-label": "Yes",
            "value": "1"
          },
          {
            "tag": "option",
            "name": "option-dropdown-2",
            "cf-label": "No",
            "value": "0"
          }
        ]
      },
      {
        "tag": "select",
        "cf-input-placeholder": "Choose one of the above",
        "multiple": "multiple",
        "cf-questions": "Would you like to pre-order Active or Passive insoles?",
        "children":[
          {
            "tag": "option",
            "name": "option-dropdown-1",
            "cf-label": "Active",
            "value": "1"
          },
          {
            "tag": "option",
            "name": "option-dropdown-2",
            "cf-label": "Passive",
            "value": "0"
          }
        ]
      },
      {
        "tag": "select",
        "cf-input-placeholder": "Choose one of the above",
        "multiple": "multiple",
        "cf-questions": "Do you want more information about Xolve - custom devices for pain management and wound healing?",
        "children":[
          {
            "tag": "option",
            "name": "option-dropdown-1",
            "cf-label": "Yes",
            "value": "1"
          },
          {
            "tag": "option",
            "name": "option-dropdown-2",
            "cf-label": "No",
            "value": "0"
          }
        ]
      }
    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  }
  
  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
  }
  
  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
  }
  
  render() {
    return (
      <div>
        <div
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}