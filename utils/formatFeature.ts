export const formatFeature = (value: string) =>
  value.replace(/([a-z])([A-Z])/g, "$1 $2");
