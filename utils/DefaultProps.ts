export default interface DefaultProps<T> {
  className?: string;
  id?: string;
  title?: string;
  children?: any;
  data?: T;
  onClick?: (...args: any[]) => any;
  render?: (...args: any[]) => any;
}
