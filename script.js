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
      
      link: "https://aleaplicativos.github.io/confeti/"
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
  
