import { newSpecPage } from '@stencil/core/testing';
import { IconCloud } from '../cloud';
import { createElement, Cloud }  from 'lucide';

describe('icon-cloud', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloud],
      html: `<icon-cloud></icon-cloud>`,
    });

    const svg = createElement(Cloud);

    expect(page.root).toEqualHtml(`
      <icon-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloud],
      html: `<icon-cloud stroke="blue"></icon-cloud>`,
    });

    const svg = createElement(Cloud);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloud],
      html: `<icon-cloud stroke-width="2"></icon-cloud>`,
    });

    const svg = createElement(Cloud);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud>
    `);
  });
});
