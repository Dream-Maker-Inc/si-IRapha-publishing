import { BaseIcon } from "./base/icon.js";

export class NavigateNextIcon extends BaseIcon {
  constructor({ element, isActive$, disabled$, onClick }) {
    super({ element, isActive$, disabled$, onClick });
    element.innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg viewBox="0 0 24 24" data-testid="NavigateNextRoundedIcon"><path d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg>
`;
