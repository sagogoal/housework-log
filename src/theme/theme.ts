//TODO テーマが適応できず、エクスポートしているsystemは利用していない。

import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react";
import { defineLayerStyles } from "@chakra-ui/react";

const layerStyles = defineLayerStyles({
  container: {
    description: "container styles",
    value: {
      background: "gray.100",
      border: "1px solid",
      borderColor: "gray.800",
    },
  },
});

const config = defineConfig({
  theme: {
    layerStyles,
  },
});

export const system = createSystem(defaultBaseConfig, config);
