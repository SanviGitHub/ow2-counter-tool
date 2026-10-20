const FALLBACK_HERO_DATA = [
    {
        "Hero Name": "D.Mon",
        "Key": "dmon",
        "Role": "Brawl Tank",
        "Base Role": "Tank",
        "Subrole": "Stalwart",
        "Playstyle": "Brawl",
        "Tier": "S",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/dmon-portrait.png",
        "Icon Img": "images/hero-icons/dmon-icon.png",
        "Counters": "D.Va, Reinhardt, Winston, Hazard, Vendetta",
        "Weaknesses": "Ana, Zenyatta, Bastion, Sojourn, Orisa",
        "Synergies": "Lucio, Kiriko, Mei, Reaper, Doctrine",
        "Tip": "Domina el frente cuerpo a cuerpo con tu escudo de energía y espada pesada MEKA; cuidado con el anti-heal de Ana y el Discord de Zenyatta."
    },
    {
        "Hero Name": "D.Va",
        "Key": "dva",
        "Role": "Dive Tank",
        "Base Role": "Tank",
        "Subrole": "Initiator",
        "Playstyle": "Dive",
        "Tier": "S",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/d.va-portrait.png",
        "Icon Img": "images/hero-icons/dva-icon.png",
        "Counters": "Widowmaker, Pharah, Ashe, Ana, Jetpack Cat, Freja, Orisa",
        "Weaknesses": "Zarya, Symmetra, Mei, Domina, Brigitte, D.Mon",
        "Synergies": "Tracer, Genji, Kiriko, Juno, Lucio",
        "Tip": "Usa Defense Matrix para comer habilidades clave (Biotic Grenade, proyectiles de Freja/Pharah) y presiona el high-ground."
    },
    {
        "Hero Name": "Domina",
        "Key": "domina",
        "Role": "Poke Tank",
        "Base Role": "Tank",
        "Subrole": "Stalwart",
        "Playstyle": "Poke",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/domina-portrait.png",
        "Icon Img": "images/hero-icons/domina-icon.png",
        "Counters": "D.Va, Zarya, Mauga, Junker Queen, Vendetta",
        "Weaknesses": "Winston, Doomfist, Hazard, Sombra, Symmetra",
        "Synergies": "Symmetra, Ashe, Baptiste, Illari, Sigma",
        "Tip": "Controla líneas de visión con Barrier Array y Photon Magnum. Usa Sonic Repulsors cuando intenten acortar distancia hacia tu equipo."
    },
    {
        "Hero Name": "Doomfist",
        "Key": "doomfist",
        "Role": "Dive Tank",
        "Base Role": "Tank",
        "Subrole": "Initiator",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/doomfist-portrait.png",
        "Icon Img": "images/hero-icons/doomfist-icon.png",
        "Counters": "Sigma, Domina, Reinhardt, Zenyatta, Soldier: 76",
        "Weaknesses": "Sombra, Roadhog, Cassidy, Ana, Orisa, Brigitte",
        "Synergies": "Tracer, Genji, Kiriko, Ana, Sombra",
        "Tip": "Entra con Slam, asegura carga de Power Block o fuerza cooldowns enemigos y sal con Rocket Punch antes de recibir CC."
    },
    {
        "Hero Name": "Hazard",
        "Key": "hazard",
        "Role": "Dive Tank",
        "Base Role": "Tank",
        "Subrole": "Initiator",
        "Playstyle": "Dive",
        "Tier": "S",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/hazard-portrait.png",
        "Icon Img": "images/hero-icons/hazard-icon.png",
        "Counters": "Sigma, Domina, Ashe, Widowmaker, Baptiste, Ana",
        "Weaknesses": "Orisa, Ana, Roadhog, D.Mon, Mauga, Cassidy",
        "Synergies": "Genji, Tracer, Vendetta, Kiriko, Lucio",
        "Tip": "Usa Jagged Wall para aislar objetivos sin movilidad y salta con Violent Leap para desarmar la backline enemiga."
    },
    {
        "Hero Name": "Junker Queen",
        "Key": "junker-queen",
        "Role": "Brawl Tank",
        "Base Role": "Tank",
        "Subrole": "Stalwart",
        "Playstyle": "Brawl",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/junkerqueen-portrait.png",
        "Icon Img": "images/hero-icons/junker-queen-icon.png",
        "Counters": "Winston, Doomfist, Roadhog, Ramattra, Wrecking Ball",
        "Weaknesses": "Kiriko, Orisa, Zarya, Ana, Domina, Bastion",
        "Synergies": "Lucio, Brigitte, Reaper, Cassidy, Genji",
        "Tip": "Fuerza el Suzu de Kiriko antes de usar Rampage. Mantén heridas activas en múltiples objetivos para maximizar tu autosanación."
    },
    {
        "Hero Name": "Mauga",
        "Key": "mauga",
        "Role": "Brawl Tank",
        "Base Role": "Tank",
        "Subrole": "Bruiser",
        "Playstyle": "Brawl",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/mauga-portrait.png",
        "Icon Img": "images/hero-icons/mauga-icon.png",
        "Counters": "Roadhog, Winston, Wrecking Ball, Ramattra, Hazard",
        "Weaknesses": "Ana, Zenyatta, D.Va, Sigma, Zarya, Sojourn",
        "Synergies": "Kiriko, Baptiste, Lucio, Bastion, Reaper",
        "Tip": "Incendia con Gunny y remata con Cha-Cha para críticos garantizados. Nunca actives Cardiac Overdrive si Ana tiene Biotic Grenade lista."
    },
    {
        "Hero Name": "Orisa",
        "Key": "orisa",
        "Role": "Brawl Tank",
        "Base Role": "Tank",
        "Subrole": "Bruiser",
        "Playstyle": "Brawl",
        "Tier": "A",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/orisa-portrait.png",
        "Icon Img": "images/hero-icons/orisa-icon.png",
        "Counters": "Reinhardt, Doomfist, Junker Queen, Ramattra, Hazard, D.Mon",
        "Weaknesses": "Zarya, Sigma, Symmetra, Zenyatta, Echo, D.Va",
        "Synergies": "Bastion, Torbjorn, Baptiste, Ana, Illari",
        "Tip": "Rota Fortify y Javelin Spin sin superponerlos. Usa Energy Javelin para cancelar habilidades canalizadas y desplazar tanques de brawl."
    },
    {
        "Hero Name": "Ramattra",
        "Key": "ramattra",
        "Role": "Brawl Tank",
        "Base Role": "Tank",
        "Subrole": "Stalwart",
        "Playstyle": "Brawl",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/ramattra-portrait.png",
        "Icon Img": "images/hero-icons/ramattra-icon.png",
        "Counters": "Reinhardt, Sigma, Zarya, Brigitte, Domina",
        "Weaknesses": "Orisa, Ana, Roadhog, Mauga, Bastion, Zenyatta",
        "Synergies": "Lucio, Ana, Mei, Symmetra, Kiriko",
        "Tip": "Pokea en forma Ómnica y activa Nemesis Form para castigar escudos con Pummel. Usa Ravenous Vortex para frenar héroes aéreos o dive."
    },
    {
        "Hero Name": "Reinhardt",
        "Key": "reinhardt",
        "Role": "Brawl Tank",
        "Base Role": "Tank",
        "Subrole": "Stalwart",
        "Playstyle": "Brawl",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/reinhardt-portrait.png",
        "Icon Img": "images/hero-icons/reinhardt-icon.png",
        "Counters": "Zarya, Sigma, Winston, Soldier: 76, Cassidy",
        "Weaknesses": "Ramattra, Orisa, Bastion, Pharah, D.Mon, Mauga",
        "Synergies": "Lucio, Ana, Mei, Symmetra, Baptiste",
        "Tip": "Juega esquinas cerradas y usa el Speed Boost de Lúcio para acortar distancia sin gastar todo tu escudo en el camino."
    },
    {
        "Hero Name": "Roadhog",
        "Key": "roadhog",
        "Role": "Poke Tank",
        "Base Role": "Tank",
        "Subrole": "Bruiser",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/roadhog-portrait.png",
        "Icon Img": "images/hero-icons/roadhog-icon.png",
        "Counters": "Doomfist, Wrecking Ball, Winston, Hazard, Ramattra",
        "Weaknesses": "Ana, Mauga, Orisa, Zenyatta, Reaper, Sojourn",
        "Synergies": "Kiriko, Lifeweaver, Junkrat, Ashe, Doctrine",
        "Tip": "Coloca Pig Pen antes de lanzar Chain Hook para asegurar el combo letal. Pide siempre Kiriko para limpiar el anti-heal."
    },
    {
        "Hero Name": "Sigma",
        "Key": "sigma",
        "Role": "Poke Tank",
        "Base Role": "Tank",
        "Subrole": "Stalwart",
        "Playstyle": "Poke",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/sigma-portrait.png",
        "Icon Img": "images/hero-icons/sigma-icon.png",
        "Counters": "Bastion, Orisa, Mauga, Ashe, Widowmaker, Torbjorn",
        "Weaknesses": "Ramattra, Winston, Doomfist, Symmetra, Hazard, Zarya",
        "Synergies": "Baptiste, Zenyatta, Ashe, Widowmaker, Freja",
        "Tip": "Reposiciona tu Experimental Barrier constantemente para bloquear francotiradores y guarda Accretion para cortar ultimates."
    },
    {
        "Hero Name": "Winston",
        "Key": "winston",
        "Role": "Dive Tank",
        "Base Role": "Tank",
        "Subrole": "Initiator",
        "Playstyle": "Dive",
        "Tier": "S",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/winston-portrait.png",
        "Icon Img": "images/hero-icons/winston-icon.png",
        "Counters": "Widowmaker, Sigma, Domina, Genji, Ana, Zenyatta, Freja",
        "Weaknesses": "Reaper, Bastion, D.Mon, Junker Queen, Mauga, Brigitte",
        "Synergies": "Tracer, Genji, Ana, Kiriko, Sombra",
        "Tip": "Usa tu Barrier Projector para aislar a los supports enemigos de su tanque cuando saltes a su backline."
    },
    {
        "Hero Name": "Wrecking Ball",
        "Key": "wrecking-ball",
        "Role": "Dive Tank",
        "Base Role": "Tank",
        "Subrole": "Initiator",
        "Playstyle": "Dive",
        "Tier": "B",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/wrecking-ball-portrait.png",
        "Icon Img": "images/hero-icons/wrecking-ball-icon.png",
        "Counters": "Widowmaker, Zenyatta, Ashe, Sigma, Hanzo",
        "Weaknesses": "Sombra, Cassidy, Roadhog, Brigitte, Mei, Junkrat",
        "Synergies": "Tracer, Sombra, Zenyatta, Kiriko, Jetpack Cat",
        "Tip": "Coordina Piledriver con tus flankers y usa Adaptive Shields cuando haya múltiples enemigos cerca para no regalar carga de ult."
    },
    {
        "Hero Name": "Zarya",
        "Key": "zarya",
        "Role": "Brawl Tank",
        "Base Role": "Tank",
        "Subrole": "Bruiser",
        "Playstyle": "Brawl",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/zarya-portrait.png",
        "Icon Img": "images/hero-icons/zarya-icon.png",
        "Counters": "D.Va, Orisa, Junker Queen, Genji, Junkrat, Sigma",
        "Weaknesses": "Reinhardt, Bastion, Widowmaker, Ramattra, Domina, Pharah",
        "Synergies": "Reaper, Genji, Vendetta, Ana, Lucio",
        "Tip": "Usa tu primera burbuja para ganar energía y guarda siempre la segunda para limpiar estados negativos o salvar a un aliado en dive."
    },
    {
        "Hero Name": "Anran",
        "Key": "anran",
        "Role": "Dive Damage",
        "Base Role": "Damage",
        "Subrole": "Flanker",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/anran-portrait.png",
        "Icon Img": "images/hero-icons/anran-icon.png",
        "Counters": "Mei, Symmetra, Brigitte, Reinhardt, Zenyatta",
        "Weaknesses": "Cassidy, Ashe, Pharah, D.Va, Wuyang",
        "Synergies": "Hazard, Winston, Kiriko, Wuyang, Zarya",
        "Tip": "Aplica presión térmica en ángulos laterales y usa tu movilidad ígnea para forzar cooldowns defensivos de los supports."
    },
    {
        "Hero Name": "Ashe",
        "Key": "ashe",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Sharpshooter",
        "Playstyle": "Poke",
        "Tier": "S",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/ashe-portrait.png",
        "Icon Img": "images/hero-icons/ashe-icon.png",
        "Counters": "Pharah, Echo, Jetpack Cat, Freja, Reaper, Anran",
        "Weaknesses": "Widowmaker, Winston, D.Va, Genji, Tracer, Hazard",
        "Synergies": "Mercy, Sigma, Baptiste, Domina, Ana",
        "Tip": "Lanza Dynamite por encima de los escudos enemigos para farmear B.O.B. rápido y guarda Coach Gun para escapar de tanques de dive."
    },
    {
        "Hero Name": "Bastion",
        "Key": "bastion",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Specialist",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/bastion-portrait.png",
        "Icon Img": "images/hero-icons/bastion-icon.png",
        "Counters": "Reinhardt, Winston, Zarya, Ramattra, Mauga, D.Mon",
        "Weaknesses": "Sigma, Genji, D.Va, Ana, Sojourn, Hanzo",
        "Synergies": "Orisa, Baptiste, Mercy, Mauga, Sigma",
        "Tip": "No gastes el modo Asalto hasta que el tanque enemigo haya comprometido su posición o escudo principal."
    },
    {
        "Hero Name": "Cassidy",
        "Key": "cassidy",
        "Role": "Brawl Damage",
        "Base Role": "Damage",
        "Subrole": "Sharpshooter",
        "Playstyle": "Brawl",
        "Tier": "S",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/cassidy-portrait.png",
        "Icon Img": "images/hero-icons/cassidy-icon.png",
        "Counters": "Tracer, Sombra, Venture, Doomfist, Pharah, Jetpack Cat, Vendetta",
        "Weaknesses": "Ashe, Widowmaker, Sigma, Sojourn, Orisa",
        "Synergies": "Junker Queen, Reinhardt, Brigitte, Ana, Lucio",
        "Tip": "Juega cerca de tus supports como guardaespaldas anti-dive; tu Flashbang frena en seco a Tracer, Vendetta y Doomfist."
    },
    {
        "Hero Name": "Echo",
        "Key": "echo",
        "Role": "Dive Damage",
        "Base Role": "Damage",
        "Subrole": "Recon",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/echo-portrait.png",
        "Icon Img": "images/hero-icons/echo-icon.png",
        "Counters": "Reinhardt, Junkrat, Orisa, Venture, Mei, Ramattra",
        "Weaknesses": "Ashe, Cassidy, Widowmaker, Soldier: 76, D.Va, Baptiste",
        "Synergies": "Mercy, Winston, D.Va, Kiriko, Jetpack Cat",
        "Tip": "Usa Sticky Bombs + Focusing Beam sobre objetivos por debajo del 50% de vida (incluyendo escudos) para derretirlos al instante."
    },
    {
        "Hero Name": "Emre",
        "Key": "emre",
        "Role": "Brawl Damage",
        "Base Role": "Damage",
        "Subrole": "Specialist",
        "Playstyle": "Brawl",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/emre-portrait.png",
        "Icon Img": "images/hero-icons/emre-icon.png",
        "Counters": "Soldier: 76, Torbjorn, Symmetra, Juno, Lifeweaver",
        "Weaknesses": "Widowmaker, Pharah, D.Va, Sigma, Ashe",
        "Synergies": "Vendetta, Ramattra, Lucio, Baptiste, Doctrine",
        "Tip": "Aprovecha tus mejoras cibernéticas para sostener fuego de supresión en media distancia y castigar rotaciones lentas."
    },
    {
        "Hero Name": "Freja",
        "Key": "freja",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Recon",
        "Playstyle": "Poke",
        "Tier": "S",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/freja-portrait.png",
        "Icon Img": "images/hero-icons/freja-icon.png",
        "Counters": "Reinhardt, Junkrat, Mei, Bastion, Brigitte, Torbjorn",
        "Weaknesses": "D.Va, Winston, Widowmaker, Ashe, Genji, Sombra",
        "Synergies": "Sigma, Mercy, Zenyatta, Wuyang, Ana",
        "Tip": "Usa Updraft y Quick Dash para suspenderte en el aire y clavar virotes explosivos con Take Aim sobre objetivos sin cobertura."
    },
    {
        "Hero Name": "Genji",
        "Key": "genji",
        "Role": "Dive Damage",
        "Base Role": "Damage",
        "Subrole": "Flanker",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/genji-portrait.png",
        "Icon Img": "images/hero-icons/genji-icon.png",
        "Counters": "Widowmaker, Bastion, Hanzo, Ashe, Zenyatta, Freja",
        "Weaknesses": "Winston, Zarya, Mei, Moira, Symmetra, Brigitte",
        "Synergies": "Ana, Winston, Hazard, Kiriko, Zarya",
        "Tip": "Guarda Swift Strike para confirmar eliminaciones (que resetean su cooldown) o para escapar tras forzar recursos enemigos."
    },
    {
        "Hero Name": "Hanzo",
        "Key": "hanzo",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Sharpshooter",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/hanzo-portrait.png",
        "Icon Img": "images/hero-icons/hanzo-icon.png",
        "Counters": "Bastion, Torbjorn, Sombra, Tracer, Orisa",
        "Weaknesses": "Winston, Genji, D.Va, Pharah, Echo, Lucio",
        "Synergies": "Zarya, Sigma, Mercy, Zenyatta, Domina",
        "Tip": "Coloca Sonic Arrow en esquinas clave para dar visión previa a tu equipo y usa Storm Arrows para romper escudos o castigar tanques."
    },
    {
        "Hero Name": "Junkrat",
        "Key": "junkrat",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Specialist",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/junkrat-portrait.png",
        "Icon Img": "images/hero-icons/junkrat-icon.png",
        "Counters": "Reinhardt, Wrecking Ball, Brigitte, Symmetra, D.Mon",
        "Weaknesses": "Pharah, Echo, Freja, Ashe, Zarya, Widowmaker",
        "Synergies": "Roadhog, Orisa, Baptiste, Mercy, Illari",
        "Tip": "Controla chokes estrechos con spam indirecto y coloca Steel Trap en rutas de flanqueo contra tanques de dive."
    },
    {
        "Hero Name": "Mei",
        "Key": "mei",
        "Role": "Brawl Damage",
        "Base Role": "Damage",
        "Subrole": "Specialist",
        "Playstyle": "Brawl",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/mei-portrait.png",
        "Icon Img": "images/hero-icons/mei-icon.png",
        "Counters": "D.Va, Genji, Wrecking Ball, Zarya, Reinhardt",
        "Weaknesses": "Pharah, Echo, Freja, Anran, Kiriko, Sojourn",
        "Synergies": "Reinhardt, Ramattra, D.Mon, Lucio, Baptiste",
        "Tip": "El uso principal de Ice Wall es dividir al tanque enemigo de sus supports en cuanto cruce un choke point."
    },
    {
        "Hero Name": "Pharah",
        "Key": "pharah",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Recon",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/pharah-portrait.png",
        "Icon Img": "images/hero-icons/pharah-icon.png",
        "Counters": "Junkrat, Mei, Reinhardt, Symmetra, Venture, Brigitte",
        "Weaknesses": "Ashe, Cassidy, Widowmaker, Soldier: 76, D.Va, Illari",
        "Synergies": "Mercy, Jetpack Cat, Zarya, Winston, Ana",
        "Tip": "Juega usando techos y coberturas verticales con Jet Dash para sorprender a los hitscans desde ángulos inesperados."
    },
    {
        "Hero Name": "Reaper",
        "Key": "reaper",
        "Role": "Brawl Damage",
        "Base Role": "Damage",
        "Subrole": "Flanker",
        "Playstyle": "Brawl",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/reaper-portrait.png",
        "Icon Img": "images/hero-icons/reaper-icon.png",
        "Counters": "Winston, Roadhog, Mauga, Reinhardt, Wrecking Ball",
        "Weaknesses": "Pharah, Ashe, Echo, Widowmaker, Cassidy, Ana",
        "Synergies": "Lucio, Zarya, Junker Queen, Kiriko, D.Mon",
        "Tip": "Usa Shadow Step para posicionarte en flancos cortos y guarda siempre Wraith Form para salir vivo hacia tu equipo."
    },
    {
        "Hero Name": "Shion",
        "Key": "shion",
        "Role": "Dive Damage",
        "Base Role": "Damage",
        "Subrole": "Flanker",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/shion-portrait.png",
        "Icon Img": "images/hero-icons/shion-icon.png",
        "Counters": "Widowmaker, Ana, Zenyatta, Ashe, Hanzo",
        "Weaknesses": "Cassidy, Torbjorn, Winston, Brigitte, D.Va",
        "Synergies": "Hazard, Winston, Kiriko, Mizuki, Tracer",
        "Tip": "Caza objetivos aislados en la retaguardia con combos rápidos de cuchilla cibernética y reposiciónate antes de que giren."
    },
    {
        "Hero Name": "Sierra",
        "Key": "sierra",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Recon",
        "Playstyle": "Poke",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/sierra-portrait.png",
        "Icon Img": "images/hero-icons/sierra-icon.png",
        "Counters": "Sombra, Tracer, Pharah, Echo, Shion",
        "Weaknesses": "D.Va, Winston, Widowmaker, Sigma, Genji",
        "Synergies": "Sigma, Domina, Baptiste, Mercy, Ana",
        "Tip": "Posiciona a tu dron Dorothy para revelar flanqueadores y usa tu rifle Helix para sostener presión constante a media-larga distancia."
    },
    {
        "Hero Name": "Sojourn",
        "Key": "sojourn",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Sharpshooter",
        "Playstyle": "Poke",
        "Tier": "S",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/sojourn-portrait.png",
        "Icon Img": "images/hero-icons/sojourn-icon.png",
        "Counters": "Mauga, Roadhog, Bastion, Mei, Orisa, D.Mon",
        "Weaknesses": "D.Va, Winston, Tracer, Zarya, Widowmaker",
        "Synergies": "Mercy, Kiriko, Winston, Sigma, Juno",
        "Tip": "Carga energía de Railgun en el tanque enemigo y busca un headshot rápido sobre un DPS o Support de 250 HP."
    },
    {
        "Hero Name": "Soldier: 76",
        "Key": "soldier-76",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Specialist",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/soldier76-portrait.png",
        "Icon Img": "images/hero-icons/soldier76-icon.png",
        "Counters": "Pharah, Echo, Jetpack Cat, Torbjorn, Mercy",
        "Weaknesses": "D.Va, Doomfist, Winston, Genji, Widowmaker",
        "Synergies": "Ana, Baptiste, Sigma, Mercy, Illari",
        "Tip": "Toma ángulos laterales constantemente con Sprint; tu Biotic Field te permite sostener ese flanco sin depender de tus healers."
    },
    {
        "Hero Name": "Symmetra",
        "Key": "symmetra",
        "Role": "Brawl Damage",
        "Base Role": "Damage",
        "Subrole": "Specialist",
        "Playstyle": "Brawl",
        "Tier": "B",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/symmetra-portrait.png",
        "Icon Img": "images/hero-icons/symmetra-icon.png",
        "Counters": "D.Va, Sigma, Orisa, Reinhardt, Genji, Domina",
        "Weaknesses": "Pharah, Echo, Widowmaker, Ashe, Anran, Junkrat",
        "Synergies": "Reinhardt, Mauga, Lucio, Baptiste, Mei",
        "Tip": "Usa Teleporter para rotar a todo tu equipo de brawl directamente al punto o al high-ground enemigo en segundos."
    },
    {
        "Hero Name": "Torbjorn",
        "Key": "torbjorn",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Specialist",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/torbjorn-portrait.png",
        "Icon Img": "images/hero-icons/torbjorn-icon.png",
        "Counters": "Tracer, Sombra, Genji, Shion, Lucio, Wrecking Ball",
        "Weaknesses": "Pharah, Freja, Widowmaker, Junkrat, Sigma, Echo",
        "Synergies": "Orisa, Sigma, Baptiste, Brigitte, Illari",
        "Tip": "Coloca tu torreta donde cubra a tus supports contra flankers, no en primera línea donde los tanques la rompan gratis."
    },
    {
        "Hero Name": "Tracer",
        "Key": "tracer",
        "Role": "Dive Damage",
        "Base Role": "Damage",
        "Subrole": "Flanker",
        "Playstyle": "Dive",
        "Tier": "S",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/tracer-portrait.png",
        "Icon Img": "images/hero-icons/tracer-icon.png",
        "Counters": "Zenyatta, Ana, Widowmaker, Ashe, Bastion, Sojourn",
        "Weaknesses": "Cassidy, Torbjorn, Brigitte, Kiriko, Sierra",
        "Synergies": "Winston, D.Va, Hazard, Kiriko, Lucio",
        "Tip": "Sincroniza tu entrada con el salto de tu tanque de dive y guarda siempre Recall para cuando te fuercen vida crítica o cooldowns."
    },
    {
        "Hero Name": "Vendetta",
        "Key": "vendetta",
        "Role": "Brawl Damage",
        "Base Role": "Damage",
        "Subrole": "Flanker",
        "Playstyle": "Brawl",
        "Tier": "S",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/vendetta-portrait.png",
        "Icon Img": "images/hero-icons/vendetta-icon.png",
        "Counters": "Reinhardt, Sigma, Zenyatta, Ana, Mei, Symmetra",
        "Weaknesses": "Cassidy, Pharah, D.Mon, Domina, Echo, Ashe",
        "Synergies": "Zarya, Junker Queen, Lucio, Kiriko, Emre",
        "Tip": "Domina combates cerrados con el mandoble Palatine Fang; usa el impulso de Lúcio o burbuja de Zarya para ejecutar objetivos."
    },
    {
        "Hero Name": "Venture",
        "Key": "venture",
        "Role": "Dive Damage",
        "Base Role": "Damage",
        "Subrole": "Flanker",
        "Playstyle": "Dive",
        "Tier": "B",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/venture-portrait.png",
        "Icon Img": "images/hero-icons/venture-icon.png",
        "Counters": "Widowmaker, Ana, Zenyatta, Sigma, Hanzo",
        "Weaknesses": "Cassidy, Pharah, Echo, D.Va, Brigitte",
        "Synergies": "Hazard, Doomfist, Kiriko, Juno, Lucio",
        "Tip": "Entra bajo tierra con Burrow para ser invulnerable y usa Drill Dash para empujar objetivos fuera de posición o de vuelta a tu equipo."
    },
    {
        "Hero Name": "Widowmaker",
        "Key": "widowmaker",
        "Role": "Poke Damage",
        "Base Role": "Damage",
        "Subrole": "Sharpshooter",
        "Playstyle": "Poke",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/widowmaker-portrait.png",
        "Icon Img": "images/hero-icons/widowmaker-icon.png",
        "Counters": "Pharah, Ashe, Echo, Torbjorn, Zarya, Emre",
        "Weaknesses": "Winston, D.Va, Sombra, Genji, Tracer, Shion, Hazard",
        "Synergies": "Sigma, Mercy, Brigitte, Baptiste, Domina",
        "Tip": "Cambia de ángulo después de cada 2-3 disparos para que los flankers enemigos no puedan predecir tu posición."
    },
    {
        "Hero Name": "Ana",
        "Key": "ana",
        "Role": "Poke Support",
        "Base Role": "Support",
        "Subrole": "Tactician",
        "Playstyle": "Poke",
        "Tier": "S",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/ana-portrait.png",
        "Icon Img": "images/hero-icons/ana-icon.png",
        "Counters": "Roadhog, Mauga, Doomfist, Hazard, D.Mon, Bastion",
        "Weaknesses": "Kiriko, D.Va, Winston, Tracer, Sombra, Widowmaker",
        "Synergies": "Genji, Winston, Reinhardt, Brigitte, Soldier: 76",
        "Tip": "Un Biotic Grenade ofensivo sobre el tanque enemigo gana peleas enteras; guarda Sleep Dart si tienen flankers o tanques de dive."
    },
    {
        "Hero Name": "Baptiste",
        "Key": "baptiste",
        "Role": "Brawl Support",
        "Base Role": "Support",
        "Subrole": "Tactician",
        "Playstyle": "Brawl",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/baptiste-portrait.png",
        "Icon Img": "images/hero-icons/baptiste-icon.png",
        "Counters": "Pharah, Echo, Venture, Junkrat, Reinhardt",
        "Weaknesses": "D.Va, Hazard, Genji, Sombra, Widowmaker, Hanzo",
        "Synergies": "Sigma, Orisa, Bastion, Reinhardt, Illari",
        "Tip": "Alterna disparo primario y granada curativa sin perder ritmo, y coloca Immortality Field detrás de una esquina para que no lo rompan."
    },
    {
        "Hero Name": "Brigitte",
        "Key": "brigitte",
        "Role": "Dive Support",
        "Base Role": "Support",
        "Subrole": "Survivor",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/brigitte-portrait.png",
        "Icon Img": "images/hero-icons/brigitte-icon.png",
        "Counters": "Tracer, Sombra, Genji, D.Va, Winston, Wrecking Ball, Doomfist",
        "Weaknesses": "Ramattra, Pharah, Junkrat, Bastion, Freja, Anran",
        "Synergies": "Ana, Juno, Junker Queen, D.Va, Winston",
        "Tip": "Tu trabajo número uno es proteger a tu otro support (Ana/Juno). Usa Whip Shot a distancia para mantener Inspire activo."
    },
    {
        "Hero Name": "Doctrine",
        "Key": "doctrine",
        "Role": "Brawl Support",
        "Base Role": "Support",
        "Subrole": "Survivor",
        "Playstyle": "Brawl",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/doctrine-portrait.png",
        "Icon Img": "images/hero-icons/doctrine-icon.png",
        "Counters": "Winston, Junker Queen, Genji, Venture",
        "Weaknesses": "Ana, Widowmaker, Ashe, Sojourn, D.Va",
        "Synergies": "D.Mon, Roadhog, Emre, Vendetta, Lucio",
        "Tip": "Gestiona tus Drones Revitalizantes y el Cetro Eterno para sostener tanques de brawl en peleas prolongadas."
    },
    {
        "Hero Name": "Illari",
        "Key": "illari",
        "Role": "Poke Support",
        "Base Role": "Support",
        "Subrole": "Survivor",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/illari-portrait.png",
        "Icon Img": "images/hero-icons/illari-icon.png",
        "Counters": "Pharah, Echo, Mercy, Jetpack Cat, Tracer",
        "Weaknesses": "D.Va, Winston, Doomfist, Hazard, Sombra",
        "Synergies": "Sigma, Orisa, Baptiste, Ashe, Sojourn",
        "Tip": "Esconde tu Healing Pylon en zonas altas fuera de visión enemiga y espera siempre a que tu rifle cargue al máximo antes de disparar."
    },
    {
        "Hero Name": "Jetpack Cat",
        "Key": "jetpack-cat",
        "Role": "Dive Support",
        "Base Role": "Support",
        "Subrole": "Tactician",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/jetpack-cat-portrait.png",
        "Icon Img": "images/hero-icons/jetpack-cat-icon.png",
        "Counters": "Reinhardt, Junkrat, Mei, Venture, Ramattra",
        "Weaknesses": "Cassidy, Ashe, Soldier: 76, D.Va, Illari, Widowmaker",
        "Synergies": "Winston, Pharah, Echo, Wrecking Ball, Tracer",
        "Tip": "Aprovecha tu vuelo vertical constante para asistir a composiciones de dive desde ángulos donde los tanques terrestres no llegan."
    },
    {
        "Hero Name": "Juno",
        "Key": "juno",
        "Role": "Dive Support",
        "Base Role": "Support",
        "Subrole": "Survivor",
        "Playstyle": "Dive",
        "Tier": "S",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/juno-portrait.png",
        "Icon Img": "images/hero-icons/juno-icon.png",
        "Counters": "Reinhardt, Ramattra, Pharah, Echo, Orisa",
        "Weaknesses": "Sombra, Tracer, D.Va, Winston, Ashe, Emre",
        "Synergies": "Brigitte, D.Va, Hazard, Junker Queen, Sojourn",
        "Tip": "Usa Hyper Ring para acelerar la entrada o salida de tu equipo y lanza Pulsar Torpedoes cuando tengas visión de múltiples aliados y enemigos."
    },
    {
        "Hero Name": "Kiriko",
        "Key": "kiriko",
        "Role": "Dive Support",
        "Base Role": "Support",
        "Subrole": "Medic",
        "Playstyle": "Dive",
        "Tier": "S",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/kiriko-portrait.png",
        "Icon Img": "images/hero-icons/kiriko-icon.png",
        "Counters": "Ana, Junker Queen, Sombra, Ashe, Mei, Roadhog",
        "Weaknesses": "Winston, Sojourn, Pharah, Cassidy, Zarya",
        "Synergies": "Roadhog, Mauga, Hazard, D.Va, Genji, Tracer",
        "Tip": "Guarda Protection Suzu específicamente para limpiar el anti-heal de Ana, el Rampage de Junker Queen o ultimates letales."
    },
    {
        "Hero Name": "Lifeweaver",
        "Key": "lifeweaver",
        "Role": "Poke Support",
        "Base Role": "Support",
        "Subrole": "Medic",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/lifeweaver-portrait.png",
        "Icon Img": "images/hero-icons/lifeweaver-icon.png",
        "Counters": "Zarya, Orisa, Reinhardt, Sigma, Mauga",
        "Weaknesses": "Sombra, Winston, D.Va, Widowmaker, Emre",
        "Synergies": "Roadhog, Ana, Ashe, Bastion, Pharah",
        "Tip": "Usa Petal Platform para levantar aliados atrapados en Graviton Surge o Orisa Terra Surge, y Life Grip para salvar tanques sin recursos."
    },
    {
        "Hero Name": "Lucio",
        "Key": "lucio",
        "Role": "Brawl Support",
        "Base Role": "Support",
        "Subrole": "Tactician",
        "Playstyle": "Brawl",
        "Tier": "S",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/lucio-portrait.png",
        "Icon Img": "images/hero-icons/lucio-icon.png",
        "Counters": "Reinhardt, Widowmaker, Zenyatta, Hanzo, Sigma",
        "Weaknesses": "Cassidy, Torbjorn, Moira, Symmetra, Pharah",
        "Synergies": "Reinhardt, Ramattra, Junker Queen, D.Mon, Vendetta, Kiriko",
        "Tip": "El valor principal de Lúcio es el Speed Boost: úsalo con Amp It Up para que tu composición de brawl atropelle al enemigo."
    },
    {
        "Hero Name": "Mercy",
        "Key": "mercy",
        "Role": "Poke Support",
        "Base Role": "Support",
        "Subrole": "Medic",
        "Playstyle": "Poke",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/mercy-portrait.png",
        "Icon Img": "images/hero-icons/mercy-icon.png",
        "Counters": "Junkrat, Mei, Symmetra",
        "Weaknesses": "Ashe, Cassidy, Soldier: 76, Widowmaker, D.Va, Winston",
        "Synergies": "Ashe, Pharah, Echo, Sojourn, Freja",
        "Tip": "Prioriza el rayo azul (Damage Boost) en tu DPS hitscan o aéreo (Ashe, Sojourn, Freja, Pharah) y nunca hagas Resurrect sin cobertura."
    },
    {
        "Hero Name": "Mizuki",
        "Key": "mizuki",
        "Role": "Dive Support",
        "Base Role": "Support",
        "Subrole": "Survivor",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/mizuki-portrait.png",
        "Icon Img": "images/hero-icons/mizuki-icon.png",
        "Counters": "Genji, Tracer, Venture, Sombra",
        "Weaknesses": "Pharah, Widowmaker, Zarya, Ramattra",
        "Synergies": "Hazard, Shion, Genji, Kiriko, Winston",
        "Tip": "Acompaña a tus flankers con tu agilidad y escudos de niebla para sostener escaramuzas rápidas en líneas enemigas."
    },
    {
        "Hero Name": "Moira",
        "Key": "moira",
        "Role": "Brawl Support",
        "Base Role": "Support",
        "Subrole": "Medic",
        "Playstyle": "Brawl",
        "Tier": "B",
        "Difficulty": 1,
        "Portrait Img": "images/hero_portraits/moira-portrait.png",
        "Icon Img": "images/hero-icons/moira-icon.png",
        "Counters": "Genji, Lucio, Tracer, Sombra",
        "Weaknesses": "Ana, D.Va, Ashe, Widowmaker, Sojourn",
        "Synergies": "Reinhardt, Ramattra, Lucio, Reaper, Mei",
        "Tip": "Prioriza Biotic Orb amarillo en espacios cerrados para curar en área a tu equipo de brawl y guarda Fade para esquivar ultimates."
    },
    {
        "Hero Name": "Sombra",
        "Key": "sombra",
        "Role": "Dive Support",
        "Base Role": "Support",
        "Subrole": "Tactician",
        "Playstyle": "Dive",
        "Tier": "A",
        "Difficulty": 3,
        "Portrait Img": "images/hero_portraits/sombra-portrait.png",
        "Icon Img": "images/hero-icons/sombra-icon.png",
        "Counters": "Doomfist, Wrecking Ball, Widowmaker, Domina, Zenyatta, Sigma",
        "Weaknesses": "Cassidy, Kiriko, Brigitte, Torbjorn, Sierra, Hanzo",
        "Synergies": "Winston, Doomfist, Wrecking Ball, Tracer, Kiriko",
        "Tip": "Usa White Hat / Hack táctico para curar y potenciar aliados o cortar habilidades clave de tanques enemigos en pleno dive."
    },
    {
        "Hero Name": "Wuyang",
        "Key": "wuyang",
        "Role": "Poke Support",
        "Base Role": "Support",
        "Subrole": "Survivor",
        "Playstyle": "Poke",
        "Tier": "S",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/wuyang-portrait.png",
        "Icon Img": "images/hero-icons/wuyang-icon.png",
        "Counters": "Anran, Mauga, Junker Queen, Reaper, Vendetta",
        "Weaknesses": "Winston, D.Va, Tracer, Widowmaker, Sombra",
        "Synergies": "Sigma, Freja, Ashe, Ana, Domina",
        "Tip": "Usa tus corrientes de agua para reposicionar aliados, apagar presión enemiga de corto alcance y controlar zonas clave."
    },
    {
        "Hero Name": "Zenyatta",
        "Key": "zenyatta",
        "Role": "Poke Support",
        "Base Role": "Support",
        "Subrole": "Tactician",
        "Playstyle": "Poke",
        "Tier": "A",
        "Difficulty": 2,
        "Portrait Img": "images/hero_portraits/zenyatta-portrait.png",
        "Icon Img": "images/hero-icons/zenyatta-icon.png",
        "Counters": "Mauga, Orisa, Roadhog, D.Mon, Ramattra, Reinhardt",
        "Weaknesses": "Sombra, Tracer, Winston, Genji, Doomfist, Widowmaker",
        "Synergies": "Sigma, Brigitte, Baptiste, Wrecking Ball, Freja",
        "Tip": "Mantén Orb of Discord en el tanque enemigo cuando intente avanzar; obliga a retroceder a cualquier tanque sin escudo."
    }
];

