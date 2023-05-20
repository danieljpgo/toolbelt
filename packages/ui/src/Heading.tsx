import { cn } from "../lib/tailwindcss";

type HeadingProps = {
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
};

/**
 * `<Heading/>` component.
 *
 * Renders a heading with customizable tag, size, weight, tracking, and color.
 *
 * @example
 * ```tsx
 * return (
 *  <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
 *    Lorem
 *  </Heading>
 * );
 * ```
 */
export function Heading(props: HeadingProps) {
  const {
    children,
    as: tag = "h2",
    size = "base",
    weight = "normal",
    color = "dark",
    tracking,
  } = props;
  const Tag = tag;

  return (
    <Tag
      className={cn(
        sizes[size],
        weights[weight],
        colors[color],
        tracking && trackings[tracking],
      )}
    >
      {children}
    </Tag>
  );
}

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

const sizes = {
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
} as const;

const colors = {
  base: "text-gray-700",
  dark: "text-gray-800",
  darker: "text-gray-900",
} as const;

const trackings = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
} as const;

const weights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
} as const;

// @TODO add the leading?
