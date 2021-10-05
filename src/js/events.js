export function createEvents() {
  const events = [
    {
      id: 0,
      company: 'Volvo',
      name: 'Välkomna Linda',
      description:
        'Linda gör sin LIA hos oss från 22 November. Kom och fira in henne på kontoret!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.009),
      time: '18:20',
      location: 'Gatan',
      img: '../assets/volvo.png',
    },
    {
      id: 1,
      company: 'Queenslab',
      name: 'Bugg för nybörjare',
      description:
        'Kalasigt värre blir det.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.003),
      time: '10:30',
      location: 'Gatan',
      img: '../assets/queenslab.jpeg',
    },
    {
      id: 2,
      company: 'Ericsson',
      name: 'Öppen diskussion om MINI-LINK TN',
      description:
        'Vi kör ett skojigt event hos oss på Lindholmspiren.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.006),
      time: '16:45',
      location: 'Gatan',
      img: '../assets/ericsson.png',
    },
    {
      id: 3,
      company: 'Grebban',
      name: 'Föreläsning om yoga',
      description:
        'Återigen dags för att göra typ ingenting.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.01),
      time: '10:30',
      location: 'Gatan',
      img: '../assets/grebban.png',
    },
    {
      id: 4,
      company: 'Dearfriends',
      name: 'Paddelträning',
      description:
        'Kom och häng med oss på Dearfriends och lär dig absolut ingenting.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.002),
      time: '18:20',
      location: 'Gatan',
      img: '../assets/dearfriends.svg',
    },
    {
      id: 5,
      company: 'Knowit',
      name: 'Hela havet stormar',
      description:
        'Kolla kolla vad vi kan göra med ett tennisrack.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.004),
      time: '19:00',
      location: 'Gatan',
      img: '../assets/knowit.png',
    },
    {
      id: 6,
      company: 'Hiq',
      name: 'Ölhävartävling',
      description:
        'Tjofadderittan vad det går.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.007),
      time: '16:00',
      location: 'Gatan',
      img: '../assets/hiq.png',
    },
    {
      id: 7,
      company: 'Knowit',
      name: 'Strukturera upp din struktur på jobbet',
      description:
        'Skoj som tusan kommer vi ha när vi paddlar kanot genom skogen',
      date: setDate(1.002),
      time: '13:45',
      location: 'Gatan',
      img: '../assets/knowit.png',
    },
    {
      id: 8,
      company: 'Mild',
      name: 'Lär dig de senaste simteknikerna',
      description:
        'Spring genom slottis så blir du glad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.002),
      time: '12:50',
      location: 'Gatan',
      img: '../assets/mild.png',
    },
    {
      id: 9,
      company: 'Volvo',
      name: 'Kickoff inför hösten',
      description:
        'Välkomna på kickoff i Jonseredsstugan.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.001),
      time: '15:15',
      location: 'Gatan',
      img: '../assets/volvo.png',
    },
    {
      id: 10,
      company: 'Queenslab',
      name: 'Stoutdrickande på Queenshead',
      description:
        'Inga queens utan kings. Head.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
      date: setDate(1.01),
      time: '18:30',
      location: 'Gatan',
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
      description: 'blahablaha',
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
      description: 'tjofräs tjofräs',
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
  //const date = new Date(int * Date.now());
  let now = new Date(int * Date.now());
  let date = now.toString().slice(0, 16);
  return date;
}
/*
function setTime() {
  const hour = getRandomInt(9);
  const min = ['00', '15', '30', '45'];
  const randomMin = min[getRandomInt(3)];
  return '1' + hour + ':' + randomMin;
}

function setPastDate() {
  let int = '1.00' + getRandomInt(9);
  let now = new Date(Date.now() / int);
  let time = dateFormat(now, 'dddd, mmmm dS, yyyy, ');
  return time;
}
function getRandomInt(max) {
  //Add 1 so we don´t get a 0
  return Math.floor(Math.random() * max) + 1;
}*/
