db.dropDatabase();

db.pelaajat.save (
    [
        {score:'10', player:'The Noob'},
        {score:'20', player:'The Joe'},
        {score:'30', player:'The Master'}
    ]
);

db.statsit.save(
    [
        {arvo:'20 min', kuvaus:'Pisin peliaika', player:'The Noob'},
        {arvo:'15', kuvaus:'Korkein pistemäärä', player:'The Joe'},
        {arvo:'8', kuvaus:'Vuoroja pelattu', player:'The Master'}
    ]
);

