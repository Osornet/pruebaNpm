export default function platzom(str){
    let translation = str;
    //Si la palabra original es un palindromo las reglas anteriores ya no cuentan y e devuelve la misma palabra
    // intercalando entre mayusculas y minusculas
    const reverse = (str) => str.split('').reverse().join('');
    function MayMin(str) {
        let capitalize = true;
        let translation = ""
        str.split('').forEach(char => {
            translation += capitalize? char.toUpperCase(): char.toLowerCase();
            capitalize = !capitalize;
        });
        return translation;
    
    }
    if(str == reverse(str)){
        return (MayMin(str));
    }
    // Si la palabra termina en "ar" se le quitan esos dos caracteres;
    if(str.toLowerCase().endsWith("ar")){
        translation = str.slice(0, -2);
    }
    // si la palara inicia con "z" se le añade "pe" al final.
    if(str.toLowerCase().startsWith("z")){
        translation += "pe";
    }
    //si la palabra traducida tiene mas de 10 letras se tiene que partir por la mitad y unir con 
    // un guion en medio
    const length = translation.length;
    if(length >= 10){
        const firstHalf = translation.slice(0,Math.round(length / 2));
        const secondHalf = translation.slice(Math.round(length / 2)); // si no se le manda el segundo parametro es hasta el final
        translation = firstHalf + "-" + secondHalf;

    }
    return translation;
}






