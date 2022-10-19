export enum Locale {
  TR = 'TR',
  EN = 'EN',
}

export interface BlogPost {
  title?: string
  link?: string
  locale?: Locale
  description?: string
  date?: Date
}
