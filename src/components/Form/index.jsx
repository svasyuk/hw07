import { useState } from 'react';
import classes from "./styles.module.css";
import { Button } from '../ui/Button/index.jsx';
import { Field } from "../ui/Field/index.jsx";

export function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function setNameHandler(event) {
        setName(event.target.value);
    }

    function setEmailHandler(event) {
        setEmail(event.target.value);
    }

    function onSendClick(event) {
        event.preventDefault();
        console.log('E-mail for', name, ' was sent to', email);
      }
        
    return (
        <div className={classes.form}>
            <div className={classes.content}>
                <div className={classes.text__content}>
                    <div className={classes.title}>Perfect solution <br/>for small <br/>businesse</div>
                    <div className={classes.paragraphe}>
                        Being a freelancer is a <br/>
                        rollercoaster of emotions. <br/>
                        We built Slate to keep your <br/>
                        freelance business less stressful. <br/>
                        We'd love to show you <br/>
                        what we're building...
                    </div>
                    <div className={classes.buttons}>
                        <Button>sign up for free</Button>
                        <Button>find out more</Button>
                    </div>
                </div>
                <div className={classes.frame__content}>
                    <img src="src/assets/screen.svg" alt="screen" className="image" />    
                </div>
            </div>
            <div className={classes.input_content}>
                <Field name="name" value={name} onChange={setNameHandler} label="ФИО"/>
                <Field name="email" value={email} onChange={setEmailHandler} label="E-mail"/>
                <Button onClick={onSendClick}>Send</Button>
            </div>
        </div>
    )
}
  