import { extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "body.chakra-ui-light": {
        bg: "#fff800",
      },
    },
  },
  fonts: {
    body: `'Urbanist Variable', sans-serif`,
    heading: `Karla Variable, latin`,
  },
});

export default theme;
