import { extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "body.chakra-ui-light": {
        bg: "#1c1a1b",
      },
    },
  },
  fonts: {
    body: `'Urbanist Variable', sans-serif`,
    heading: `Karla Variable, latin`,
  },
});

export default theme;
