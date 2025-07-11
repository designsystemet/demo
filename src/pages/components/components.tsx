import {
  Card,
  Fieldset,
  Heading,
  type Size,
  ToggleGroup,
} from "@digdir/designsystemet-react";
import { useState } from "react";
import themeConfig from "../../../configs/demo.config.json";
import classes from "./components.module.css";
import * as samples from "./samples/";

const sizes: Size[] = ["sm", "md", "lg"];
const colorModes = ["light", "dark", "auto"];
const colors = [
  ...Object.keys(themeConfig.themes.demo.colors.main),
  ...Object.keys(themeConfig.themes.demo.colors.support),
  'neutral',
];


export const Components = () => {
  const [size, setSize] = useState<Size>("sm");
  const [colorMode, setColorMode] = useState("auto");
  const [color, setColor] = useState("neutral");
  return (
    <>
      <div className={classes.container} data-size="sm">
        <Fieldset>
          <Fieldset.Legend>
            Størrelse
            <code data-size="xs">(data-size)</code>
          </Fieldset.Legend>
          <ToggleGroup value={size} onChange={(val) => setSize(val as Size)}>
            {sizes.map((size) => (
              <ToggleGroup.Item key={size} value={size}>
                {size}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup>
        </Fieldset>
        <Fieldset>
          <Fieldset.Legend>
            Fargemodus
            <code data-size="xs">(data-color-scheme)</code>
          </Fieldset.Legend>
          <ToggleGroup value={colorMode} onChange={setColorMode}>
            {colorModes.map((colorMode) => (
              <ToggleGroup.Item key={colorMode} value={colorMode}>
                {colorMode}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup>
        </Fieldset>
        <Fieldset>
          <Fieldset.Legend>
            Farge
            <code data-size="xs">(data-color)</code>
          </Fieldset.Legend>
          <ToggleGroup value={color} onChange={setColor}>
            {colors.map((color) => (
              <ToggleGroup.Item key={color} value={color}>
                {color}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup>
        </Fieldset>
      </div>
      <div
        className={classes.container}
        data-size={size}
        data-color-scheme={colorMode}
        data-color={color}
      >
        {Object.entries(samples).map(([name, Component]) => {
          if (typeof Component === "function") {
            return (
              <Card key={name}>
                <Heading>{name.slice(0, -6)}</Heading>
                <Component />
              </Card>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};
