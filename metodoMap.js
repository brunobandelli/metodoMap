/*Metodo .map*/

/*O método .map() é uma função de alta ordem (higher-order function) que está disponível para arrays. 
Ele permite que você itere sobre os elementos de um array e execute uma determinada operação em cada elemento, 
criando um novo array com os resultados dessas operações. 
O novo array resultante terá o mesmo tamanho do array original. */


/*SINTAXE*/

/*
O map é um metodo que precisa que você passe no máximo 3 parametros (elemento, indice, array),
sendo que o elemento é obrigatório. E o índice e o array são opcionais funcionando de forma respectiva.
E alem disso é capaz de retornar um novo array com o mesmo tamanho do array original, como vantagem em relação ao forEach.
*/

/*
const newArray = arrayOriginal.map(function(elementoAtual, índice, array) {
  // Operações que serão realizadas em cada elemento
  return resultado;
});


ou com Arrow Function:

const newArray = arrayOriginal.map((elemento, indice, array) => {
  // Código a ser executado para cada elemento
    return resultado;
});




Onde:

arrayOriginal: O array no qual você deseja aplicar o método .map().
elementoAtual: O elemento atual do array enquanto o método itera.
índice (opcional): O índice do elemento atual no array durante a iteração.
array (opcional): O próprio array original sendo percorrido.
*/


/*-------------------------------------------------------------------------------------------------------------------------*/

/*EXEMPLOS*/

/*EXEMPLO 01*/

// const arrayOriginal = [1, 2, 3, 4, 5];

// const newArray = arrayOriginal.map(function(numero) {
//   return numero * 2;
// });

// console.log(newArray); // IRA RETORNAR O NOVO ARRAY: [2, 4, 6, 8, 10]


// const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

/*EXEMPLO 02*/
// cursos.map((el,i) => {
//     console.log("Curso: " + el + " - Posição do curso: " + i)
// })


/*EXEMPLO 03*/
// let c= cursos.map((el, i) => {
//     return el
// })

// console.log(c)


/*EXEMPLO 04*/
// let el = document.getElementsByTagName("div")
// el = [...el]
// el.map((e,i)=>{
//     e.innerHTML="Brunão"
// })



/*EXEMPLO 05*/
// const el = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el,({innerHTML})=> innerHTML)
// console.log(val)


/*EXEMPLO  06*/
// const converterInt= (e) => parseInt(e)
// const dobrar= (e) =>e*2
// let num = ['1','2','3','4','5'].map(dobrar)
// console.log(num)