/// <reference types="vite/client" />
type Book = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  image: string;
  url: string;
};

type BookExtended = {
  status: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  authors: string;
  publisher: string;
  pages: string;
  year: string;
  image: string;
  url: string;
  download: string;
};
