# County Colorer

Utilities for filling in a US county map given css colors (e.g. hex or rgba) codes for each county.

## Clone & Install

`git clone https://github.com/csamp516/county-colorer`

`cd county-colorer`

`yarn install`

## Inputs

See counties.sample.csv for a sample of the CSV file. Included is the ISO ID (see the comments in the [Usa_counties_large.svg](https://en.m.wikipedia.org/wiki/File:Usa_counties_large.svg) for more info about filling in the SVG's style tag with data).

| county        | color   | id     |
| ------------- | ------- | ------ |
| "Houston, AL" | #54CC84 | c01069 |

The column ordering doesn't matter.

Save this file as `counties.csv` in the root of this directory.

## Run the Script

`node generate-css`

This will generate a CSS file called `counties.css`.

## Add the CSS to the SVG

Open the map SVG with a text editor. In the `style` tag of the SVG, add the CSS from the `counties.svg`.
