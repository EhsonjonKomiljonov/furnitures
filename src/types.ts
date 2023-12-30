export type LangType = {
  lang: string;
  setLang: (lang: string) => void;
};

export type GreenBtnProp = {
  text: string,
  tag?: string,
  path?: string,
}