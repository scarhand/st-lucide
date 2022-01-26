import { newSpecPage } from '@stencil/core/testing';
import { IconSkull } from '../skull';
import { createElement, Skull }  from 'lucide';

describe('icon-skull', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSkull],
      html: `<icon-skull></icon-skull>`,
    });

    const svg = createElement(Skull);

    expect(page.root).toEqualHtml(`
      <icon-skull class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-skull>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSkull],
      html: `<icon-skull stroke="blue"></icon-skull>`,
    });

    const svg = createElement(Skull);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-skull class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-skull>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSkull],
      html: `<icon-skull stroke-width="2"></icon-skull>`,
    });

    const svg = createElement(Skull);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-skull class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-skull>
    `);
  });
});
