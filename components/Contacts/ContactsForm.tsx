'use client'
import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = (e: any) => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form method="post" className="contact-validation-active" onSubmit={(e) => submitHandler(e)} >
            <div className="row align-items-center">
                <div className="col-md-6 col-md-6 col-12">
                    <div className="form-group">
                        <label>Name*</label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-md-6 col-md-6 col-12">
                    <div className="form-group">
                        <label>Email*</label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fullwidth form-group">
                        <label>Message*</label>
                        <ul>
                            <li><i className="fi flaticon-phone-call"></i> +1238575694</li>
                            <li><i className="fi flaticon-mail"></i> example@mail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default ContactForm;