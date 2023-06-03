const games = [
    {      
      link: "https://aleaplicativos.github.io/aranhacolorida/"
    },
    {      
      link: "https://aleaplicativos.github.io/cortinaelastica/"
    },

    {      
      link: "https://aleaplicativos.github.io/guitarraonline/"
    },

    {
       link: "https://aleaplicativos.github.io/pianinhohtml5/"
    },

    {
      
      link: "https://aleaplicativos.github.io/lapis3d/"
    },

    {
      
      link: "https://aleaplicativos.github.io/anelcolorido/"
    },
    {
      
      link: "https://aleaplicativos.github.io/coisaelastica2/"
    },
    {
     
      link: "https://aleaplicativos.github.io/baralhoestrategia/"
    },

    {
     
      link: "https://aleaplicativos.github.io/brickgamebloco/"
    },
    {
     
      link: "https://aleaplicativos.github.io/fantasmaemoji/"
    },
    {
     
      link: "https://aleaplicativos.github.io/brickgameretro/"
    },
    {
     
      link: "https://aleaplicativos.github.io/sorte/"
    },
    {
     
      link: "https://aleaplicativos.github.io/confeti/"
    },
    {
     
      link: "https://aleaplicativos.github.io/camarao/"
    },
    {
      
      link: "https://aleaplicativos.github.io/labirintourso/"
    },
    {
      
      link: "https://aleaplicativos.github.io/bolacolor/"
    },
    {
      
      link: "https://aleaplicativos.github.io/destroi/"
    },
    {
      
      link: "https://aleaplicativos.github.io/unicornsome/"
    },
    {
      
      link: "https://aleaplicativos.github.io/quebracabeca/"
    },
    {
      
      link: "https://aleaplicativos.github.io/elasticmesh/"
    },
    {
      
      link: "https://aleaplicativos.github.io/planeta/"
    },
    {
      
      link: "https://aleaplicativos.github.io/bonecos/"
    },
    {
      
      link: "https://aleaplicativos.github.io/bolapula/"
    },
    {
      
      link: "https://aleaplicativos.github.io/caveira/"
    },
    {
      
      link: "https://aleaplicativos.github.io/fogos/"
    },
    {
      
      link: "https://aleaplicativos.github.io/melecaelastic/"
    },
    {
      
      link: "https://aleaplicativos.github.io/impossivel/"
    },
    {
      
      link: "https://aleaplicativos.github.io/cubomagico/"
    },
    {
      
      link: "https://aleaplicativos.github.io/bolamagnetica/"
    },
    // Adicione quantos jogos desejar nesta lista
  ];
  
  const gameContainer = document.getElementById("game-container");
  const gameWrapper = document.getElementById("game-wrapper");
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  
  let currentGameIndex = -1;
  
  function loadGame() {
    const randomIndex = Math.floor(Math.random() * games.length);
    currentGameIndex = randomIndex;
    gameWrapper.innerHTML = `<iframe src="${games[currentGameIndex].link}" width="100%" height="100%"></iframe>`;
  }
  
  function navigateToPreviousGame() {
    if (currentGameIndex === 0) {
      return;
    }
  
    currentGameIndex--;
    loadGame();
  }
  
  function navigateToNextGame() {
    if (currentGameIndex === games.length - 1) {
      return;
    }
  
    currentGameIndex++;
    loadGame();
  }
  
  previousButton.addEventListener("click", navigateToPreviousGame);
  nextButton.addEventListener("click", navigateToNextGame);
  
  loadGame();
  
