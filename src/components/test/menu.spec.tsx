import { newSpecPage } from '@stencil/core/testing';
import { IconMenu } from '../menu';
import { createElement, Menu }  from 'lucide';

describe('icon-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMenu],
      html: `<icon-menu></icon-menu>`,
    });

    const svg = createElement(Menu);

    expect(page.root).toEqualHtml(`
      <icon-menu class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-menu>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMenu],
      html: `<icon-menu stroke="blue"></icon-menu>`,
    });

    const svg = createElement(Menu);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-menu class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-menu>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMenu],
      html: `<icon-menu stroke-width="2"></icon-menu>`,
    });

    const svg = createElement(Menu);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-menu class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-menu>
    `);
  });
});
