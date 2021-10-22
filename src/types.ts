export type ConfigType = {
  classNames?: Array<string>;
  combinators?: Record<string, unknown>;
};

export interface IStyledComponent {
  css?: any,
  className?: string,
  as?: any,
  children?: React.ReactNode,
  [other: string]: any,
}