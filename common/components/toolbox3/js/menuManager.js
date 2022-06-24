import { ToolboxMenu } from "./menu.js";

const rx = rxjs;

const SelectorClasses = {
  Menu: ".irm-toolbox__menu",
  Divider: ".irm-toolbox__divider",
};

const MutationClasses = {
  dividerLayoutColumn: "is-layout--column",
  dividerAlignSelfCenter: "is-state--align-self-center",
};

export class ToolboxMenusManager {
  constructor() {
    this._init();
  }

  // private
  _init() {
    const menus = [...document.querySelectorAll(SelectorClasses.Menu)].map(
      (it) => new ToolboxMenu(it)
    );
    this._menus = menus;

    this._divider = document.querySelector(".irm-toolbox__divider");
  }

  _setMenusLayout(layout) {
    this._menus.forEach((it) => it.setLayout(layout));
  }

  _setDividerLayout(isLayoutColumn) {
    if (isLayoutColumn) {
      return this._divider.classList.add(MutationClasses.dividerLayoutColumn);
    }

    return this._divider.classList.remove(MutationClasses.dividerLayoutColumn);
  }

  _setDividerAlignSelfCenter(isAlignSelfCenter) {
    if (isAlignSelfCenter)
      return this._divider.classList.add(
        MutationClasses.dividerAlignSelfCenter
      );

    return this._divider.classList.remove(
      MutationClasses.dividerAlignSelfCenter
    );
  }

  _setHideIconName(isHideIconName) {
    this._menus.forEach((it) => it.setHideIconName(isHideIconName));
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    if (isLayoutColumn) {
      this._setDividerLayout(true);
      return this._setMenusLayout("columnTwo");
    }

    this._setDividerLayout(null);
    return this._setMenusLayout(null);
  }

  setHideIconName(isHideIconName) {
    this._setHideIconName(isHideIconName);
    this._setDividerAlignSelfCenter(isHideIconName);
  }
}