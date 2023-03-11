import { CSSProperties } from "react";
import { Theme } from "./schemas/shared";

export const themeToCssProps = (theme?: Theme): CSSProperties => {
  let cssProps: React.CSSProperties = {
    backgroundColor: "var(--bs-body-bg)",
    color: "var(--bs-body-color)",
    fontFamily: "var(--bs-body-font-family)",
  };

  if (theme) {
    if (theme.bodyBg)
      cssProps = {
        ...cssProps,
        "--bs-body-bg": theme.bodyBg,
      } as React.CSSProperties;

    if (theme.bodyColor)
      cssProps = {
        ...cssProps,
        "--bs-body-color": theme.bodyColor,
      } as React.CSSProperties;

    if (theme.fontFamily) {
      switch (theme.fontFamily) {
        case "Asul":
          cssProps = {
            ...cssProps,
            "--bs-body-font-family": `'${theme.fontFamily}', sans-serif`,
          } as React.CSSProperties;
          break;
        case "Freckle Face":
        case "Mali":
          cssProps = {
            ...cssProps,
            "--bs-body-font-family": `'${theme.fontFamily}', cursive`,
          } as React.CSSProperties;
          break;
        default:
          cssProps = {
            ...cssProps,
            "--bs-body-font-family": `'${theme.fontFamily}'`,
          } as React.CSSProperties;
      }
    }
  }

  return cssProps;
}