let heroData = [];

const metaCompositions = {
    // 2026 Competitive Archetype Templates
    brawl: ["D.Mon", "Mei", "Vendetta", "Lucio", "Kiriko"],
    poke: ["Sigma", "Freja", "Ashe", "Wuyang", "Baptiste"],
    dive: ["Hazard", "Tracer", "Genji", "Juno", "Kiriko"],

    // Tank-specific base counter templates (enhanced dynamically by DPS/Support scoring)
    brawlvdva: ["Zarya", "Symmetra", "Mei", "Brigitte", "Kiriko"],
    brawlvdoom: ["Orisa", "Cassidy", "Venture", "Sombra", "Ana"],
    brawlvmonke: ["D.Mon", "Reaper", "Bastion", "Brigitte", "Ana"],
    brawlvball: ["Roadhog", "Cassidy", "Junkrat", "Sombra", "Ana"],
    brawlvhazard: ["Orisa", "Cassidy", "Sojourn", "Ana", "Brigitte"],

    pokevqueen: ["Orisa", "Bastion", "Ashe", "Kiriko", "Ana"],
    pokevmaui: ["Sigma", "Sojourn", "Bastion", "Ana", "Zenyatta"],
    pokevram: ["Orisa", "Bastion", "Freja", "Ana", "Wuyang"],
    pokevrein: ["Ramattra", "Bastion", "Freja", "Lucio", "Wuyang"],
    pokevhog: ["Mauga", "Sojourn", "Reaper", "Ana", "Kiriko"],
    pokevzarya: ["Reinhardt", "Bastion", "Ashe", "Baptiste", "Lucio"],
    pokevdmon: ["Orisa", "Sojourn", "Bastion", "Ana", "Zenyatta"],

    divevsig: ["Hazard", "Genji", "Tracer", "Sombra", "Kiriko"],
    divevorisa: ["Zarya", "Symmetra", "Sojourn", "Ana", "Zenyatta"],
    divevdomina: ["Winston", "Tracer", "Genji", "Juno", "Kiriko"]
};

