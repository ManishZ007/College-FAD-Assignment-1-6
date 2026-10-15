import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setSubmitted(false);
    }


    function handleSubmit(event) {
        event.preventDefault();

        setSubmitted(true);
    }


    function handleReset() {
        setFormData({
            name: "",
            email: "",
            message: ""
        });

        setSubmitted(false);
    }


    return (
        <main className="form-page">
            <a className="back-link" href={import.meta.env.DEV ? "../index.html" : "../../index.html"}>← All assignments</a>

            <section className="form-heading">
                <p className="eyebrow">CONTACT FORM</p>

                <h1>Let's start a conversation.</h1>

                <p>
                    Share your details and a little about what
                    you would like to discuss.
                </p>
            </section>


            <section className="form-area">

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="message">Message</label>

                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                        ></textarea>
                    </div>


                    <div className="button-row">

                        <button type="submit">
                            Send Message
                        </button>

                        <button
                            type="button"
                            className="reset-button"
                            onClick={handleReset}
                        >
                            Clear
                        </button>

                    </div>


                    {submitted && (
                        <p className="success-message">
                            Your message has been submitted successfully.
                        </p>
                    )}

                </form>


                <div className="form-note">
                    <span>01</span>

                    <p>
                        Your information is managed directly
                        through React state.
                    </p>
                </div>

            </section>


            <section className="preview-section">

                <p className="preview-label">LIVE PREVIEW</p>

                <div className="preview-content">

                    <h2>
                        {formData.name || "Your name"}
                    </h2>

                    <p>
                        {formData.email || "your@email.com"}
                    </p>

                    <p>
                        {formData.message || "Your message will appear here."}
                    </p>

                </div>

            </section>

        </main>
    );
}

export default App;
