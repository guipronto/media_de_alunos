let students = [

    {
        nome :"ana" , notaP1 : 7.0 , notaP2 : 2.0
    },

    
    {
        nome :"pedro" , notaP1 : 8.5 , notaP2 : 5.4
    },

    {
        nome :"maria" , notaP1 : 8.5 , notaP2 : 9.4
    },

    {
        nome :"jose" , notaP1 : 5.3 , notaP2 : 4.0,
    }

];


function calcularMedia(student){

return ((student.notaP1 + student.notaP2)/2);



}

let media;

for(let i = 0 ; i < students.length;i++){
    let media = calcularMedia(students[i]);

    if(media >= 6){

        alert(`${students[i].nome}: Média = ${media} : parabens voce foi aprovado `);
    
    }else{
        alert(`${students[i].nome}: Média = ${media} : infelizmente voce foi reprovado`);
    }
    
    
}



