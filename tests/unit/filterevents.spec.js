import { shallowMount } from '@vue/test-utils';
import FilterEvents from '@/components/FilterEvents.vue';

describe('FilterEvents.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(FilterEvents, {
      propsData: {
        events: [
          {
            company: 'Queenslab',
            date: 1.0001,
            description:
              'Inga queens utan kings. Head. Phat eu fo shizzle my nizzle. Aenizzle tempizzle ass boom shackalack.',
            id: 10,
            img: '../assets/queenslab.jpeg',
            location: 'Klareborgsgatan',
            name: 'Öl på Queenshead',
            time: '18:30',
          },
          {
            company: 'Volvo',
            date: 1.0009,
            description:
              'Välkomna på kickoff i Jonseredsstugan. Maecenizzle my shizz crazy izzle lectus.',
            id: 9,
            img: '../assets/volvo.png',
            location: 'Kommendörsgatan',
            name: 'Kickoff inför hösten',
            time: '15:15',
          },
          {
            company: 'Mild',
            date: 1.00099,
            description:
              'Spring genom slottis så blir du glad. Lorem ipsum dolor, sit amet consectetur adipisicing elit!',
            id: 8,
            img: '../assets/mild.png',
            location: 'Delawaregatan',
            name: 'Lär dig simma',
            time: '12:50',
          },
        ],
        joined: [],
      },
    });
  });
  it('should render this months events', () => {
    const events = wrapper.find('article');
    const today = new Date();
    const date = today.toUTCString('default', { month: 'short' });
    const thisMonth = date.slice(8, 11);
    expect(events.text()).toContain(thisMonth);
  });
});
