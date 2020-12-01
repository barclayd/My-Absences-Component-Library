export enum FontSize {
  'extra-small' = '12px',
  'small' = '14px',
  'medium' = '16px',
  'subheading' = '18px',
  'heading' = '24px',
  'title' = '42px',
}

export enum FontTypeface {
  standard = 'ArialMT',
}

export enum FontWeight {
  standard = '500',
  bold = '600',
  extraBold = '800',
}

export interface Font {
  typeface: FontTypeface;
  family: string;
  size: FontSize;
  weight: FontWeight;
}
