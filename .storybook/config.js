import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withKnobs);
configure(require.context("../docs", true, /\.stories\.js$/), module);
