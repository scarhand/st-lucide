import { newSpecPage } from '@stencil/core/testing';
import { IconLuggage } from '../luggage';
import { createElement, Luggage }  from 'lucide';

describe('icon-luggage', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLuggage],
      html: `<icon-luggage></icon-luggage>`,
    });

    const svg = createElement(Luggage);

    expect(page.root).toEqualHtml(`
      <icon-luggage class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-luggage>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLuggage],
      html: `<icon-luggage stroke="blue"></icon-luggage>`,
    });

    const svg = createElement(Luggage);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-luggage class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-luggage>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLuggage],
      html: `<icon-luggage stroke-width="2"></icon-luggage>`,
    });

    const svg = createElement(Luggage);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-luggage class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-luggage>
    `);
  });
});
