export type LangStoreType = {
  lang: string;
  setLang: (lang: string) => void;
};

export type SaveStoreType = {
  savedData: {
    id: number;
    img: string;
    img_link?: string;
    title: string;
    name?: string;
    desc: string;
    description?: string;
    price: number;
    sale_price?: number;
  }[];
  setSavedData: (savedData: {}[]) => void;
};

export type GreenBtnProp = {
  text: string;
  tag?: string;
  path?: string;
  type?: 'submit' | 'button' | 'reset',
};

export type SaleFurnituresCardProp = {
  obj: {
    id: number;
    img_link?: string;
    name?: string;
    description?: string;
    price: number;
    sale_price?: number;
  };
  path?: string;
};

export type AllFurnituresCardProp = {
  obj: {
    id: number;
    img: string;
    title: string;
    desc: string;
    price: number;
  };
  path?: string;
};

export type ContactUsFormValues = {
  phone_number: string
}