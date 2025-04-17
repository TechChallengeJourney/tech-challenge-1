'use client';
import { BytebankIllustration, BytebankButton, BytebankText, palette, BytebankProvider as Provider } from "@bytebank/shared";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";


export default function NotFound() {
  const router = useRouter();
  const handleRedirect = () => router.replace('/');

  return (
    <>
      <Provider.BytebankProvider canNavigate={false}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} flexGrow={1} gap={2}>
          <BytebankIllustration name={"error"} />

          <BytebankText variant={"lg"} color={palette["grey.900"]}> Ops! Não encontramos a página... </BytebankText>
          <BytebankText variant={"sm"} color={palette["grey.900"]}>  E olha que exploramos o universo procurando por ela!
            Que tal voltar e tentar novamente?</BytebankText>
          <Box marginTop={4}>
            <BytebankButton label="Voltar ao início" variant={"contained"} color={"secondary"} sendSubmit={() => handleRedirect()} />
          </Box>
        </Box>
      </Provider.BytebankProvider>
    </>
  );
}