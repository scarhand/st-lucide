import { newSpecPage } from '@stencil/core/testing';
import { IconCroissant } from '../croissant';
import { createElement, Croissant }  from 'lucide';

describe('icon-croissant', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCroissant],
      html: `<icon-croissant></icon-croissant>`,
    });

    const svg = createElement(Croissant);

    expect(page.root).toEqualHtml(`
      <icon-croissant class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-croissant>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCroissant],
      html: `<icon-croissant stroke="blue"></icon-croissant>`,
    });

    const svg = createElement(Croissant);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-croissant class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-croissant>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCroissant],
      html: `<icon-croissant stroke-width="2"></icon-croissant>`,
    });

    const svg = createElement(Croissant);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-croissant class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-croissant>
    `);
  });
});
