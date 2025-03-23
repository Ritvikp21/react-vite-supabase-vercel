import { memo } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import AccountForm from "../../containers/AccountForm";
import supabase from "../../utils/supabase";
import { Login } from "@mui/icons-material";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const result = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!result.error) {
      navigate("/");
      toast.success("Welcome!");
    } else if (result.error?.message) {
      toast.error(result.error.message);
    }
  };

  return (
    <>
      <h1>Log in</h1>
      <AccountForm onSubmit={handleLogin} />
    </>
  );
};

export default memo(LoginForm);
