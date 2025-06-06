"use client";

import { Box, Button, Flex, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { createClient } from "@supabase/supabase-js";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { toaster, Toaster } from "../ui/toaster";
import { authStatusAtom, userIdAtom } from "@/atoms/authAtoms";

//TODO supabaseの認証情報用のコンポーネントに外出しする
const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);

interface FormValues {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [authStatus, setAuthStatus] = useAtom(authStatusAtom);
  const [, setUserId] = useAtom(userIdAtom);

  const onSubmit = handleSubmit((data) => signIn(data));

  //TODO サインイン成功時の処理（画面遷移）、失敗時の画面表示
  async function signIn(formData: FormValues) {
    setAuthStatus("loading");
    const { email, password } = formData;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Error signing in:", error.message);
      setAuthStatus("ng");
      toaster.create({
        title: "データの取得に失敗しました",
        type: "error",
      });
    } else {
      console.log("Sign-in successful!");
      console.log("User data:", data);
      setAuthStatus("ok");
      setUserId(data.user?.id || null);
      console.log(authStatus);
      navigate("/home");
    }
  }

  return (
    <>
      <Toaster />
      <Flex justify="center" align="center" h="100vh">
        <VStack>
          <Heading as="h1" size="lg" mb="4">
            kajilog
          </Heading>
          <Box bg="gray.100" p="8" rounded="md">
            <form onSubmit={onSubmit}>
              <Stack gap="4" align="flex-start" maxW="sm">
                <Field label="Email" invalid={!!errors.email} errorText={errors.email?.message}>
                  <Input {...register("email", { required: "E-mail is required" })} bg={"white"} />
                </Field>

                <Field
                  label="Password"
                  invalid={!!errors.password}
                  errorText={errors.password?.message}
                >
                  <PasswordInput
                    {...register("password", { required: "Password is required" })}
                    bg={"white"}
                  />
                </Field>

                <Button
                  type="submit"
                  color={"gray.100"}
                  bg={"teal.500"}
                  _hover={{ bg: "teal.600" }}
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};
