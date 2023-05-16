import { AppShell, MantineProvider } from "@mantine/core";
import { useEffect } from "react";
import HeaderApp from "./components/headerApp/HeaderApp";

import Rounting from "./routing/Rounting";
import PasswordAuthResponse from "./API/auth";
import { useTokenStore, useJobStore } from "./store";
import theme from "./styles/mantine.styles";

function App() {
  const addSecretToken = useTokenStore((state) => state.addSecretToken);
  const secretToken = useTokenStore((state) => state.secretToken);

  const fetchCatalogues = useJobStore((state) => state.fetchCatalogues);
  useEffect(() => {
    async function fetchData() {
      try {
        if (!secretToken) {
          console.log("work token fetch");
          const token = await PasswordAuthResponse();
          addSecretToken(token);
        }
      } catch (error) {
        console.error(error);
      }
      if (secretToken) {
        console.log("fetch cat");

        await fetchCatalogues(secretToken);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <MantineProvider withNormalizeCSS theme={theme}>
        <AppShell
          padding="md"
          header={<HeaderApp />}
          styles={(theme) => ({
            main: {
              padding: "124px 0 0 0",
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
              [theme.fn.smallerThan("sm")]: {
                padding: "96px 0 0 0",
              },
            },
          })}
        >
          {<Rounting />}
        </AppShell>
      </MantineProvider>
    </>
  );
}

export default App;
