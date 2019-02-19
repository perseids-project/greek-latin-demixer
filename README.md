# Greek Latin Demixer

Τhis is a tool for processing texts that contain a mixture of Latin and Greek characters.
Ιt can be difficult to see the difference between certain characters and ΟCR software may
mix up some letters. Ιn fact, in this paragraph there is a tau, an omicron, and two iotas mixed
in with the Latin characters.

## Try it Out

[https://apps.perseids.org/demixer/](https://apps.perseids.org/demixer/)

### How to Use

Enter text that contains a mixture of Greek and Latin characters in the text box and press `Go!`.
This takes you to a page that shows you the Latin characters in blue and the Greek characters in red.

Click on one of the words. On the left-hand side of the screen there are three sections: `Latin`, `Greek`,
and `Custom`. The `Latin` section shows what the word would look like if all characters were replaced with Latin
characters. The `Greek` section shows what it would look like if replaced with Greek characters. For example,
`aε` would be `ae` in the Latin section and `αε` in the Greek section.

Clicking the `Latin` or `Greek` button will insert the respective suggestion.

The `Custom` section allows any input. Clicking the `Custom` button will insert the text in the `Custom` input.


## Installation

`yarn install`

## Running the development server

`yarn start`

## Deploying a new version to github.io

`yarn deploy-github`

## Deploying a new version to Perseids

`yarn deploy-perseids`
