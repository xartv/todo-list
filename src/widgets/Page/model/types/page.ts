// key - роут страницы, value - число в пикселях от начала страницы
export type ScrollSchema = Record<string, number>;

export interface PageSchema {
  scroll: ScrollSchema;
}
