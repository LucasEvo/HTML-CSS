let frases = [
    "A Enguia Prateada",
    "O Golfinho Dourado",
    "O Anão Cambaleante",
    "O Pégaso Sorridente",
    "O Pónei Empinado",
    "A Rosa Atraente",
    "O Cervo Que Corre",
    "O Lobo Uivante",
    "O Cordeiro Abatido",
    "O Demônio Malicioso",
    "O Bode Bêbado",
    "O Espírito Saltitante",
    "A Horda Rugidor",
    "O Bufão Carrancudo",
    "A Montanha Solitário",
    "A Águia Errante",
    "O Sátiro Misterioso",
    "O Cão Ladrante",
    "A Aranha Negra",
    "A Estrela Reluzente"
  ];
  
  function gerarFrase() {
    let frase = frases[Math.floor(Math.random() * frases.length)];
  
    document.querySelector("#frase-gerada").textContent = frase;
  }
  