const PRESETS_2026 = {
    dive26: ["Hazard", "Tracer", "Shion", "Juno", "Kiriko"],
    brawl26: ["D.Mon", "Vendetta", "Mei", "Lucio", "Doctrine"],
    poke26: ["Domina", "Freja", "Ashe", "Wuyang", "Ana"]
};

function fetchHeroData() {
    heroData = FALLBACK_HERO_DATA;
    populateHeroOptions();
    applyUrlParamsOrDefault();
}

function populateHeroOptions() {
    const tankSelect = document.getElementById('enemy1');
    const damageSelects = [document.getElementById('enemy2'), document.getElementById('enemy3')];
    const supportSelects = [document.getElementById('enemy4'), document.getElementById('enemy5')];

    heroData.forEach(hero => {
        const option = document.createElement('option');
        option.value = hero["Hero Name"];
        option.textContent = `${hero["Hero Name"]} (${hero["Playstyle"] || hero["Role"].split(' ')[0]})`;

        if (hero["Role"].includes("Tank")) {
            tankSelect.appendChild(option);
        } else if (hero["Role"].includes("Damage")) {
            damageSelects.forEach(select => select.appendChild(option.cloneNode(true)));
        } else if (hero["Role"].includes("Support")) {
            supportSelects.forEach(select => select.appendChild(option.cloneNode(true)));
        }
    });

    ['enemy1', 'enemy2', 'enemy3', 'enemy4', 'enemy5'].forEach((id, idx) => {
        const sel = document.getElementById(id);
        sel.addEventListener('change', () => {
            updateSlotPreview(idx + 1, sel.value);
            triggerAnalysis();
        });
    });
}

