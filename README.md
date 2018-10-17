# LenguajePrueba

LenguajePrueba es un lenguaje inventado para probar 
como se suber los archivos a npm [link de google](https://www.google.com.co/)

## Descripcion del idioma
- Si la palabra original es un palindromo las reglas anteriores ya no cuentan y e devuelve la misma palabra intercalando entre mayusculas y minusculas
- Si la palabra termina en "ar" se le quitan esos dos caracteres
- si la palara inicia con "z" se le añade "pe" al final.
- si la palabra traducida tiene mas de 10 letras se tiene que partir por la mitad y unir con un guion en medio

## Instalación 
```
npm install pruebanpm
```
## Uso
```
import pruebanpm from 'pruebanpm'

console.log(pruebanpm("Programar")); //Program
console.log(pruebanpm("zorro")); //zorrope
console.log(pruebanpm("zarpar")); //zarppe
console.log(pruebanpm("abecedario")); //abece-dario
console.log(pruebanpm("sometemos")); //sOmEtEmOs
```

## Creditos

[Manuel Osorio](https://github.com/Osornet)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
