# THEORIE VON CSS, PPEDV EDITION

ppedv AG, Vadzim Naumchyk

<img src="css-images/css-logo.png" alt="css-logo" height="300"/>

## CSS > GETTING STARTED

<!-- #region IDEA -->

### CSS > GETTING STARTED > IDEA OF CSS

WAS IST CSS

- cascading style sheets
- style language
- Keine Programmiersprache
- Aktuelle Version 3
  
WOZU IST CSS

- definiert Stile für Auszeichnungssprachen
- solche wie HTML, XML, XHTML, SVG …

<!-- #endregion -->
<!-- #region LINKS -->

### CSS > GETTING STARTED > LINKS

- OFFIZIELLE HOMEPAGE: <https://www.w3.org/Style/CSS/>
- OFFIZIELLE DOCS:
  - <https://www.w3.org/TR/>
  - <https://www.w3.org/TR/CSS/#css>
- ALTERNATIVE DOCS:
  - <https://developer.mozilla.org/en-US/docs/Web/CSS>
  - <https://www.w3schools.com/css/default.asp>
- OFFIZIELLES BLOG: <https://www.w3.org/blog/CSS/>
- ALTERNATIVE BLOGS:
  - <https://www.smashingmagazine.com/category/css>
- OFFIZIELLER CODE: kein open source

<!--
http://caniuse.com
Caniuse: zeigt Up-to-date Browser-Support-Tabellen für die Unterstützung von Front-End-Web-Technologien auf Desktop- und mobile Web-Browser
https://hacks.mozilla.org/category/css/
Referenzen
Default Values  https://www.w3schools.com/cssref/css_default_values.asp
Browsersupport
https://www.w3schools.com/cssref/css3_browsersupport.asp
BLOGS:
https://hacks.mozilla.org/category/css/
https://www.smashingmagazine.com/category/css
VLOGS:
https://www.youtube.com/channel/UCh5UlGiu9d6LegIeUCW4N1w
-->

<!-- #endregion -->
<!-- #region TOOLS -->

### CSS > GETTING STARTED > TOOLS

OBLIGATORISCH IN DIESEM KURS

- VSCODE & IntelliSense in VSCode z.B.

OPTIONAL

- Firefox CSS DevTools oder DevTools von anderen Browsern
- verschiedene Formatter
- VSCODE ERWEITERUNG HTML CSS Support (ecmel)

[zurück zu ABLAUF.md](../ABLAUF.md#m02--css-getting-started)

<!-- #endregion -->

## CSS > SYNTAX

<!-- #region RULE -->

### CSS > SYNTAX > RULE

Am meisten genutzter CSS-Ausdruck ist eine CSS-Regel. Damit fangen wir an. Die CSS-Regel besteht aus einem Bereich für CSS-Selektoren und einem Bereich für CSS-Deklarationen:

```css
Selektorenbereich { Deklarationenbereich }
```

Die geschweiften Klammern sind obligatorisch.

Reales Beispiel:

```css
p { margin: 10px }
```

Diese CSS-Regel definiert den Abstand zwischen den Paragraphen auf 10 Pixel.

<!-- #endregion -->
<!-- #region DECLARATION -->

### CSS > SYNTAX > DECLARATION

Wenn es im Deklarationenbereich mehrere Deklarationen aufgelistet sind, dann schreibt man das Ganze für die bessere Lesbarkeit auch so:

```css
Selektorenbereich {
  Deklaration;
  Deklaration;
}
```

Reales Beispiel:

```css
p {
  margin: 10px;
  color: green;
}
```

Es ist zu beachten: Hat man mehr als eine Deklaration im Deklarationenbereich (Deklarationsblock), so ist jede Deklaration mit einem Semikolon zu beenden.

<!-- #endregion -->
<!-- #region PROPS -->

### CSS > SYNTAX > PROPS

Wie man sieht, in jeder Deklaration findet sich ein Doppelpunkt. Wie bei HTML-Attributen handelt es sich bei CSS-Deklarationen um bestimmte Eigenschaften, die bestimmte Werte bekommen. Nur anstatt von Gleichheitszeichen verwendet man hier den Doppelpunkt, um die eigenen Werte zuzuweisen.

```css
Selektorenbereich {
  CSS-Eigenschaft: Wert;
  CSS-Eigenschaft: Wert;
}
```

Wie bei HTML-Attributen erwarten konkrete CSS-Eigenschaften ihre Werte in einem passenden Format.
`margin` akzeptiert CSS-Größenangaben, um die Abstände zu berechnen.
`color` akzeptiert Farbenangaben.

Weitere Informationen direkt in css-syntax.css, damit Du die Code-Beispiele auch direkt austesten kannst.

[zurück zu ABLAUF.md](../ABLAUF.md#m05--css-syntax)

<!-- #endregion -->