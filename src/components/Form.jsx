import React, {useState} from 'react'
import Footer from './Footer';

function Form() {
    const [input, setInput] =  useState("");
    const phoneIsValid = /^\d{10}$/.test(input);

    const handelSubmit = (e) =>{
        localStorage.setItem("paytm-number" , input);
    }
    const alreadyRegistered = localStorage.getItem("paytm-number") !== null;

    if(alreadyRegistered){
        return(
        <>
            
            <div className="container" id="complete">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png"
                />
                <div>
                    <h2>Where will i get the gift card?</h2>
                    <p>You will recieve it on WhatsApp/SMS on your mobile.</p>
                </div>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png"
                />
                <div>
                    <h2>When will i receive the gift card?</h2>
                    <p>Withn 48 hours, when yor Man Matters order is delivered.</p>
                </div>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png"
                />
                <div>
                    <h2>What if i cancel the order?</h2>
                    <p>The vocucher will not delivered if you cancel the order.</p>
                </div>



            </div>
            
            <Footer/>
        </>
        )
    }
    return (
        <div className="container">
            <p id="formMessage">You have WON Paytm Gift<br/> Card of RS 200 for <b>placing the order<br/> on Man Matters</b> </p>
            <form onSubmit={handelSubmit}>
                <div className="form-group">
                    <input
                        type="tel"
                        name="number"
                        className="form-control"
                        id="phone"
                        maxLength="10"
                        placeholder="Enter Mobile Number"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <p id="p2">
                    <b>Enter the same number used on Man Matters</b>
                </p>
                <input
                    type="submit"
                    name="submit"
                    id="submit"
                    className={`${!phoneIsValid ? "disabled" : ""}`}
                    value="Wow! Get my Paytm Gift Card  >"
                />
                <Footer/>
            </form>
        </div>
    )
}

export default Form;
