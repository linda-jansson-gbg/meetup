import { shallowMount } from '@vue/test-utils';
import ReviewForm from '@/components/ReviewForm.vue';

describe('ReviewForm.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ReviewForm, {});
  });
  it('should add class red to empty input when out of focus', async () => {
    // const input = wrapper.find('input');
    // await input.setValue('');
    // const textarea = wrapper.find('textarea');
    // await textarea.trigger('click');
    // expect(input.classes('red')).toBeTruthy();
  });
});
