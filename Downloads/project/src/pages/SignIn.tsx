import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Logo />
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-semibold mb-2">Welcome back!</h2>
          <p className="text-white/80">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Username or Email"
            type="text"
            placeholder="Enter username or email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                className="mr-2"
                checked={formData.remember}
                onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-white hover:underline">
              Forgot your password?
            </Link>
          </div>

          <Button type="submit">Login</Button>

          <p className="text-center mt-6 text-white">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}