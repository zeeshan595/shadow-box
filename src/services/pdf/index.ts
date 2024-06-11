import * as pdfjsLib from 'pdfjs-dist';
import { importUnnaturalSelection } from './unnaturalSelection';

export enum Books {
  Unknown,
  CursedScrollOne,
  CursedScrollTwo,
  CursedScrollThree,
  UnnaturalSelection
};

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
export async function importShadowdarkBook(rawPdfData: string) {
  const pages = await getPdfPages(rawPdfData);
  const book = selectBook(pages);
  if (book === Books.UnnaturalSelection) {
  }
  switch (book) {
    case Books.UnnaturalSelection:
      await importUnnaturalSelection(pages);
      break;
    default:
      alert('Failed to import, unknown book');
  }
}

export function selectBook(pages: string[]): Books {
  if (pages[0].startsWith('Cursed Scroll Shadowdark Zine Vol. 1')) {
    return Books.CursedScrollOne;
  }
  if (pages[0].startsWith('Cursed Scroll Shadowdark Zine 2')) {
    return Books.CursedScrollTwo;
  }
  if (pages[0].startsWith('Cursed Scroll Shadowdark Zine 3')) {
    return Books.CursedScrollThree;
  }
  if (pages[1].endsWith('Unnatural Selection')) {
    return Books.UnnaturalSelection;
  }
  return Books.Unknown;
}

export async function getPdfPages(rawPdfData: string) {
  const rawData = atob(rawPdfData.replace('data:application/pdf;base64,', ''));
  const document = pdfjsLib.getDocument({ data: rawData });
  const pdf = await document.promise;

  let contentPerPage: string[] = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const text: string[] = [];
    for (const item of textContent.items) {
      if ('str' in item) {
        text.push(item['str']);
      }
    }
    contentPerPage.push(text.join(' '));
  }
  return contentPerPage;
}