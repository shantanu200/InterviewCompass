export interface IMenu {
  label: string;
  route: string;
  isSelected: boolean;
  icon?: React.ReactNode;
}
export interface IAppBar {
  title: string;
  menuOptions: IMenu[];
  handleChange: (values: any) => void;
  selectedIndex: number;
  handleWidth: (values: any) => void;
  isFullScreen: boolean;
}