function updateSlotPreview(slotIndex, heroName) {
    const imgEl = document.getElementById(`preview-enemy${slotIndex}`);
    const subEl = document.getElementById(`slot${slotIndex}-sub`);
    const hero = heroData.find(h => h["Hero Name"] === heroName);

    if (hero) {
        imgEl.src = hero["Icon Img"];
        imgEl.alt = hero["Hero Name"];
        imgEl.style.opacity = '1';
        if (subEl) subEl.innerText = `${hero["Playstyle"] || ''} · ${hero["Subrole"] || ''}`.toUpperCase();
    } else {
        imgEl.style.opacity = '0.35';
        if (subEl) subEl.innerText = 'SIN SELECCIÓN';
    }
}

function applyPreset(names) {
    const ids = ['enemy1', 'enemy2', 'enemy3', 'enemy4', 'enemy5'];
    ids.forEach((id, i) => {
        const sel = document.getElementById(id);
        sel.value = names[i] || '';
        updateSlotPreview(i + 1, sel.value);
    });
    triggerAnalysis();
}

function applyUrlParamsOrDefault() {
    const params = new URLSearchParams(window.location.search);
    const enemyHeroName = params.get('enemy');

    if (enemyHeroName) {
        const hero = heroData.find(h => h["Hero Name"].toLowerCase() === enemyHeroName.toLowerCase());
        if (hero) {
            // Start with a balanced 2026 preset and slot the target hero in its role
            const base = [...PRESETS_2026.dive26];
            if (hero["Role"].includes("Tank")) base[0] = hero["Hero Name"];
            else if (hero["Role"].includes("Damage")) base[1] = hero["Hero Name"];
            else if (hero["Role"].includes("Support")) base[3] = hero["Hero Name"];
            applyPreset(base);
            return;
        }
    }

    applyPreset(PRESETS_2026.dive26);
}

