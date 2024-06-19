import type { ThemeMap } from '@/types'

import {
  a11yDark,
  a11yLight,
  atelierSulphurpoolDark,
  atelierSulphurpoolLight,
  atelierCaveDark,
  atelierCaveLight,
  atelierPlateauDark,
  atelierPlateauLight,
  atelierDuneDark,
  atelierDuneLight,
  atelierSavannaDark,
  atelierSavannaLight,
  atelierSeasideDark,
  atelierSeasideLight,
  atomOneDark,
  atomOneLight,
  gruvboxDark,
  gruvboxLight,
  isblEditorDark,
  isblEditorLight,
  kimbieDark,
  kimbieLight,
  paraisoDark,
  paraisoLight,
  solarizedDark,
  solarizedLight,
  stackoverflowDark,
  stackoverflowLight,
  tomorrowNightBlue,
  tomorrowNightEighties,
  obsidian,
  zenburn
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

const themeMappings: ThemeMap = {
  a11y: { light: a11yLight, dark: a11yDark },
  atom: { light: atomOneLight, dark: atomOneDark },
  cave: { light: atelierCaveLight, dark: atelierCaveDark },
  dune: { light: atelierDuneLight, dark: atelierDuneDark },
  gruvbox: { light: gruvboxLight, dark: gruvboxDark },
  isbl: { light: isblEditorLight, dark: isblEditorDark },
  kimbie: { light: kimbieLight, dark: kimbieDark },
  obsidian: { light: zenburn, dark: obsidian },
  paraiso: { light: paraisoLight, dark: paraisoDark },
  plateau: { light: atelierPlateauLight, dark: atelierPlateauDark },
  savanna: { light: atelierSavannaLight, dark: atelierSavannaDark },
  seaside: { light: atelierSeasideLight, dark: atelierSeasideDark },
  solarized: { light: solarizedLight, dark: solarizedDark },
  stackoverflow: { light: stackoverflowLight, dark: stackoverflowDark },
  sulphur: { light: atelierSulphurpoolLight, dark: atelierSulphurpoolDark },
  tomorrow: { light: tomorrowNightEighties, dark: tomorrowNightBlue }
}

export default themeMappings
