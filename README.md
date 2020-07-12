## INTRO

Retail facing AirController Website

Uses i18n multi-lingual package



## STEPS FOR DEPLOYMENT

0. 
1. 
2. 


## Basic Configuration

- `iconName` in Services.md MUST be defined in `'config/CustomIcons.jsx'`.

- `imageFileName` in markdown MUST be added in `'content/assets'`.

- all configurable contents are saved in markdown files in `'content'` folder.

- change `file name's number` in `'content/sections'` folder to change the sort order.

- nullable items (if defined):
  
  - `anchor` in section markdown: display in menu if defined in sections' markdown
  - items in `social`: `twitter, facebook, linkedin, github, medium`
  - `jumpToAnchor, jumpToAnchorText` in Top.md: add button in Top section

## i18n Configuration

- set defaultLang in `'config/site.js'`

- add langTextMap to `'config/site.js'` (LanguageSelector won't display if langTextMap is not defined. Consider using [StaticQueryVersion](#note) if i18n is not necessary)

- copy markdown files in `'content'` folder, rename it to `xxxx.[langKey].md` and translate the contents

## Licenses and Recognitions

This project is licensed under the terms of the [MIT license](/LICENSE).

This Gatsby site was made with:

![startbootstrap-agency](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/startbootstrap-agency.png)
