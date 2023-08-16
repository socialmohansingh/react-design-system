type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;
export interface ColorTokens {
    brand: DesignBrandColor;
    interaction: InterActionColor;
    messaging: MessagingColor;
    neutral: DesignNeutralColor;
}
export interface DesignBrandColor {
    main: Color;
    secondary: Color;
    dark: Color;
    background: Color | null;
}
export interface InterActionColor {
    main: Color;
    hover: Color;
    pressed: Color;
}
export interface MessagingColor {
    error: Color;
    errorLight: Color;
    success: Color;
    successLight: Color;
    warning: Color;
    warningLight: Color;
    information: Color;
    informationLight: Color;
}
export interface DesignNeutralColor {
    black: Color;
    gray60: Color;
    gray50: Color;
    gray40: Color;
    gray20: Color;
    gray10: Color;
    gray05: Color;
    white: Color;
}
export declare const defaultDesignNeutralColor: DesignNeutralColor;
export {};
