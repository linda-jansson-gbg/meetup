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
    // await textarea.setValue('change');
    // expect(input.classes('red')).toBeTruthy();
  });
  it('should show error message if input fields are empty when button is clicked', async () => {
    const input = wrapper.find('input');
    await input.setValue('');
    const button = wrapper.find('button');
    await button.trigger('click');
    const message = wrapper.find('.error');
    expect(message.text()).toBe('* your name is missing');
  });
});
