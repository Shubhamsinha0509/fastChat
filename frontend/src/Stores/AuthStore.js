import { create } from "zustand";


const AuthStore = create((set,get)=>{
    return{
        UserData:{
            Name:'',
            email:'',
            Password:''

        },
        handleRegister:(name,mail,password)=>{
                set((state)=>({
                    UserData:{
                        ...state.UserData,
                        Name:name,
                        email:mail,
                        Password:password
                    }
                }))
                console.log(get().UserData);
        },

        handleLogin:(mail,password)=>{
            // here Api call will be implemented for verifying credentials for Login
             const credentials = get().UserData;
             if(credentials.email == mail && credentials.Password === password){
                alert('Login successfully');
             }
             else{
                alert('Invalid email or password');
             }

        }
        
    };
})

export default AuthStore