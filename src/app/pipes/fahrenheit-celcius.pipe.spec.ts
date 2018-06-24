import { FahrenheitCelciusPipe } from './fahrenheit-celcius.pipe';

describe('FahrenheitCelciusPipe', () => {
  it('create an instance', () => {
    const pipe = new FahrenheitCelciusPipe();
    expect(pipe).toBeTruthy();
  });
});
