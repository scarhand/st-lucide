import { newSpecPage } from '@stencil/core/testing';
import { IconDisc } from '../disc';
import { createElement, Disc }  from 'lucide';

describe('icon-disc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDisc],
      html: `<icon-disc></icon-disc>`,
    });

    const svg = createElement(Disc);

    expect(page.root).toEqualHtml(`
      <icon-disc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-disc>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDisc],
      html: `<icon-disc stroke="blue"></icon-disc>`,
    });

    const svg = createElement(Disc);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-disc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-disc>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDisc],
      html: `<icon-disc stroke-width="2"></icon-disc>`,
    });

    const svg = createElement(Disc);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-disc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-disc>
    `);
  });
});
