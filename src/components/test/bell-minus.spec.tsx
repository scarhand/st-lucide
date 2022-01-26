import { newSpecPage } from '@stencil/core/testing';
import { IconBellMinus } from '../bell-minus';
import { createElement, BellMinus }  from 'lucide';

describe('icon-bell-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBellMinus],
      html: `<icon-bell-minus></icon-bell-minus>`,
    });

    const svg = createElement(BellMinus);

    expect(page.root).toEqualHtml(`
      <icon-bell-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bell-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBellMinus],
      html: `<icon-bell-minus stroke="blue"></icon-bell-minus>`,
    });

    const svg = createElement(BellMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bell-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bell-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBellMinus],
      html: `<icon-bell-minus stroke-width="2"></icon-bell-minus>`,
    });

    const svg = createElement(BellMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bell-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bell-minus>
    `);
  });
});
