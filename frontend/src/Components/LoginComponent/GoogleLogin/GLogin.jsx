import React from 'react'
import {GoogleLogin} from 'react-google-login'

const clientId='480547441435-v94trieukkbeivtrr3no9k4urooolujg.apps.googleusercontent.com'
const GLogin = () => {
    const onSuccess=(res)=>{
        console.log("Login",res.profileObj)
    }
    const onFailure=(res)=>{
        console.log("Login Failed",res)
    }
  return (
    <div >
      <GoogleLogin className='w-[12vw]'
      clientId={clientId}
      buttonText='Login'
      onSuccess={onSuccess}
      cookiepolicy={'single_host_origin'}
      isSignedIn={true}
      />
    </div>
  )
}

export default GLogin