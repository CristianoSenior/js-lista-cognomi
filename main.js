// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova


// creare var per chiedre all'utente di inserire il proprio cognome
var cognomeUtente = prompt("Ciao , insrisci il tuo cognome");
// creare var array in cui inserire una lista di cognomi
var listaFesta = ["messi", "ronaldo" ,"caccamo" , "water"] ;

// inserire il cognome dell'utente all'interno dell'array
listaFesta.push(cognomeUtente) ;


// ordinare la lista della listaFesta
var listaOrdinata = listaFesta.sort();
console.log(listaOrdinata);

// variabile che salva la posizione del cognomeUtente
var posizione = listaFesta.indexOf(cognomeUtente);



var invitatiN , contenutoPrecedente;

for (var i = 0; i < listaOrdinata.length; i++) {
  invitatiN = listaOrdinata[i] ;
  console.log(invitatiN);
contenutoPrecedente = document.getElementById('ciao').innerHTML;
// creare output che stampa la lista di cognomi ordinata alfabeticamente
document.getElementById('ciao').innerHTML = contenutoPrecedente + " " + invitatiN;
// if ( cognomeUtente === listaOrdinata[i] ) {
//   posizione = i ;
//   console.log(posizione);
//
// }
}
console.log("la posizione del tuo cognome è :" + posizione);



// creare output che dica anche in che posizione è il cognome inserito
document.getElementById('arrivederci').innerHTML = "La posizione tua, pierletto è:" + posizione ;
