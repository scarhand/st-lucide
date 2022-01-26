import { newSpecPage } from '@stencil/core/testing';
import { IconPocket } from '../pocket';
import { createElement, Pocket }  from 'lucide';

describe('icon-pocket', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPocket],
      html: `<icon-pocket></icon-pocket>`,
    });

    const svg = createElement(Pocket);

    expect(page.root).toEqualHtml(`
      <icon-pocket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pocket>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPocket],
      html: `<icon-pocket stroke="blue"></icon-pocket>`,
    });

    const svg = createElement(Pocket);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pocket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pocket>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPocket],
      html: `<icon-pocket stroke-width="2"></icon-pocket>`,
    });

    const svg = createElement(Pocket);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pocket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pocket>
    `);
  });
});