function parseList(str) {
    if (!str) return [];
    return str.split(',').map(s => s.trim()).filter(Boolean);
}

function determineAndSuggestTeam(enemyTeam) {
    let playstyleCounts = { brawl: 0, poke: 0, dive: 0 };
    let tankHeroName = null;

    enemyTeam.forEach(heroName => {
        const hero = heroData.find(h => h["Hero Name"] === heroName);
        if (hero) {
            const role = hero["Role"];
            if (role.includes("Brawl")) playstyleCounts.brawl++;
            if (role.includes("Poke")) playstyleCounts.poke++;
            if (role.includes("Dive")) playstyleCounts.dive++;
            if (role.includes("Tank")) tankHeroName = heroName;
        }
    });

    // Update UI Playstyle Bars
    const total = Math.max(enemyTeam.length, 1);
    document.getElementById('count-brawl').innerText = playstyleCounts.brawl;
    document.getElementById('count-dive').innerText = playstyleCounts.dive;
    document.getElementById('count-poke').innerText = playstyleCounts.poke;

    document.getElementById('bar-brawl').style.width = `${Math.round((playstyleCounts.brawl / total) * 100)}%`;
    document.getElementById('bar-dive').style.width = `${Math.round((playstyleCounts.dive / total) * 100)}%`;
    document.getElementById('bar-poke').style.width = `${Math.round((playstyleCounts.poke / total) * 100)}%`;

    let baseTemplate = metaCompositions.dive;
    let strategyTitle = "META DIVE 2026";
    let strategyDesc = "Composición de alta velocidad centrada en colapsar objetivos aislados.";

    if (tankHeroName) {
        const tankMap = {
            "D.Va": [metaCompositions.brawlvdva, "ANTI-D.VA BEAM BRAWL", "Zarya, Symmetra y Mei ignoran Defense Matrix por completo mientras Brigitte protege la retaguardia."],
            "Doomfist": [metaCompositions.brawlvdoom, "ANTI-DOOM CROWD CONTROL", "Orisa, Sombra y Cassidy encadenan CC para cortar el ciclo de movilidad de Doomfist."],
            "Winston": [metaCompositions.brawlvmonke, "ANTI-WINSTON PUNISH", "D.Mon, Reaper y Bastion destruyen la burbuja de Winston y castigan su salto instantáneamente."],
            "Wrecking Ball": [metaCompositions.brawlvball, "ANTI-BALL LOCKDOWN", "Chain Hook, Hack y Flashbang impiden que Wrecking Ball pueda rodar o escapar con vida."],
            "Hazard": [metaCompositions.brawlvhazard, "ANTI-HAZARD CONTROL", "Orisa frena el Violent Leap de Hazard con Javelin y Ana anula su autosustento con Biotic Grenade."],
            "Orisa": [metaCompositions.divevorisa, "ANTI-ORISA BEAM & DISCORD", "Zarya y Symmetra atraviesan Javelin Spin mientras el Orb of Discord de Zenyatta fuerza sus cooldowns."],
            "Zarya": [metaCompositions.pokevzarya, "ANTI-ZARYA SHIELD & BURST", "Reinhardt aguanta la línea frontal mientras Bastion y Ashe rompen sus burbujas a distancia segura."],
            "Ramattra": [metaCompositions.pokevram, "ANTI-RAMATTRA POKE & CC", "Orisa y Ana mantienen a Ramattra alejado durante Nemesis Form mientras Freja castiga desde el aire."],
            "Roadhog": [metaCompositions.pokevhog, "ANTI-HOG BIOTIC DENIAL", "Ana bloquea el Take a Breather de Roadhog, Mauga farmea críticos en su hitbox y Kiriko limpia el Hook."],
            "Sigma": [metaCompositions.divevsig, "ANTI-SIGMA DIVE COLLAPSE", "Hazard, Genji y Sombra invaden el espacio corto de Sigma donde su barrera y proyectiles pierden valor."],
            "Reinhardt": [metaCompositions.pokevrein, "ANTI-REINHARDT SHIELD BREAK", "Ramattra golpea a través de su escudo con Pummel mientras Bastion y Freja destruyen su barrera."],
            "Junker Queen": [metaCompositions.pokevqueen, "ANTI-QUEEN CLEANSE & POKE", "El Suzu de Kiriko limpia todas las heridas de Rampage y Orisa niega sus entradas de Carnage."],
            "Mauga": [metaCompositions.pokevmaui, "ANTI-MAUGA DENIAL", "Ana y Zenyatta anulan Cardiac Overdrive mientras Sigma absorbe su fuego doble con Kinetic Grasp."],
            "Domina": [metaCompositions.divevdomina, "ANTI-DOMINA DIVE BYPASS", "Winston, Tracer y Genji saltan directamente detrás del Barrier Array de Domina con el Hyper Ring de Juno."],
            "D.Mon": [metaCompositions.pokevdmon, "ANTI-D.MON HIGH-GROUND POKE", "Orisa frena su avance cuerpo a cuerpo mientras Sojourn, Bastion y Zenyatta la desgastan antes de que acorte distancia."]
        };

        if (tankMap[tankHeroName]) {
            baseTemplate = [...tankMap[tankHeroName][0]];
            strategyTitle = tankMap[tankHeroName][1];
            strategyDesc = tankMap[tankHeroName][2];
        }
    } else {
        if (playstyleCounts.poke > playstyleCounts.brawl && playstyleCounts.poke > playstyleCounts.dive) {
            baseTemplate = [...metaCompositions.dive];
            strategyTitle = "DIVE COUNTER-POKE";
            strategyDesc = "Contra una composición de Poke, el Dive coordinado cierra la distancia antes de que puedan desgastarte.";
        } else if (playstyleCounts.dive > playstyleCounts.brawl && playstyleCounts.dive > playstyleCounts.poke) {
            baseTemplate = [...metaCompositions.brawl];
            strategyTitle = "BRAWL ANTI-DIVE";
            strategyDesc = "Contra una composición de Dive, jugar agrupados en Brawl impide que consigan objetivos aislados.";
        } else if (playstyleCounts.brawl > 0) {
            baseTemplate = [...metaCompositions.poke];
            strategyTitle = "POKE ANTI-BRAWL";
            strategyDesc = "Contra una composición de Brawl, el Poke desde ángulos abiertos agota sus recursos antes de que lleguen a cuerpo a cuerpo.";
        }
    }

    // Dynamic adjustment: score all heroes against the full 5-hero enemy lineup
    // so changing enemy DPS/Supports also refines the suggested composition
    const baseSet = new Set(baseTemplate);
    const scoredHeroes = heroData.map(candidate => {
        let score = baseSet.has(candidate["Hero Name"]) ? 3.5 : 0;
        const counters = parseList(candidate["Counters"]);
        const weaknesses = parseList(candidate["Weaknesses"]);
        const hitTargets = [];

        enemyTeam.forEach(enemyName => {
            if (counters.includes(enemyName)) {
                score += (enemyName === tankHeroName ? 3.0 : 2.2);
                hitTargets.push(enemyName);
            }
            if (weaknesses.includes(enemyName)) {
                score -= 1.8;
            }
        });

        if (candidate["Tier"] === "S") score += 0.4;
        return { hero: candidate, score, hitTargets };
    });

    const pickTop = (roleName, count) => {
        return scoredHeroes
            .filter(item => item.hero["Role"].includes(roleName))
            .sort((a, b) => b.score - a.score)
            .slice(0, count);
    };

    const finalPicks = [
        ...pickTop("Tank", 1),
        ...pickTop("Damage", 2),
        ...pickTop("Support", 2)
    ];

    const dominantLabel = document.getElementById('enemy-archetype-label');
    if (dominantLabel) {
        const maxStyle = Object.entries(playstyleCounts).sort((a, b) => b[1] - a[1])[0];
        dominantLabel.innerText = enemyTeam.length ? `${maxStyle[0].toUpperCase()} (${maxStyle[1]}/${enemyTeam.length})` : 'SIN SELECCIÓN';
    }

    document.getElementById('strategy-badge').innerText = strategyTitle;
    document.getElementById('strategy-summary').innerText = strategyDesc;

    displaySuggestedTeam(finalPicks);
}

