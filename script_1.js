answer = prompt('Quel est ton nom étranger?');
console.log(`Bonjour à toi ${answer}.`);
console.log("Tu as envie d'utiliser tes talents de haxxx0r pour afficher les messages cachés dans nos autres scripts ?");
answer2 = prompt(`Bien ${answer}. Alors jeune hacker, tu relèves le défi ? (o/n)`);
if (answer2 === "o") {
  console.log(`Tu as fait le bon choix ${answer}. Rends-toi dans le fichier index.html. Tu devrais y trouver une jolie balise <script>, modifie-la à ta guise et découvre nos plus grands secrets.`);
} else {
  console.log("Ok t'es tout naze, retourne jouer à Candy Crush et laisse nous tranquille.");
};
