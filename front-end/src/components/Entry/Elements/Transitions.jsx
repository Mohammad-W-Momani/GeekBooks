const Transitions = ({ setSignInOrUp, signInOrUp }) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay--panel overlay--left">
          <h1>Already Geeks?</h1>
          <p>Enter your personal details and start journey with us</p>

          <button
            className="btn--primary btn--ghost"
            onClick={() => setSignInOrUp(false)}
          >
            Sign In
          </button>
        </div>
        <div className="overlay--panel overlay--right">
          <h1>Hello, Geek</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button
            className="btn--primary btn--ghost"
            onClick={() => setSignInOrUp(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transitions;
