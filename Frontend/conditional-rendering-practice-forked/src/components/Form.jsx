import React from "react";
import Input from "./Input";
import Button from "./Button";


// function Form(props) {
//   return (
//     <form className="form">
//       {props.userIsRegistered ?
//         <div>
//           <Input type="text" placeholder="Username" />
//           <Input type="password" placeholder="Password" />
//           {/* <Button type="submit" name="Login" /> */}
//         </div>
//         :
//         <div>
//           <Input type="text" placeholder="Username" />
//           <Input type="password" placeholder="Password" />
//           <Input type="password" placeholder="Confirm password" />
//           {/* <Button type="submit" name="Register" /> */}
//         </div>}
//         <button type="submit">{props.userIsRegistered?"Login":"Register"}</button>
//     </form>
    
//   );
// }

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="password" />
      {!props.userIsRegistered && <input type="password" placeholder="Confirm password" />}
      <button type="submit">{props.userIsRegistered ? "Login" : "Register"}</button>
    </form>

  );
}


export default Form;
