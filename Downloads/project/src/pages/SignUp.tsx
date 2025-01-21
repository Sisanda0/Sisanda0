import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Logo />
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-semibold mb-2">Create an Account</h2>
          <p className="text-white/80">
            Already have an account?{' '}
            <Link to="/" className="text-white hover:underline">
              Login
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

          <Button type="submit" className="mt-6">
            Sign Up
          </Button>

          <p className="text-center mt-6 text-white/80 text-sm">
            By signing up, I agree to CaliVision's{' '}
            <a href="#" className="text-white hover:underline">
              privacy policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-white hover:underline">
              terms of services
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}