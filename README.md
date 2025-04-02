# Individuellt-slutprojekt

## Introduktion

## Projektidé

Min projektidé är att  skapa en portfoliosida där jag kan visa arbetsgivarer mina färdigheter. Sidan ska innehålla en kort presentation av mig med min utbildningsbakgrund, mina språk jag behärskar och mina ramverk jag är insatt i. Sidan skall även innehålla sektioner som visar mina färdigheter som utvecklare. Till exempel kan det finnas sektioner som visar på animationer i CSS, en sektion som är en liten exempelapplikation inom e-commerce, en sektion som visar formulärhantering och så vidare. Sidan skall vara välkommenterad, responsiv och föja WCAG:s riktlinjer för tillgänglighet.

## Dokumentation

### Kravspecifikation

#### generella riktlinjer

* modulär
* utbyggbar
* vad vill jag visa för arbetsgivare
* välplanerat
* välorganiserat i mjukvara

#### Specifika färdigheter

* Avancerad modern CSS
  * Animationer
  * Responsivitet
* CRUD
* Auth
* Accesibility
* SPA
* Formulär
* Felhantering
* Git

#### Begränsningar

##### Godkänt nivå/miniminivå

* Responsiv
* Grundläggande crud-operationer som Read från externt bibliotek
* Använder sig av vanliga hooks som useEffect, useState, useReducer o.s.v.
* Använder sig av useContext
* Lära mig animationer
* Tillgänlig
* Välkommenterad kod
* Commits efter branchstandard

##### Bonuslista

* Autentisering
* Deployment i Vercel el. dylikt
* Git rebase/squash
* Eget API
* delsidor som visar:
  * e-commerce
  * blogg
  * receptsida

### Diagram

#### Dependency graph

### Designskisser

#### Wireframe

[Länk till figma](https://www.figma.com/design/2SgZYA3rwGuoPC6jYI4Aa1/Individuellt-slutprojekt?node-id=0-1&p=f&t=Ph5ZEIdlAXLvRHtO-0)

## Kodstandard

### Kommentarer

Skall följa branchstandard. Standarden som följs är: [https://tsdoc.org/]().

### Commits

Skall likt kommentarerna följa branchstandard. Standarden som följs är den som beskrivs på följande sidor: 

[tui.chart](https://github.com/nhn/tui.chart/blob/main/docs/COMMIT_MESSAGE_CONVENTION.md)

[conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/)

### CSS

Skall följa tailwind men modulariseras. Custom-klasser skapas och appliceras med hjälp av @Layer.

### Mappstruktur

#### Projekt

##### App 

###### Landing page

###### Showcase

###### Shop

##### Interfaces

##### Components

##### Styles

## Arbetsflöde

### Git

* använda mig av terminalkommando så mycket som möjligt
* frekventa commits enligt kodstandard (se avsnitt "Commits" under kodstandard)
* dev branch och main branch

### Jira

* Plocka issues i ordning av viktning

## Raster

* 5 minuter rast varje halvtimme
* 1 timmes lunchrast

## Tidslinje

### Vecka 1

#### Måndag

* Skapa repo
* Planeringsdokument
* Skapa Jiraprojekt
* Lära mig grunderna i Jira

#### Tisdag

* Wireframe
* Söka inspiration för upplägg/design
* Repetera grunderna i figma
* Färdigställa wireframe
* redovisa projektinriktning
* skapa backlog

#### Onsdag

* Mobil wireframe
* Fortsätta på backlog
* Installera next
* skapa mappstruktur
* sätta upp arbetsflöde i Jira
* Börja vikta issues

#### Torsdag

* Börja följa arbetsflödet
* Boilerplate för sidor
* Grundkomponenter

#### Fredag

* Fortsätta följa arbetsflödet
* Fortsätt med grundkomponenter
* Börja sätta ihop/implementera grundkomponenter

### Vecka 2

* Få klar grundstruktur i sida
* Planera showcaseexempel
* Börja på showcaseexempel

### Vecka 3

* Börja på exempelshop

## Tekinker och ramverk

### Projekthantering och planering

* Github
* Jira

### Design

* Figma

### Front-end

* TypeScript
* React
* Next.js
* Tailwind
* Shadcn

### API/REST

* headless cms?
  * (FireCms)
* MERN
  * Node.js
  * Express.js
* Next.js/JSON
