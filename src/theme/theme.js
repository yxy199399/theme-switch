import theme from "./theme.scss";
const themeChange = color => {
  theme.colorPrimary = color;
};
export default {
  theme
};
export { themeChange };
