import { Selector } from 'testcafe';

fixture `Test Routing to About Page`
    .page `http://localhost:8080/about`;

test('Route to about page', async t => {
  await t
    .expect(Selector('#main').innerText).eql('About');
});
