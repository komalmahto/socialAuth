import GoogleLogin from "react-google-login"
import FacebookLogin from "react-facebook-login"
function App() {
  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
  }
  const responseFacebook = (response) => {
    console.log(response)
  }
  return (
    <div>
      <GoogleLogin
        clientId=""
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId=""
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      />
      ,
    </div>
  )
}

export default App
