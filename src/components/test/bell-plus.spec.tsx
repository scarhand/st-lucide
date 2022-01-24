import { newSpecPage } from '@stencil/core/testing';
import { IconBellPlus } from '../bell-plus';
import { createElement, BellPlus }  from 'lucide';

describe('icon-bell-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBellPlus],
      html: `<icon-bell-plus></icon-bell-plus>`,
    });

    const svg = createElement(BellPlus);

    expect(page.root).toEqualHtml(`
      <icon-bell-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bell-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBellPlus],
      html: `<icon-bell-plus stroke="blue"></icon-bell-plus>`,
    });

    const svg = createElement(BellPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bell-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bell-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBellPlus],
      html: `<icon-bell-plus stroke-width="2"></icon-bell-plus>`,
    });

    const svg = createElement(BellPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bell-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bell-plus>
    `);
  });
});
