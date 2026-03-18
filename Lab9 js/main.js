
const fruits = ["raisin", "orange", "poire"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); 
fruits[1] = "mangue";
console.log(fruits.length); 
fruits.push("banane");
const last = fruits.pop();
fruits.unshift("kiwi");
const first = fruits.shift();
const quelquesFruits = fruits.slice(0, 2);
fruits.splice(1, 1, "abricot");
console.log({ last, first, fruits, quelquesFruits });
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}
fruits.forEach(fruit => console.log(`Fruit: ${fruit}`));

const notes = [12, 8, 17, 5, 14, 19, 10];
const bonifiees = notes.map(n => Math.min(n + 1, 20));
const admissibles = notes.filter(n => n >= 10);
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const premiereFaible = notes.find(n => n < 10);
const aMentionTB = notes.some(n => n >= 18);
const toutesAdmissibles = notes.every(n => n >= 10);
console.log({ bonifiees, admissibles, moyenne, premiereFaible, aMentionTB, toutesAdmissibles });

const asc = [...notes].sort((a, b) => a - b);
const desc = [...notes].sort((a, b) => b - a);
console.log({ asc, desc });

const etudiant = {
  prenom: "Lina",
  nom: "Durand",
  age: 21,
  notes: [14, 16, 12],
  moyenne() {
    const s = this.notes.reduce((a, n) => a + n, 0);
    return s / this.notes.length;
  }
};
console.log(etudiant.prenom);
console.log(etudiant["nom"]);
console.log(etudiant.moyenne());

etudiant.age = 22;
etudiant.filiere = "Informatique"; 
delete etudiant.filiere;            
console.log(Object.keys(etudiant)); 

const { prenom, nom, ville = "(inconnue)" } = etudiant;
console.log(`${prenom} ${nom} — ${ville}`);

const base = { a: 1, b: 2 };
const extension = { b: 3, c: 4 };
const fusion = { ...base, ...extension }; 

function pickAB({ a, b, ...reste }) {
  return { a, b, reste };
}
console.log(pickAB({ a: 1, b: 2, c: 3, d: 4 }));

const o = { x: 10, y: 20 };
console.log(Object.keys(o));  
console.log(Object.values(o)); 
console.log(Object.entries(o));
const cop = Object.assign({}, o, { y: 30 });
console.log(cop);
console.log(o.hasOwnProperty("x"));

const livres = [
  { id: 1, titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, stock: 3, prix: 35.5 },
  { id: 2, titre: "You Don’t Know JS", auteur: "Kyle Simpson", annee: 2015, stock: 0, prix: 28.0 },
  { id: 3, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, stock: 5, prix: 32.9 },
  { id: 4, titre: "JavaScript: The Good Parts", auteur: "Douglas Crockford", annee: 2008, stock: 2, prix: 22.0 },
];

const titres = livres.map(l => l.titre);
const enStock = livres.filter(l => l.stock > 0);
const valeurStock = livres.reduce((acc, l) => acc + l.prix * l.stock, 0);
const plusAncien = livres.reduce((min, l) => (l.annee < min.annee ? l : min));
const plusRecent = livres.reduce((max, l) => (l.annee > max.annee ? l : max));
console.log({ titres, enStock, valeurStock, plusAncien, plusRecent });



const livre3 = livres.find(l => l.id === 3);
const livresMaj = livres.map(l => (l.id === 2 ? { ...l, stock: l.stock + 1 } : l));
console.log(livre3, livresMaj);



const parAnnee = livres.reduce((acc, l) => {
  (acc[l.annee] ||= []).push(l);
  return acc;
}, {});
console.log(parAnnee);


function lister(livres) {
  return [...livres].sort((a, b) => a.titre.localeCompare(b.titre));
}

function ajouter(livres, livre) {
  const newId = livre.id ?? Date.now();
  const nouveauLivre = { ...livre, id: newId };
  return [...livres, nouveauLivre];
}

function maj(livres, id, patch) {
  return livres.map(livre =>
    livre.id === id ? { ...livre, ...patch } : livre
  );
}

function supprimer(livres, id) {
  return livres.filter(livre => livre.id !== id);
}

function rechercher(livres, q) {
  const query = q.toLowerCase();
  return livres.filter(livre =>
    livre.titre.toLowerCase().includes(query) ||
    livre.auteur.toLowerCase().includes(query)
  );
}

let bibliotheque = [];

bibliotheque = ajouter(bibliotheque, { titre: "1984", auteur: "George Orwell" });
bibliotheque = ajouter(bibliotheque, { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry" });

console.log("Liste triée :", lister(bibliotheque));
console.log("Recherche 'prince' :", rechercher(bibliotheque, "prince"));

bibliotheque = maj(bibliotheque, bibliotheque[0].id, { auteur: "Orwell" });
console.log("Après mise à jour :", bibliotheque);

bibliotheque = supprimer(bibliotheque, bibliotheque[0].id);
console.log("Après suppression :", bibliotheque);
