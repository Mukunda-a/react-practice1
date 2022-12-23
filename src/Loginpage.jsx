import React, { useState } from 'react'

function Loginpage() {

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: ""


    })

    const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input, [name]: value
        })
        console.log(input);

        const submitHandler = (e) => {
            e.preventDefault()

        }

    }
    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={input.firstName} onChange={inputHandler}
                />
                <input
                    id="last-name"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={input.lastName} onChange={inputHandler}
                />
                <input
                    id="email"
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={input.email} onChange={inputHandler}
                />
                <button className="form-field" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}


export default Loginpage