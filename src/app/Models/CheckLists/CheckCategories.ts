interface ISelectedCategory {
  isSelected: boolean;
  categoryName: string;
}
export class SelectedCategory implements ISelectedCategory {
  constructor(public isSelected: boolean, public categoryName: string) {}
}
