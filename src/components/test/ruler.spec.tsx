import { newSpecPage } from '@stencil/core/testing';
import { IconRuler } from '../ruler';
import { createElement, Ruler }  from 'lucide';

describe('icon-ruler', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRuler],
      html: `<icon-ruler></icon-ruler>`,
    });

    const svg = createElement(Ruler);

    expect(page.root).toEqualHtml(`
      <icon-ruler class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-ruler>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRuler],
      html: `<icon-ruler stroke="blue"></icon-ruler>`,
    });

    const svg = createElement(Ruler);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-ruler class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-ruler>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRuler],
      html: `<icon-ruler stroke-width="2"></icon-ruler>`,
    });

    const svg = createElement(Ruler);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-ruler class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-ruler>
    `);
  });
});
