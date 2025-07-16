import { Link } from '@modern-js/runtime/router';
import './index.css';

const Index = () => (
  <>
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <div className="form-footer">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  </>

  // </div>
);

export default Index;
