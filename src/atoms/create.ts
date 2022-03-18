import { atom } from "jotai";

interface CreateAtom {
  file?: FileContent;
  name?: string;
  description?: string;
  support?: string;
  quorum?: string;
}

interface FileContent {
  lastModified: number;
  name: string;
  content: string;
}

export const createFormAtom = atom<CreateAtom>({
  name: "Your name",
  description: "Add a description",
  support: "50",
  quorum: "50",
});
