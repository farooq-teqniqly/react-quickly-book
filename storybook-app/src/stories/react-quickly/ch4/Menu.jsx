import { MenuItem } from "./MenuItem";

export const Menu = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        <MenuItem target="_blank" href="//espn.com">
          ESPN
        </MenuItem>
        <MenuItem target="_blank" href="//bing.com">
          Bing
        </MenuItem>
        <MenuItem target="_blank" href="//ford.com">
          Ford
        </MenuItem>
      </ul>
    </nav>
  );
};
