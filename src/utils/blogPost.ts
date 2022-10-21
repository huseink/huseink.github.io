export enum Locale {
  TR = 'TR',
  EN = 'EN',
}

export interface BlogPost {
  title?: string
  locale?: Locale
  description?: string
  date?: Date
}
