# Radial Dial Coding Challenge

This project was done as the pre interview coding challenge for Circl.es.

The design for the challenge looked like this.
![Circl.es Circle Entry.pnd](https://cdn.discordapp.com/attachments/202257159428374528/885449886068260894/Circle_Entry.png)

For this project I was instructed to use React and supplied with the two SVG used as Icons.

My choice for this project was to use sass to handle my styling but because I needed some elements to have procedural 
styling I used a combination of Sass and JSS.


My best guess at the colors are as follows:

#### Dark color is the background
- $darkColor: #2B74A1;
#### Medium color is Unlit
- $mediumColor: rgba(115,133,145,0.65);
#### Light color is Lit
- $lightColor: rgba(255,255,255,.676);
#### Transparent Color Is the main item background color
- $transparentColor: rgba(255,255,255,.21);
#### Red is the Broken color
- $red: #C42E2E;
#### Font color is for the text and icons
- $fontColor:#EBF1F5;


### My additions
Not included in the design but features I added include
- A React Context to manage testing.
- A Button array to add different indicators to show off the design.
- Hover Animations on the buttons.
- The Component supports a dynamic number of indicators.
  - For this I also added a feature in which the icons on the broken indicators hide when the number of indicators exceeds 12 to stop the design looking cramped.
