import { newSpecPage } from '@stencil/core/testing';
import { IconNavigation2 } from '../navigation-2';
import { createElement, Navigation2 }  from 'lucide';

describe('icon-navigation-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconNavigation2],
      html: `<icon-navigation-2></icon-navigation-2>`,
    });

    const svg = createElement(Navigation2);

    expect(page.root).toEqualHtml(`
      <icon-navigation-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-navigation-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNavigation2],
      html: `<icon-navigation-2 stroke="blue"></icon-navigation-2>`,
    });

    const svg = createElement(Navigation2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-navigation-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-navigation-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNavigation2],
      html: `<icon-navigation-2 stroke-width="2"></icon-navigation-2>`,
    });

    const svg = createElement(Navigation2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-navigation-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-navigation-2>
    `);
  });
});
