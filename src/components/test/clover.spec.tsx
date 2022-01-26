import { newSpecPage } from '@stencil/core/testing';
import { IconClover } from '../clover';
import { createElement, Clover }  from 'lucide';

describe('icon-clover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClover],
      html: `<icon-clover></icon-clover>`,
    });

    const svg = createElement(Clover);

    expect(page.root).toEqualHtml(`
      <icon-clover class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clover>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClover],
      html: `<icon-clover stroke="blue"></icon-clover>`,
    });

    const svg = createElement(Clover);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clover class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clover>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClover],
      html: `<icon-clover stroke-width="2"></icon-clover>`,
    });

    const svg = createElement(Clover);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clover class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clover>
    `);
  });
});
