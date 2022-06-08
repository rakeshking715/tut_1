import React from "react";
import './Form.css'


const Form = () => {
    return (
        <>
            <h1 className="hii">Submit your Request</h1>
            <form className="Form">
                <label>First Name : </label>
                <input type="text" placeholder="john" /><br /><br /><br />
                <label>Last Name : </label>
                <input type="text" placeholder="Last name" /><br /><br /><br />
                <label>Mobile No. : </label>
                <input type="number" placeholder="91xxxxxxxxxx" /><br /><br /><br />
                <label>Email : </label>
                <input type="email" placeholder="abc@gmail.com" /><br /><br /><br />
                <label>Password : </label>
                <input type="password" placeholder="xxxxxx" /><br /><br /><br />
                <label>Re-Enter Password : </label>
                <input type="password" placeholder="xxxxxx" /><br /><br /><br />
                <input type="button" value="submit" />
            </form>
        </>
    );
}

export default Form;