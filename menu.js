const menu = document.querySelector("#menu");

const oppgavesider = [
    { navn: "Oppgave 1", url: "oppgave01.html"},
    { navn: "Oppgave 2", url: "oppgave02.html"},
    { navn: "Oppgavesett 7", url: "index.html"},
    { navn: "Oppgave 3", url: "oppgave03.html"},
    { navn: "Oppgave 4 & 5", url: "oppgave04.html"}
];

for(const oppgaveside of oppgavesider) {
    const valgtside = document.location.href;
    const sjekk = valgtside.search(oppgaveside.url);

    let klasse = "";

    if(sjekk > 0) {
        klasse = "active";
    }

    menu.innerHTML += `
        <a class="${klasse}" href="${oppgaveside.url}">${oppgaveside.navn}</a>
    `;

}