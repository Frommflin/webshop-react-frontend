# React webshop applikation

## Versioner

- Node: `22.20.0`
- npm: `10.9.3`
- React: `^19.1.1`

## Installera nvm, node och npm

### NVM

- ### Linux/Mac installation

  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
  - `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"`
  - `[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"` (Laddar in nvm utan att starta om terminalen)

- ### Windows installation
  - Klicka på 'Download Now!' i [nvm-windows repots Readme](https://github.com/coreybutler/nvm-windows#readme)
  - Installera .exe filen tillhörande den senaste releasen
  - Följ installations programmet

Kontrollera installation genom att köra `nvm -v` i terminalen

### Installera node och npm

- Kör `nvm install`
  - Kommandot installerar också npm samtidigt
  - Kommandot byter även till den installerade node- och npm versionen

## Kom igång

### Ta hem repot

- Navigera dit du vill klona projektet
- Klona repot: `git clone https://github.com/Frommflin/webshop-react-frontend.git`
- Navigera in i repomappen: `cd webshop-react-frontend`
- Kör: `nvm use`
  - förväntad output: `Now using node v22.20.0 (npm v10.9.3)`

### Installera dependencies

`npm install`

### Kör app

`npm run dev`

### Kör storybook

`npm run storybook`

## CI workflow

Projektet genomgår test av bygge (`npm run build`) vid varje push in i `master`-branchen. Resultat av bygget hittas under `Actions` > `Node.Js CI` i repo-menyn, alternativ navigera direkt till `https://github.com/Frommflin/webshop-react-frontend/actions`
