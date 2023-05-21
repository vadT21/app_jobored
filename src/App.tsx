import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import themeMantine from "./styles/mantine.styles";
import { router } from "./routing/Rounting";

function App() {
  return (
    <>
      <MantineProvider withNormalizeCSS theme={themeMantine}>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
