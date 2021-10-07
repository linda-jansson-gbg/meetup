export function createEvents() {
  const events = [
    {
      id: 0,
      company: 'Volvo',
      name: 'Kom och säg hej',
      description:
        'Linda startar sin LIA i november. Kom och fira in henne på kontoret! Things vehicula laorizzle shut the shizzle up.!',
      date: setDate(1.0022),
      time: '18:20',
      location: 'Gamla Varvsgatan',
      img: '../assets/volvo.png',
    },
    {
      id: 1,
      company: 'QueensLab',
      name: 'Bugg för nybörjare',
      description:
        'Kalasigt värre blir det. Fo shizzle daahng dawg. Integizzle semper you son of a bizzle sizzle shiz.',
      date: setDate(1.0021),
      time: '10:30',
      location: 'Kaptensgatan',
      img: '../assets/queenslab.jpeg',
    },
    {
      id: 2,
      company: 'Ericsson',
      name: 'Diskussion om MINI-LINK TN',
      description:
        'Vi kör ett skojigt event hos oss på Lindholmspiren. Praesent shiznit mi bizzle mauris phat bibendizzle. Away get down get down viverra lectus.',
      date: setDate(1.0035),
      time: '16:45',
      location: 'Amiralitetsgatan',
      img: '../assets/ericsson.png',
    },
    {
      id: 3,
      company: 'Grebban',
      name: 'Föreläsning om yoga',
      description:
        'Återigen dags för att göra typ ingenting.  Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      date: setDate(1.0049),
      time: '10:30',
      location: 'Hängmattan Majorna',
      img: '../assets/grebban.png',
    },
    {
      id: 4,
      company: 'Dearfriends',
      name: 'Paddelträning',
      description:
        'Kom och häng med oss på Dearfriends och lär dig absolut ingenting. Fizzle mammasay mammasa mamma oo sa nizzle izzle leo sodalizzle crackalackin.',
      date: setDate(1.002),
      time: '18:20',
      location: 'Djurgårdsgatan',
      img: '../assets/dearfriends.svg',
    },
    {
      id: 5,
      company: 'Knowit',
      name: 'Hela havet stormar',
      description:
        'Kolla kolla vad vi kan göra med ett tennisrack. Sizzle go to hizzle fo shizzle, pulvinizzle im in the shizzle, condimentum eget, yo mamma id, dizzle.',
      date: setDate(1.0048),
      time: '19:00',
      location: 'Karl Johansgatan',
      img: '../assets/knowit.png',
    },
    {
      id: 6,
      company: 'Hiq',
      name: 'Ölhävartävling',
      description:
        'Tjofadderittan vad det går. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      date: setDate(1.004),
      time: '16:00',
      location: 'Styrmansgatan',
      img: '../assets/hiq.png',
    },
    {
      id: 7,
      company: 'Knowit',
      name: 'Strukturera din struktur',
      description:
        'Skoj som tusan kommer vi ha när vi paddlar kanot genom skogen. Black quizzle. Mauris ligula urna, tempor id, scelerisque venenatizzle.',
      date: setDate(1.003),
      time: '13:45',
      location: 'Koopmansgatan',
      img: '../assets/knowit.png',
    },
    {
      id: 8,
      company: 'Mild',
      name: 'Lär dig simma',
      description:
        'Spring genom slottis så blir du glad. Lorem ipsum dolor, sit amet consectetur adipisicing elit!',
      date: setDate(1.00099),
      time: '12:50',
      location: 'Delawaregatan',
      img: '../assets/mild.png',
    },
    {
      id: 9,
      company: 'Volvo',
      name: 'Kickoff inför hösten',
      description:
        'Välkomna på kickoff. Maecenizzle my shizz crazy izzle lectus.',
      date: setDate(1.0009),
      time: '15:15',
      location: 'Kommendörsgatan',
      img: '../assets/volvo.png',
    },
    {
      id: 10,
      company: 'QueensLab',
      name: 'Joina oss queens i Majorna.',
      description:
        'Inga kings bara queens. Phat eu fo shizzle my nizzle. Aenizzle tempizzle ass boom shackalack.',
      date: setDate(1.0001),
      time: '18:30',
      location: 'Klareborgsgatan',
      img: '../assets/queenslab.jpeg',
    },
    {
      id: 11,
      company: 'Humblebee',
      name: 'Shopping på korvmojjen',
      description:
        'Ät dig mätt på korv. Lorem ipsum dolor, sit amet consectetur adipisicing elit!',
      date: setDate(1.017),
      time: '18:30',
      location: 'Lotsgatan',
      img: '../assets/queenslab.jpeg',
    },
  ];
  return events;
}
export function createPastEvents() {
  const events = [
    {
      id: 0,
      company: 'Volvo',
      name: 'Nya volvo-appen',
      description:
        'Phat eu fo shizzle my nizzle. Aenizzle tempizzle ass boom shackalack.',
      date: setDate(0.999),
      time: '10:00',
      location: 'Mariaplan',
      reviews: [
        {
          date: setDate(0.999),
          name: 'Johan',
          rating: 4,
          review: 'Överlag helt galet bra. Men missade också halva eventet.',
          time: '11:24',
        },
        {
          date: setDate(0.9998),
          name: 'Sara',
          rating: 2,
          review:
            'Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          time: '12:46',
        },
      ],
    },
    {
      id: 1,
      company: 'QueensLab',
      name: 'Trubadur',
      description:
        'Black quizzle. Mauris ligula urna, tempor id, scelerisque venenatizzle.',
      date: setDate(0.998),
      time: '18:00',
      location: 'Ölstugan Tullen Majorna',
      reviews: [
        {
          date: setDate(0.9985),
          name: 'Kalle',
          rating: 1,
          review: 'Det var inte bra. Kass trubadur.',
          time: '12:34',
        },
        {
          date: setDate(0.9986),
          name: 'Lisa',
          rating: 3,
          review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          time: '14:56',
        },
      ],
    },
  ];
  return events;
}

function setDate(int) {
  if (int < 1) {
    let now = new Date(int * Date.now());
    let date = now.toString().slice(0, 16);
    return date;
  }
  return int;
}
