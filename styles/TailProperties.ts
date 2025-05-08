export default interface TailProperties {
  position?: string;
  box?: string;
  layout?: string;
  typo?: string;
  bg_border?: string;
  anime_transit?: string;
  transform?: string;
  interact?: string;
  etc?: string;
}

export function cn(properties: TailProperties): string {
  return [
    properties.position,
    properties.bg_border,
    properties.box,
    properties.layout,
    properties.typo,
    properties.anime_transit,
    properties.transform,
    properties.interact,
    properties.etc,
  ]
    .filter(Boolean) // Remove undefined/null/empty strings
    .join(" ") // Join into a single class string
    .trim(); // Ensure no leading/trailing space
}