function displaySuggestedTeam(suggestedEntries) {
    const suggestedTeamDiv = document.getElementById('suggested-team-heroes');
    suggestedTeamDiv.innerHTML = '';

    const tankRow = document.createElement('div');
    const damageRow = document.createElement('div');
    const supportRow = document.createElement('div');

    tankRow.className = 'role-row';
    damageRow.className = 'role-row';
    supportRow.className = 'role-row';

    suggestedEntries.forEach(entry => {
        const hero = typeof entry === 'string'
            ? heroData.find(h => h["Hero Name"] === entry)
            : entry.hero;
        const hitTargets = (entry && entry.hitTargets) || [];

        if (hero) {
            const heroDiv = document.createElement('a');
            heroDiv.className = 'hero-card';
            heroDiv.href = `index.html#${hero["Key"] || hero["Hero Name"].toLowerCase()}`;

            const img = document.createElement('img');
            img.src = hero["Icon Img"];
            img.alt = hero["Hero Name"];
            heroDiv.appendChild(img);

            const body = document.createElement('div');
            body.className = 'hero-card-body';

            const top = document.createElement('div');
            top.className = 'hero-card-top';

            const heroNameElem = document.createElement('p');
            heroNameElem.className = 'hero-card-name';
            heroNameElem.innerText = hero["Hero Name"];
            top.appendChild(heroNameElem);

            const roleTag = document.createElement('span');
            roleTag.className = 'hero-card-role';
            roleTag.innerText = `${hero["Role"]} · ${hero["Subrole"] || ''}`;
            top.appendChild(roleTag);

            body.appendChild(top);

            const reason = document.createElement('p');
            reason.className = 'hero-card-reason';
            if (hitTargets.length > 0) {
                reason.innerText = `Counter directo contra ${hitTargets.join(', ')}.`;
            } else {
                reason.innerText = hero["Tip"] ? hero["Tip"].split('.')[0] + '.' : 'Sinergia clave para esta composición.';
            }
            body.appendChild(reason);

            heroDiv.appendChild(body);

            if (hero["Role"].includes("Tank")) {
                tankRow.appendChild(heroDiv);
            } else if (hero["Role"].includes("Damage")) {
                damageRow.appendChild(heroDiv);
            } else if (hero["Role"].includes("Support")) {
                supportRow.appendChild(heroDiv);
            }
        }
    });

    suggestedTeamDiv.appendChild(tankRow);
    suggestedTeamDiv.appendChild(damageRow);
    suggestedTeamDiv.appendChild(supportRow);
}

function triggerAnalysis() {
    const enemyTeam = [
        document.getElementById('enemy1').value,
        document.getElementById('enemy2').value,
        document.getElementById('enemy3').value,
        document.getElementById('enemy4').value,
        document.getElementById('enemy5').value,
    ].filter(Boolean);

    determineAndSuggestTeam(enemyTeam);
}

document.getElementById('submit-button').addEventListener('click', triggerAnalysis);

document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.preset;
        if (PRESETS_2026[key]) {
            applyPreset(PRESETS_2026[key]);
        }
    });
});

const clearBtn = document.getElementById('clear-team-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        applyPreset(['', '', '', '', '']);
    });
}

document.addEventListener('DOMContentLoaded', fetchHeroData);
