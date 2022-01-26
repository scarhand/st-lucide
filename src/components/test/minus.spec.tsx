import { newSpecPage } from '@stencil/core/testing';
import { IconMinus } from '../minus';
import { createElement, Minus }  from 'lucide';

describe('icon-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMinus],
      html: `<icon-minus></icon-minus>`,
    });

    const svg = createElement(Minus);

    expect(page.root).toEqualHtml(`
      <icon-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinus],
      html: `<icon-minus stroke="blue"></icon-minus>`,
    });

    const svg = createElement(Minus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinus],
      html: `<icon-minus stroke-width="2"></icon-minus>`,
    });

    const svg = createElement(Minus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-minus>
    `);
  });
});
