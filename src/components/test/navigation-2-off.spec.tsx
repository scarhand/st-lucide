import { newSpecPage } from '@stencil/core/testing';
import { IconNavigation2Off } from '../navigation-2-off';
import { createElement, Navigation2Off }  from 'lucide';

describe('icon-navigation-2-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconNavigation2Off],
      html: `<icon-navigation-2-off></icon-navigation-2-off>`,
    });

    const svg = createElement(Navigation2Off);

    expect(page.root).toEqualHtml(`
      <icon-navigation-2-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-navigation-2-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNavigation2Off],
      html: `<icon-navigation-2-off stroke="blue"></icon-navigation-2-off>`,
    });

    const svg = createElement(Navigation2Off);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-navigation-2-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-navigation-2-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNavigation2Off],
      html: `<icon-navigation-2-off stroke-width="2"></icon-navigation-2-off>`,
    });

    const svg = createElement(Navigation2Off);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-navigation-2-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-navigation-2-off>
    `);
  });
});
