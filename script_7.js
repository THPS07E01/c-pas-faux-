const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 },
  { title: "Peepoodo et l'Arbre Magique", id: 666666, rented: 0 }
];

/* 1 */ books.forEach(book => { // Vérifie si les livres ont été empruntés ou non
/* 1 */   if (book.rented > 0){
/* 1 */     console.log(`Le livre ${book.title} a déjà été loué ${book.rented} fois !`);
/* 1 */   } else { (book.rented === 0)
/* 1 */     console.log(`Le livre ${book.title} n'a jamais été loué, fonce !`);}
/* 1 */ });

/* 2 */ let bestBook = books.sort((a, b) => a.rented - b.rented).reverse()[0]; // Affiche le livre le plus emprunté
/* 2 */   console.log(`Le livre le plus emprunté est donc ${bestBook.title}, ${bestBook.rented} fois, incroyable !`);

/* 3 */ let worstBook = books.sort((a, b) => a.rented - b.rented)[0]; // Affiche le livre le moins emprunté
/* 3 */   console.log(`Le livre le moins emprunté est donc ${worstBook.title}, ${worstBook.rented} fois, incroyable, file donc le louer ou Monsieur Bernard ne sera pas content !`);

/* 4 */ let bookId = books.forEach(book => { // Affiche le livre ayant l'ID n° 873495
/* 4 */   if (book.id.toString().match(/873495/)) {
/* 4 */     console.log(`Voici le livre avec l'ID 873495 : ${book.title}`)};
/* 4 */ })

/* 5 */ let newList = [];
/* 5 */ books.forEach(book => { // Supprime le livre ayant l'ID 133712 et affiche le reste des livres
/* 5 */   if (book.id.toString().match(/133712/)) {
/* 5 */     let del = []
/* 5 */     del.push(book)
/* 5 */     console.log(`Le livre ayant l'ID 133712 (${book.title}) a bien été supprimé !`);
/* 5 */   } else {
/* 5 */     newList.push(book)};
/* 5 */ });
/* 5 */   console.log(newList)

/* 6 */ console.log(books.sort((a, b) => a.title.localeCompare(b.title))); // Tri les livres par ordre alphabétique
