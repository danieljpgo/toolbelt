import { cn } from "../lib/tailwindcss";

type TextProps = {
  children: string | React.ReactNode;
  /**
   * Defines which tag should be rendered.
   * @default as: 'h2'.
   */
  as?: keyof typeof tags;
  /**
   * Defines which size should be used.
   * @default size: 'base'.
   */
  size?: keyof typeof sizes;
  /**
   * Defines which weight should be used.
   * @default weight: 'normal'.
   */
  weight?: keyof typeof weights;
  /**
   * Defines which color should be used.
   * @default color: 'dark'.
   */
  color?: keyof typeof colors;
  /**
   * Defines which tracking should be used.
   */
  tracking?: keyof typeof trackings;
  /**
   * Defines which style should be used.
   */
  style?: keyof typeof styles;
  /**
   * Defines which decoration should be used.
   */
  decoration?: keyof typeof decorations;
};

/**
 * `<Text/>` component.
 *
 * Renders a text with customizable tag, size, weight, tracking, and color.
 *
 * @example
 * ```tsx
 * return (
 *  <Text as="small" size="xs" color="light">
 *    Lorem
 *  </Text>
 * );
 * ```
 */

export function Text(props: TextProps) {
  const {
    children,
    color = "base",
    as = "p",
    size = "base",
    weight = "normal",
    decoration,
    style,
    tracking,
  } = props;
  const Tag = as;

  return (
    <Tag
      className={cn(
        sizes[size],
        weights[weight],
        colors[color],
        style && styles[style],
        decoration && decorations[decoration],
        tracking && trackings[tracking],
      )}
    >
      {children}
    </Tag>
  );
}

const colors = {
  lighter: "text-gray-500",
  light: "text-gray-600",
  base: "text-gray-700",
  dark: "text-gray-800",
  darker: "text-gray-900",
} as const;

const sizes = {
  "2xs": "text-[10px]",
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
} as const;

const tags = {
  p: "p",
  b: "b",
  i: "i",
  strong: "strong",
  em: "em",
  small: "small",
} as const;

const weights = {
  thin: "font-thin",
  "extra-light": "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
} as const;

const trackings = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
} as const;

const styles = {
  italic: "italic",
} as const;

const decorations = {
  underline: "underline",
  "line-through": "line-through",
} as const;

// const colors = {
//   lighter: "text-gray-400",
//   light: "text-gray-500",
//   base: "text-gray-600",
//   dark: "text-gray-700",
//   darker: "text-gray-800",
//   contrast: "text-white",
//   error: "text-red-400",
//   success: "text-green-500",
//   secondary: "text-blue-500",
// } as const;

// @TODO add the leading?
