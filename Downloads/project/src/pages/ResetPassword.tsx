import { useState } from 'react';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Logo />
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-semibold mb-2">Reset account password</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="New password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter new password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

          <Input
            label="Confirm new password"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm new password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            showPassword={showConfirmPassword}
            onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <Button type="submit" className="mt-6">
            Reset
          </Button>
        </form>
      </div>
    </div>
  );
}