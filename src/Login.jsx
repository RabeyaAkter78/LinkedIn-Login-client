
const Login = () => {
    const handleLogin = () => {
        const params = new URLSearchParams({
            response_type: "code",
            client_id: '86edtk8jzsgjnv',
            redirect_uri: "http://localhost:5000/api/linkedin/callback",
            scope: "openid email profile",
        })
        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`
    }
    return (
        <div>
            <p>Login With linkedin</p>
            <button onClick={handleLogin}>Sign In with LinkedIn</button>
        </div>
    );
};

export default Login;