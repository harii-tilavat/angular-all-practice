export class MenuList {
  id!: number;
  label!: string;
  routing!: string | string[] | null;
  subMenu: MenuList[] = [];
}
