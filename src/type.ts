export interface PriceTable {
  viewRange: string;
  price: number;
}

export interface PriceProps {
  onSliderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sliderValue: number;
  switchChecked: boolean;
  onSwitchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickTrail: (event: React.MouseEvent<HTMLElement>) => void;
  viewRange: string;
  price: number;
  trail: boolean;
}
