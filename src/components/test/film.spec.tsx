import { newSpecPage } from '@stencil/core/testing';
import { IconFilm } from '../film';
import { createElement, Film }  from 'lucide';

describe('icon-film', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFilm],
      html: `<icon-film></icon-film>`,
    });

    const svg = createElement(Film);

    expect(page.root).toEqualHtml(`
      <icon-film class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-film>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilm],
      html: `<icon-film stroke="blue"></icon-film>`,
    });

    const svg = createElement(Film);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-film class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-film>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilm],
      html: `<icon-film stroke-width="2"></icon-film>`,
    });

    const svg = createElement(Film);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-film class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-film>
    `);
  });
});
