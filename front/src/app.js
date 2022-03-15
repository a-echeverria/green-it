import page from 'page';
import IndiceApi from './api/indice';

(async () => {
  const app = document.querySelector('#app main');

  const home = app.querySelector('indice-home');
  const skeleton = app.querySelector('.skeleton');

  const req = await IndiceApi.get();

  function pageChanged(ctx, next) {
    skeleton.removeAttribute('hidden');
    home.active = false;
    next();
  }

  page('/', pageChanged, async () => {
    await import('./views/indice-home.js');

    home.indices = req.data || [];
    home.active = true;

    skeleton.setAttribute('hidden', '');
  });

  page('*', () => {
    console.log('404');
    skeleton.removeAttribute('hidden');
  })

  page();

})();
