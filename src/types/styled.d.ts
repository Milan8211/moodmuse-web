import "styled-components";
import { themes } from "moodmuse-ui";

// Infer the type of a single theme from the themes object
type MoodMuseTheme = (typeof themes)["softclay"];

// Extend the DefaultTheme interface from styled-components
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MoodMuseTheme {}
}
