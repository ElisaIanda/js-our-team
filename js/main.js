// Utilizzando i dati forniti, creare un array di oggetti per 
// rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: 
// nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede



const team = document.getElementById("team");
const cardName = document.getElementById("card name");
const cardJob = document.getElementById("card-position");
const imgContainer = document.getElementById('image-container');

// Creao Array di oggetti 
const teamList = [
    {
        nome: " Wayne Barnett",
        rule: " Founder & CEO",
        photo: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: " Angela Caroll",
        rule: " Chief Editor",
        photo: " angela-caroll-chief-editor.jpg"
    },
    {
        nome: " Walter Gordon",
        rule: " Office Manager",
        photo: " walter-gordon-office-manager.jpg"
    },
    {
        nome: " Angela Lopez",
        rule: " Social Media Manager",
        photo: " angela-lopez-social-media-manager.jpg"
    },
    {
        nome: " Scott Estrada",
        rule: " Developer",
        photo: " scott-estrada-developer.jpg"
    },
    {
        nome: " Barbara Ramos",
        rule: " Graphic Designer",
        photo: " barbara-ramos-graphic-designer.jpg"
    },
];

// console.log(teamList);
for (let i = 0; i < teamList.length; i++) {
    const singolPersonteam = teamList[i];
    team.innerHTML += `<div class="card-body"><div class="card-title text-center">${singolPersonteam.nome}</div></div>`;
    team.innerHTML += `<div class="card-text text-center">${singolPersonteam.rule} <img src="/img/${singolPersonteam.photo}"</div>`;
}

// const images = [

//     'img/wayne-barnett-founder-ceo.jpg',
//     'img/angela-caroll-chief-editor.jpg',
//     'img/walter-gordon-office-manager.jpg',
//     'img/angela-lopez-social-media-manager.jpg',
//     'img/scott-estrada-developer.jpg',
//     'img/barbara-ramos-graphic-designer.jpg',

// ];

// for (let i = 0; i < images.length; i++) {
//     const img = document.createElement('img');
//     img.src = images[i];
//     imgContainer.appendChild(img);
//     const newImg = imgContainer.appendChild(img);
//     team.innerHTML += `${newImg}`;
// }


