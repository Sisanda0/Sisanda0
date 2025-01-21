# CaliVision - Authentication System

A modern authentication system built with React, TypeScript, and Tailwind CSS. Features a beautiful gradient design with a complete authentication flow including sign in, sign up, password recovery, and password reset functionality.

## Features

- 🔐 Complete authentication flow
- 🎨 Modern gradient design
- 📱 Fully responsive
- ⚡ Built with Vite for fast development
- 🔍 Type-safe with TypeScript
- 🎯 Form validation
- 👁️ Password visibility toggle
- 🔄 Remember me functionality

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)
- React Router DOM
- React Hot Toast (for notifications)

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd calivision
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Logo.tsx
├── pages/         # Page components
│   ├── SignIn.tsx
│   ├── SignUp.tsx
│   ├── ForgotPassword.tsx
│   └── ResetPassword.tsx
└── App.tsx        # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.