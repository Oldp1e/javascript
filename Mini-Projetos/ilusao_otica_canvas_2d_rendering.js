    let canvas;
    // Define o numero de Linhas e Colunas a ser criado
      let canvasSquaring = 0;
    // Tamanha do canvas
      let canvasSquareSize = 900;
    // Define o valor limite para a divisao de quadradados dentro do canvas
      let illusionCoefficient = 1250;

      // Conta o número de Tags Canvas na tela
      let numberOfCanvasOnScreen = document.getElementsByTagName("canvas").length;
      // Define o tamanho de cada canvas para ser igual a variavel canvasSquareSize
      for(let i = 0; i < numberOfCanvasOnScreen; i ++){
        let canvas = document.getElementsByTagName('canvas')[i];
      canvas.width  = canvasSquareSize ;
      canvas.height = canvasSquareSize ;
 

        // Pede um Novo Frame
        window.requestAnimationFrame(canvasLoop);
    }
  
    function canvasLoop(timeStamp){
        draw();

        // Mantem o loop de requisicao de frames
        window.requestAnimationFrame(canvasLoop);
    }

    function draw(){   
      if(canvasSquaring < illusionCoefficient){

        canvasSquaring += 5
      } else{
        
        canvasSquaring -= illusionCoefficient 
      }
               // Divide o tamanho do Quadrado por 4 para manter a proporção entre linha e coluna
        let increasingCoefficient = (canvasSquareSize/canvasSquaring);
      
       // Seleciona o Canvas
      let c = document.getElementById("my_canvas");
      // Define o canvas 2d
      let ctx = c.getContext("2d");
      ctx.beginPath();
    // Coordenada de referencia para a coluna
    let coord = 0;
    // Repete de acordo com o numero de linhas
    for(let i = 0; i < canvasSquaring; i ++){
      coord += increasingCoefficient
      ctx.moveTo(canvasSquareSize, coord)
      ctx.lineTo(0, coord)
      ctx.moveTo(coord, canvasSquareSize)
      ctx.lineTo(coord, 0)   
    }
     
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.stroke()
 
    }

