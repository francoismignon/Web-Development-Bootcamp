import React from "react";
import Input from "./Input";

function Login(props) {
    return (
        <form className="form">
            <Input placeholder="Prenom" type="text"/>
            <Input placeholder="Nom" type="text"/>
            <Input placeholder="Mot de passe" type="password"/>
            <button type="submit">{props.nameBtn}</button>
        </form>
    );
}
export default Login;