import { FC, memo } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "qqqqq@gmail.com",
    password: "aaaaa",
  });
  if (error) {
    console.error("Error signing in:", error.message);
    console.log("User data:", data);
  } else {
    console.log("Sign-in successful!");
    console.log("User data:", data);
  }
}

export const Login: FC = memo(() => {
  return <button onClick={signIn}>Sign Up</button>;
});
