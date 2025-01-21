import { InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export default function Input({ label, showPassword, onTogglePassword, ...props }: InputProps) {
  const isPassword = props.type === 'password';

  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-medium mb-2">
        {label.toUpperCase()}
      </label>
      <div className="relative">
        <input
          {...props}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/40"
        />
        {isPassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}