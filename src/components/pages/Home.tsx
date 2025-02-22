import { FC, memo } from "react";

import { Button, VStack } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

//TODO テスト
import { authStatusAtom, userIdAtom } from "@/atoms/authAtoms";
import { useAtom } from "jotai";

type FormData = {
  options: Record<string, boolean>;
};

const optionsList = ["Option 1", "Option 2", "Option 3"];

export const Home: FC = memo(() => {
  //TODO テスト
  const [authStatus] = useAtom(authStatusAtom);
  const [userId] = useAtom(userIdAtom);
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      options: Object.fromEntries(optionsList.map((option) => [option, false])),
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Selected options:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        {optionsList.map((option) => (
          <Controller
            key={option}
            name={`options.${option}`}
            control={control}
            render={({ field }) => (
              <Button
                colorScheme={field.value ? "green" : "gray"}
                onClick={() => field.onChange(!field.value)}
              >
                {option}: {field.value ? "ON" : "OFF"}
              </Button>
            )}
          />
        ))}
        <Button type="submit" colorScheme="blue">
          送信
        </Button>
        <p>
          {authStatus} : {userId}
        </p>
      </VStack>
    </form>
  );
});
