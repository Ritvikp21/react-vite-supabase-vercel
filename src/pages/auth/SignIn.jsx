import { memo } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import AccountForm from "../../containers/AccountForm";
import supabase from "../../utils/supabase";

const SignIn = () => {
  const navigate = useNavigate();

  const signIn = async (email, password) => {
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
      <h1>Sign In</h1>
      <AccountForm onSubmit={signIn} />
    </>
  );
};

export default memo(SignIn);
