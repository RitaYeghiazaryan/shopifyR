 import axios from "axios";
 import { useState } from "react";
 //BASE COMPONENT
 import Button from "src/Component/Button/Button.component";
 import Input from "src/Component/Input/input.component";

 //STYLES
 import styles from "./SignUp.module.scss"

 const SignUp = () => {
   const [inputState, setInputState] = useState({});
   const handleInput = (event) => {
     const { name,value } = event.target;
     setInputState({ ...inputState, [name]: value });
   };
   const handleSubmit = async (event) => {
       event.preventDefault();
     await axios.post("auth/signup",inputState);
   };

   return (
     <form onSubmit={handleSubmit} className={styles.form}>
       <h1>I do not have a account</h1>
       <p> Sign up with your email and password</p>

       <Input
         name="name"
         label="Display Name"
         onChange={handleInput}
         value={inputState.name}
        
       />
       <Input
         name="email"
         label="Email"
         type="email"
         onChange={handleInput}
         value={inputState.email}
       
       />
       <Input
         name="password"
         label="Password"
         type="password"
         onChange={handleInput}
         value={inputState.password}
      
       />
       <Input
         name="passwordConfirm"
         label="Confirm password"
         type="password"
         onChange={handleInput}
         value={inputState.passwordConfirm}
       
       />
       <Button type="submit">Sign Up</Button>
     </form>
   );
 };

 export default SignUp;

  
 //BASE COMPONENTS
// import axios from "axios";
// import { useState } from "react";
// import Button from "src/Component/Button/Button.component";
// import Input from "src/Component/Input/input.component";


// const SignUp = () => {
//     const [inputState, setInputState] = useState({});

//     const handleInput = (event) => {
//         const { name, value } = event.target;
//         setInputState({ ...inputState, [name]: value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         await axios.post("auth/signup", inputState);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h1>I do not have a account</h1>
//             <p>Sign up with your email and password</p>
//             <Input
//                 name="name"
//                 label="Display name"
//                 onChange={handleInput}
//                 value={inputState.name}
//                 required
//             />
//             <Input
//                 name="email"
//                 type="email"
//                 required
//                 label="Email"
//                 value={inputState.email}
//                 onChange={handleInput}
//             />
//             <Input
//                 name="password"
//                 type="password"
//                 required
//                 label="Password"
//                 value={inputState.password}
//                 onChange={handleInput}
//             />
//             <Input
//                 name="passwordConfirm"
//                 type="password"
//                 required
//                 label="Confirm password"
//                 value={inputState.passwordConfirm}
//                 onChange={handleInput}
//             />
//             <Button type="submit">Sign Up</Button>
//         </form>
//     );
// };

//export default SignUp;

