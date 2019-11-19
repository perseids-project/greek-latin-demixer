import { createI18n } from 'react-router-i18n';

const locales = ['en'];

const translations = {
  en: {
    title: 'Greek Latin Demixer',
    newDoc: 'New Document',
    input: {
      title: 'Greek and Latin Demixer',
      instructions: 'Enter text that contains Greek and Latin characters below.',
      text: 'Text',
      go: 'Go!',
    },
    output: {
      viewText: 'View Text',
      latinText: 'Latin text is blue. ',
      greekText: 'Greek text is red. ',
      click: 'Click on a word to edit it.',
      latin: 'Latin',
      greek: 'Greek',
      custom: 'Custom',
      copy: 'Copy to Clipboard',
    },
    shortcuts: {
      title: 'Keyboard shortcuts',
      move: ': move through the document',
      latinButton: ': click Latin button',
      greekButton: ': click Greek button',
      customInput: ': go to Custom input',
      customButton: ' (in custom input): click Custom button',
    },
  },
};

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;
