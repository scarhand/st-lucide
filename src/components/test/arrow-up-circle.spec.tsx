import { newSpecPage } from '@stencil/core/testing';
import { IconArrowUpCircle } from '../arrow-up-circle';
import { createElement, ArrowUpCircle }  from 'lucide';

describe('icon-arrow-up-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpCircle],
      html: `<icon-arrow-up-circle></icon-arrow-up-circle>`,
    });

    const svg = createElement(ArrowUpCircle);

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-up-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpCircle],
      html: `<icon-arrow-up-circle stroke="blue"></icon-arrow-up-circle>`,
    });

    const svg = createElement(ArrowUpCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-up-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpCircle],
      html: `<icon-arrow-up-circle stroke-width="2"></icon-arrow-up-circle>`,
    });

    const svg = createElement(ArrowUpCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-up-circle>
    `);
  });
});
