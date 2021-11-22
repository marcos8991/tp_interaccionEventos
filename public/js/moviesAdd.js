window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');





    titulo.addEventListener('mouseover', function() {
        this.style.color = 'red'
       });
    
       let tituloSecreto = document.querySelector('#titulo');
       let estadoSecreto = 0;
    
       const checkKey = (key) => {
           switch (true) {
                case key === 's' && state === 0:
                   ++state
                   break;
                case key === 'e' && state === 1:
                   ++state
                   break;
                case key === 'c' && state === 2:
                   ++state
                   break;
                case key === 'r' && state === 3:
                   ++state
                   break;
                case key === 'e' && state === 4:
                   ++state
                   break;
                case key === 't' && state === 5:
                   ++state
                   break;
                case key === '0' && state === 6:
                    alert('SECRETO MAGICO')
                   break; 
                default:
                    state = 0;
                    break;       
           }
       }
    
    }
