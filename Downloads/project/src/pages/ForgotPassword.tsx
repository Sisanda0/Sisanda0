import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    if (email){
      navigate('/reset-password');
    } else {
      alert('Please enter your email address.');
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md -mt-40">
        <Logo />
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-semibold mb-2">Forgot Password?</h2>
          <p className="text-white/80">
            Enter your email address or username below to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit" className="mt-6">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}