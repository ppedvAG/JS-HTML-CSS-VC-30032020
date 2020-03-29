# ABLAUF VOM KURS

[git commands](./COMMANDS-GIT.md)

[text editor shortcuts](SHORTCUTS-EDITOR.md)

[vscode shortcuts](SHORTCUTS-VSCODE.md)

## M00 | WARMING UP

- [x] Greeter
- [x] VS Code kennenlernen
- [x] Git, GitHub, Repository

## M01 | HTML GETTING STARTED

- [x] [HTML.md getting started](./theory-app/slides/HTML.md#html--getting-started)
- [x] [html-helloworld.html](./theory-app/html-helloworld.html) <!-- Beim ersten Mal klick einfach auf den Link, um die Datei anzulegen -->
- [x] browser developer tools > elements

## M02 | CSS GETTING STARTED

- [x] [CSS.md getting started](./theory-app/slides/CSS.md#css--getting-started)
- [x] [css-helloworld.css](./theory-app/css-helloworld.css) <!-- Beim ersten Mal klick einfach auf den Link, um die Datei anzulegen -->
- [x] browser developer tools > style

## M03 | JS GETTING STARTED

- [x] [JS.md getting started](./theory-app/slides/JS.md#js--getting-started)
- [x] [js-helloworld.js](./theory-app/js-helloworld.js) <!-- Beim ersten Mal klick einfach auf den Link, um die Datei anzulegen -->
- [x] browser developer tools > console

## M04 | HTML SYNTAX

- [x] [HTML.md - HTML Syntax](./theory-app/slides/HTML.md#html--syntax)
- [x] [html-entities.html](./theory-app/html-entities.html)
- [x] [html-tags.html](./theory-app/html-tags.html)
- [x] [html-syntax.html](./theory-app/html-syntax.html)
- [x] browser developer tools > elements > properties
- [x] [html-attributes-global.html](./theory-app/html-attributes-global.html)

## Übung: Homepage mit verlinkten Unterseiten

index.html
index.css
index.js

html-start.html
css-start.html
js-start.html

Es muss die Möglichkeit geben, unter den 4 html-Dateien hin und her zu navigieren.

<!-- <a href=""></a> -->

## M05 | CSS SYNTAX

- [x] [CSS.md - CSS Syntax](./theory-app/slides/CSS.md#css--syntax)
- [x] [css-syntax.css](./theory-app/css-syntax.css)
- [x] [css-properties.html](./theory-app/css-properties.html)
- [x] [css-selectors.html](./theory-app/css-selectors.html)
- [x] [css-units.html](./theory-app/css-units.html)

## Übung2

das erste Kind von body soll ein container sein.
Durch diesen Container wird der Abstand zum Browser-Rand beeinflusst.

commited

## M06 | JS SYNTAX

- [x] Ausdrücke & Anweisungen
- [x] [js-syntax.js](./theory-app/js-syntax.js)

## M07 | CODE SNIPPETS

- [x] [html-emmet.html](./theory-app/html-emmet.html)
- [ ] CSS Emmet
- [x] ES Snippets

## M08 | HTML CONTINUED

- [x] Content Types (Flow)
- [x] [html-lists.html](./theory-app/html-lists.html)
- [x] [html-tables.html](./theory-app/html-tables.html)

## M09 | CSS CONTINUED

- [x] [css-box.html](./theory-app/css-box.html)
- [x] [css-inline-block.html](./theory-app/css-inline-block.html)
- [x] [css-float.html](./theory-app/css-float.html)

## Übung: Navigation einer Webseite

- nav
- die Links (oder Eltern davon) sollen Größenangaben (width, height) akzeptieren
- float
- bei :hover andere Hintergrund- und evtl. Schriftfarbe

commited

## M10 | HTML SECTIONING, TABLES, LISTS, PSEUDO

- [x] Inhalt gruppieren - Sectioning, Headings & Co
- [x] Display: table, list
- [x] Pseudo-Klassen & -Elemente

## M11 | JS CONTINUED

- [x] [vars, identifiers, scopes](./theory-app/js-variables-identifiers-scopes.html)
- [x] [primitives js-datatypes.html](./theory-app/js-datatypes.html)
- [x] Operatoren
- [x] [global object window](./theory-app/js-window.html)
- [x] Kontrollstrukturen
- [x] [js-Math.html](./theory-app/js-Math.html)

## Übung: Eine Zufallszahl erraten

- eine Zufallszahl von 3 möglichen generieren (0, 1, 2) / (1, 2, 3)
- bei jedem Versuch soll dem/r Benutzer/in mitgeteilt werden, ob die Zufallszahl kleiner/größer ist oder ob er/sie sie erraten hat
- [x] [ueb-zufallszahl.html](./theory-app/ueb-zufallszahl.html)

## M12 | JS

- [x] [js-switch.html](./theory-app/js-switch.html)
- [x] [js-Date.html](./theory-app/js-Date.html)
- [x] Funktionen
- [x] [js-arrowfunction.html](./theory-app/js-arrowfunction.html)
- [x] [js-arrays.html](./theory-app/js-arrays.html)
- [x] [js-strings.html](./theory-app/js-strings.html)
- [x] Konstruktoren

## Übung: Bilder vergrößern

- die Bilder aus einer HTML-Datei
- mit Klick auf den Button werden die Bilder vergrößert
- [x] [ueb-bilderzoom.html](./theory-app/ueb-bilderzoom.html)

## M13 | JS OBJECTS

- [x] [js-objects.html](./theory-app/js-objects.html)

## M14 | DOM INTRO

- [x] Zusammenhang zwischen DOM, HTML, CSS & JS
- [x] Navigieren in DOM - Traversing
- [x] [dom-traversing.html](./theory-app/dom-traversing.html)
- [x] DOM Knoten & Elemente
- [x] [js-event-object.html](./theory-app/js-event-object.html)

## M15 | FORMS

- [x] [js-forms.html](./theory-app/js-forms.html)

## Übung : password confirm

- zwei inputfelder und ein button
- button ist disabled
- beide Inputs haben attribut required und minlength 4
- wenn die Eingabe in beiden inputs gleich ist und beide Felder valide sind, wird der Button enabled
- [x] [ueb-pw-confirm.html](./theory-app/ueb-pw-confirm.html)

## M16 | JQUERY

- [x] [jq-docready-winload.html](./theory-app/jq-docready-winload.html)
- [x] [jq-selectors.html](./theory-app/jq-selectors.html)
- [ ] [jq-filter.html](./theory-app/jq-filter.html)

## Übung: login form w. jq

- 2 inputs (username, pw)
- username und pw sind in einem Array abgelegt
- Wenn die Eingabe mit den Werten im Array zusammenfällt,
- Meldung: Willkommen auf unserer WebSeite.
- [x] [ueb-jq-login.html](./theory-app/ueb-jq-login.html)

## M0 | CSS INTERMEDIATE

- [x] [css-specificity.html](./theory-app/css-specificity.html)
- [x] [css-grid.html](./theory-app/css-grid.html)
- [x] Display: grid
- [x] Media Queries & Breakpoints
- [ ] Animationen & Transitions
- [ ] Variable Fonts
- [ ] Position (static, fixed...)
- [ ] Display: flex
- [ ] Column-Count
- [ ] CSS Funktionen
- [ ] CSS Variables
- [ ] [z-index & stacking context](./theory-app/css-z-index.html)

select - options löschen, zwischenspeichern, filtern

## M0 | HTML INTERMEDIATE

- [ ] Multimedia - Bilder, Audio, Video, Canvas
  
## M0 | JS INTERMEDIATE

- [ ] offene Themen nach Bedarf der TeilnehmerInnen

## M0 | PHRASING CONTENT

- [ ] phrasing tags
- [ ] font props
- [ ] text props
- [ ] breaks & spaces
- [ ] counter props? <!-- https://gist.github.com/patik/89ee6092c72a9e39950445c01598517a -->
