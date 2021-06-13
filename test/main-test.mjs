import { expect } from 'chai';

// eslint-disable-next-line import/extensions
import testFunction from '../main.mjs';

it('Test Case #1', () => {
  expect(testFunction()).to.be.true();
});
