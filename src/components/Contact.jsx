import React, { useEffect, useReducer, useRef, useState } from 'react';
import SocialMedia from './SocialMedia';

import emailjs from '@emailjs/browser';

// lH0zT_DUOypj0mFng

const Contact = () => {
    const form = useRef();

    const formData = {
        name: '',
        email: '',
        message: '',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'name': {
                return { ...state, name: action.payload };
            }
            case 'email': {
                return { ...state, email: action.payload };
            }
            case 'message': {
                return { ...state, message: action.payload };
            }
            default: {
                state;
            }
        }
    };

    const [state, dispatch] = useReducer(reducer, formData);

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault();
        console.log(state);

        emailjs
            .sendForm('contact_service', 'contact_form', form.current, {
                publicKey: 'lH0zT_DUOypj0mFng',
            })
            .then(
                function (response) {
                    // console.log('SUCCESS!', response.status, response.text);
                    setLoading(false);
                    setSent(true);
                },
                function (err) {
                    console.log('FAILED...', err);
                }
            );

        // setTimeout(() => {
        //     setLoading(false);
        //     setSent(true);
        // }, 5000);
    };

    useEffect(() => {
        if (sent) {
            setSent(false);
        }
    }, [state]);
    return (
        <section
            className="contact m-cover relative overflow-hidden md:bg-slate-900"
            id="contact"
        >
            <div className="contact--title">
                <h2 className="m-title">CONTACT ME</h2>
            </div>
            <div className="container">
                <div className="form-wrapper">
                    <form className="form" onSubmit={handleSubmit} ref={form}>
                        <div className="form-content name">
                            <input
                                type="text"
                                id="name"
                                value={state.name}
                                onChange={(event) =>
                                    dispatch({
                                        type: 'name',
                                        payload: event.target.value,
                                    })
                                }
                                name="name"
                            />
                            <label
                                htmlFor="name"
                                className={
                                    state.name.length <= 0 ? 'active' : ''
                                }
                            >
                                Name
                            </label>
                        </div>
                        <div className="form-content email">
                            <input
                                type="email"
                                id="email"
                                value={state.email}
                                onChange={(event) =>
                                    dispatch({
                                        type: 'email',
                                        payload: event.target.value,
                                    })
                                }
                                name="email"
                            />
                            <label
                                htmlFor="email"
                                className={
                                    state.email.length <= 0 ? 'active' : ''
                                }
                            >
                                Email
                            </label>
                        </div>
                        <div className="form-content message">
                            <textarea
                                name="message"
                                id="message"
                                value={state.message}
                                onChange={(event) =>
                                    dispatch({
                                        type: 'message',
                                        payload: event.target.value,
                                    })
                                }
                                rows="5"
                                cols="30"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className={
                                    state.message.length <= 0 ? 'active' : ''
                                }
                            >
                                Message
                            </label>
                        </div>
                        <button
                            className={
                                !sent
                                    ? 'form-content send'
                                    : 'form-content send sent'
                            }
                        >
                            {!sent ? (
                                !loading ? (
                                    // <i
                                    //     id="send"
                                    //     className="fas fa-paper-plane send"
                                    // ></i>
                                    <i
                                        id="send"
                                        className="fas fa-paper-plane"
                                    ></i>
                                ) : (
                                    <i className="fas fa-circle-notch active"></i>
                                )
                            ) : (
                                <i className="fas fa-check sent"></i>
                            )}
                        </button>
                    </form>
                </div>

                <div className="content-divider">
                    <div></div>
                    <span>or</span>
                    <div></div>
                </div>

                <SocialMedia />
            </div>
        </section>
    );
};

export default Contact;
