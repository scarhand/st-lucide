import { newSpecPage } from '@stencil/core/testing';
import { IconTrello } from '../trello';
import { createElement, Trello }  from 'lucide';

describe('icon-trello', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTrello],
      html: `<icon-trello></icon-trello>`,
    });

    const svg = createElement(Trello);

    expect(page.root).toEqualHtml(`
      <icon-trello class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-trello>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrello],
      html: `<icon-trello stroke="blue"></icon-trello>`,
    });

    const svg = createElement(Trello);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-trello class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-trello>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrello],
      html: `<icon-trello stroke-width="2"></icon-trello>`,
    });

    const svg = createElement(Trello);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-trello class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-trello>
    `);
  });
});
