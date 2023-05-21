import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HeaderApp from "../components/headerApp/HeaderApp";
import { useStyles } from "./Layout.style";
import { useTokenStore } from "../store";
import LoaderApp from "../components/loader/LoaderApp";

export const Layout = () => {
  const { classes } = useStyles();
  const fetchSecretToken = useTokenStore((state) => state.fetchSecretToken);
  const loadingToken = useTokenStore((state) => state.loading);

  useEffect(() => {
    fetchSecretToken();
  }, []);

  return (
    <>
      {loadingToken ? (
        <LoaderApp />
      ) : (
        <AppShell header={<HeaderApp />} classNames={classes}>
          <Outlet />
        </AppShell>
      )}
    </>
  );
};
