export enum FontSize {
  'extra-small' = '12px',
  'small' = '14px',
  'medium' = '16px',
  'subheading' = '18px',
  'heading' = '28px',
  'title' = '42px',
}

export enum FontTypeface {
  standard = 'ArialMT',
  calibri = 'Calibri',
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
  secondaryFamily: string;
}
