export type level = {
    title: string,
    color: string,
    icon: 'down' | 'up' ,
    imc: number[],
    yourImc?: number;
}

export const levels: level[] =[
    { title: 'Magraza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#90EE90', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepreso', color: '#E2B036', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },

];

export const calculateimc = ( height: number, weight: number ) => {
    let imc = weight / (height * height);

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
            let levelTwo: level = {...levels[i]}

            levelTwo.yourImc = parseFloat(imc.toFixed(2));
            return levelTwo;
        }
    }

    return null;
}