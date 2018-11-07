import React from "react";

const ThemeSwitchButton = () => {
  return (
    <ThemeConsumer>
      {theme => <div>The theme color is {theme.color}.</div>}
    </ThemeConsumer>
  );
};

export default ThemeSwitchButton;
