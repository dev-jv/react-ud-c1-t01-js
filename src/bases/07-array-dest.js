// -------------------------------------------- Array Destructuring 

const personaje = ['Trubel', 'Nick', 'Monroe']

console.log( personaje[0] ); 
console.log( personaje[1] ); 
console.log( personaje[2] ); 

// ------------------------------------
const personajes = ['Trubel', 'Nick', 'Monroe'] 

const [ ,,k ] = personajes;
console.log( k );

// ------------------------------------

const retornarArreglo = () => {
    return ['ABC', 123];
}

const [ p, q ] = retornarArreglo();
console.log( p, q )

// ------------------------------------
const useState = (valor) => {
    return [ valor, () => { console.log('Grimm'); }]
}

const arr = useState('Trubel');
console.log(arr);
arr[1]();

// ------------------------------------
const useState2 = (valor) => {
    return [ valor, () => { console.log('Grimm'); }]
}

const [nombre , setNombre] = useState2('Trubel');
console.log(nombre);
setNombre();



