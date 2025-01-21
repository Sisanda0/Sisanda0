import { Activity } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex flex-col items-center mb-6">
      <Activity size={48} className="text-white mb-2" />
      <h1 className="text-white text-2xl font-semibold">CaliVision</h1>
      <p className="text-white/80 text-sm">EMPOWER YOUR MOVEMENT</p>
    </div>
  );
}