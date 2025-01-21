import logo from '../logo.svg';  // Path to the logo file in 'src/assets'

export default function Logo() {
  return (
    <div className="flex flex-col items-center mb-6">
      <img
        src={logo}  // Use the imported logo
        alt="CaliVision Logo"
        className="w-24 h-auto mb-2"
      />
      <h1 className="text-white text-2xl font-semibold">CaliVision</h1>
      <p className="text-white/80 text-sm">EMPOWER YOUR MOVEMENT</p>
    </div>
  );
}
