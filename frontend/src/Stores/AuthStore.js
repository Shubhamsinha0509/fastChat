import { create } from "zustand";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
                    return true;
             }
             else{
                toast.error('Login failed !')
             }

        }
        
    };
})

export default AuthStore