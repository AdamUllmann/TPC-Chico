const importImages = (id, count, date) => {
  const formattedDate = date.split('-').join(':');
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(require(`../Images/${formattedDate}/${i}.jpg`));
  }
  return images;
};

const eventsData = [
  {
    id: 1,
    date: '2024-02-15',
    title: 'General Club Meetup',
    images: importImages(1, 11, '02-15-2024'),
  },
  {
    id: 2,
    date: '2024-03-28',
    title: 'Start of Game Jam',
    images: [],
  },
  {
    id: 3,
    date: '2024-04-25',
    title: 'End of Game Jam',
    images: [],
  },
  {
    id: 4,
    date: '2024-05-09',
    title: 'Spring 2024 Final meeting',
    images: [],
  },
];

export default eventsData;
