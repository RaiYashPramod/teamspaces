import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import useAuthStore from "@/providers/auth-provider";

const Navbar = () => {
  const isLoggedIn = useAuthStore((state: { isLoggedIn: any; }) => state.isLoggedIn)

  return (
    <>
      <div className="lg:p-12 p-4">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text">TeamSpace</h1>
          <div className="flex gap-4">
            <ModeToggle />
            <Link to={isLoggedIn ? "/dashboard" : "/login"}>
              <Button className="font-mono text-xl">
                {isLoggedIn ? "Dashboard" : "Login"}
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
