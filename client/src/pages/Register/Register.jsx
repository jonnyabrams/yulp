import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Yulp</h3>
          <span className="login-description">
            Connect with great local businesses
          </span>
        </div>

        <div className="login-right">
          <form className="login-box">
            <input placeholder="Username" className="login-input" />
            <input type="email" placeholder="Email" className="login-input" />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />

            <button type="submit" className="login-button">Sign up</button>
            <button className="login-register-button">Already have an account?</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
