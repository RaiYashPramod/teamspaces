import { AuthForm } from "@/components/auth/AuthForm";
import useAuthStore from "@/providers/auth-provider";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore(
    (state: { isLoggedIn: boolean }) => state.isLoggedIn
  );

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, []);

  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none font-mono lg:grid-cols-2 lg:px-0">
        <div className="relative hidden flex-col bg-muted p-10 text-white dark:border-r lg:flex h-screen">
          <div className="absolute inset-0 bg-zinc-900" />

          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link to={"/"}>
              <ChevronLeft />
            </Link>
            TeamSpaces
          </div>
          <div className="relative mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">Space to Manage Teams.</p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 my-32 p-4">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                SignIn/SignUp
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter Details below to signIn/signUp your account
              </p>
            </div>
            <AuthForm className={undefined} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking, you agree to our <br />
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
