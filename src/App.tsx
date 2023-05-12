import { AppShell, Header } from "@mantine/core";
import { useState, useEffect } from "react";
import HeaderApp from "./components/header/HeaderApp";

import Rounting from "./routing/Rounting";
import PasswordAuthResponse from "./API/auth";
import { useTokenStore, useJobStore } from "./store";

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
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <HeaderApp />
          </Header>
        }
        styles={(theme) => ({
          main: {
            padding: "calc(var(--mantine-header-height, 0px)) 0 0 0",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {<Rounting />}
      </AppShell>
    </>
  );
}

export default App;
