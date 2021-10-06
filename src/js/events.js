export function createEvents() {
  const events = [
    {
      id: 0,
      company: 'Volvo',
      name: 'Välkomna Linda',
      description:
        'Linda gör sin LIA hos oss från 22 November. Kom och fira in henne på kontoret! Things vehicula laorizzle shut the shizzle up.!',
      date: setDate(1.009),
      time: '18:20',
      location: 'Gamla Varvsgatan',
      img: '../assets/volvo.png',
    },
    {
      id: 1,
      company: 'Queenslab',
      name: 'Bugg för nybörjare',
      description:
        'Kalasigt värre blir det. Fo shizzle daahng dawg. Integizzle semper you son of a bizzle sizzle shiz.',
      date: setDate(1.003),
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
      date: setDate(1.006),
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
      date: setDate(1.01),
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
      date: setDate(1.004),
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
      date: setDate(1.007),
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
      date: setDate(1.005),
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
      date: setDate(1.0029),
      time: '12:50',
      location: 'Delawaregatan',
      img: '../assets/mild.png',
    },
    {
      id: 9,
      company: 'Volvo',
      name: 'Kickoff inför hösten',
      description:
        'Välkomna på kickoff i Jonseredsstugan. Maecenizzle my shizz crazy izzle lectus.',
      date: setDate(1.0019),
      time: '15:15',
      location: 'Kommendörsgatan',
      img: '../assets/volvo.png',
    },
    {
      id: 10,
      company: 'Queenslab',
      name: 'Öl på Queenshead',
      description:
        'Inga queens utan kings. Head. Phat eu fo shizzle my nizzle. Aenizzle tempizzle ass boom shackalack.',
      date: setDate(1.0101),
      time: '18:30',
      location: 'Klareborgsgatan',
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
      location: 'Volvo Torslanda',
      reviews: [
        {
          date: setDate(0.999),
          name: 'Johan',
          rating: 4,
          review:
            'Överlag helt galet bra. Men platsen kunde ha varit någon annanstans',
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
      location: 'Nordstan',
      reviews: [
        {
          date: setDate(0.9985),
          name: 'Kalle',
          rating: 1,
          review: 'Det var inte så jävla roligt',
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
