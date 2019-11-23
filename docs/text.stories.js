import React from "react";

import { storiesOf } from "@storybook/react";
import Text from "../src/design-system/text";

import { select, boolean } from "@storybook/addon-knobs";

storiesOf("Text", module).add("basic Text", () => (
  <Text
    size={select(
      "텍스트 사이즈",
      ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"],
      "small" // default 값
    )}
    bold={boolean("굵게", false)}
  >
    ㅌㅔㄱ스트
  </Text>
));
