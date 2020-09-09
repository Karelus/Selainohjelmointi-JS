// Luodaan olio ja alustetaan samalla sen tietojäsenet
let book1 = {
    isbn: 'G554AF23',
    authors: ['Dan Brown'],
    name: 'Kadonnut symboli',
    publicationDate: new Date('15-09-2020'),

    getIsbn: function () {
        return this.isbn;
    },
    setIsbn: function (isbn) {
        this.isbn = isbn;
    },
    getAuthors: function () {
        return this.authors;
    },
    setAuthors: function (authors) {
        this.authors = authors;
    }
};

let book2 = {
    isbn: 'G554AF23',
    authors: ['Dan Brown'],
    name: 'Murtamaton linnake',
    publicationDate: new Date('15-09-2020')
}

let book3 = {
    isbn: 'G53DER3',
    authors: ['Dan Brown'],
    name: 'Murtamaton Linnake',
    publicationDate: new Date('15-09-2020')
}

/*
// Luetaan olion tietojäsenten arvoja. 2 eri tapaa.
console.log(book2.name);
console.log(book2['isbn']);

// Sijoitetaan uudet arvot joihinkintietojäseniin. 2 eri tapaa.
book2.isbn = 'U1U2';
book2.publicationDate = new Date('07-07-1970')

console.log(book2['isbn']);
console.log(book2.publicationDate);

// Luodaan lisää pari oliota. Huomaa, että niillä on aivan samat  arvot tietojäsenissään
let book3 = {
    isbn: 'G554AF23',
    authors: ['Sjöwall', 'Wahlöö'],
    name: 'Missä poliisi viipyy',
    publicationDate: new Date('01-02-1966')
};

let book4 = {
    isbn: 'G554AF23',
    authors: ['Sjöwall', 'Wahlöö'],
    name: 'Missä poliisi viipyy',
    publicationDate: new Date('01-02-1966')
};

// Vertaillaan olioiden samuutta - identiteetin vertailu
console.log('Olio book3 on identiteetiltään sama kuin olio book3: ' + (book3 == book3));
console.log('Olio book3 on identiteetiltään sama kuin olio book4: ' + (book3 == book4));

// Vertaillaan olioiden samuutta - arvojen samuus
// Tällä kertaa vertailumme perustuu vain yhteen arvoon kerrallaan
console.log('Olio book3 on tilaltaan sama kuin olio book4: ' + (book3.isbn == book4.isbn));
console.log('Olio book3 on tilaltaan sama kuin olio book4: '
    + (book3.publicationDate == book4.publicationDate));

// Lisätään olioon tietojäsen
book4.serie = 'Komisaario Beck';
console.log(book4.serie);

// Lisätään olioon metodeita eli funktiopiirteitä
let book5 = {
    isbn: '',
    authors: null,
    name: '',
    publicationDate: null,

    getIsbn: function () {
        return this.isbn;
    },
    setIsbn: function (isbn) {
        this.isbn = isbn;
    },
    getAuthors: function () {
        return this.authors;
    },
    setAuthors: function (authors) {
        this.authors = authors;
    }
};

// Kutsutaan muutamia metodeita
console.log(book5.getIsbn);
console.log(book5.getIsbn());
book5.setIsbn('T1T2');
console.log(book5.getIsbn());

// Tulostetaan olion tietojäsenten nimet ja niiden arvot for in -silmukalla
// Käytetään ES6 ominaisuuksia, joten tämä ei toimi kaikissa selaimissa
// Esimerkiksi upotamme muuttujien arvoja suoraan merkkijonoihin.
for (let property in book4) {
    if (book4.hasOwnProperty(property)) {
        console.log(`${property}: ${book4[property]}`);
    }
}

// Muistakaa: for in -silmukka ei takaa järjestystä

for (let property in book4) {
    if (!book4.hasOwnProperty(property)) {
        continue;
    }
    console.log(`${property}: ${book4[property]}`);
}

// Väliaikainen olio
// Perustietotyypeillä, kuten numeric ja string ei ole tietenkään omia metodeita
// Miten seuraava on mahdollista?
var aNumber = 1.2345;
console.log(aNumber.toFixed(2));

// On olemassa käärinoliotietotyyppi Number
// Siinä on metodi toFixed
// Yllä tapahtuu siten, että perustietotyyppu kääritään hetkellisesti
// oliotietotyyppiin Number, jolloin sen toFixed-metodi on käytettävissä.
// Kun homma on ohi, niin käärintä poistetaan tai unohdetaan ts. jatketaan taas
// perustietotyypillä.
*/