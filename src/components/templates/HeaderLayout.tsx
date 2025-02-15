import { memo, FC } from "react";
import { Header } from "../organisms/Header";

type Props = {
  children: React.ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
