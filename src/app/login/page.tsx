// Importing the SignInForm component from the 'login' directory.
// Importing the NavBar component from the 'components/ui' directory.
import LoginForm from '@/app/login/SignInForm';
import NavBar from '@/app/components/ui/NavBar';

// Default export for the LoginPage component.
export default function LoginPage() {
  return (
    <div>
      {/* Rendering the NavBar component */}
      <NavBar />
      {/* Rendering the LoginForm component */}
      <LoginForm />
    </div>
  );
};