import { newSpecPage } from '@stencil/core/testing';
import { IconNavigationOff } from '../navigation-off';
import { createElement, NavigationOff }  from 'lucide';

describe('icon-navigation-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconNavigationOff],
      html: `<icon-navigation-off></icon-navigation-off>`,
    });

    const svg = createElement(NavigationOff);

    expect(page.root).toEqualHtml(`
      <icon-navigation-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-navigation-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNavigationOff],
      html: `<icon-navigation-off stroke="blue"></icon-navigation-off>`,
    });

    const svg = createElement(NavigationOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-navigation-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-navigation-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNavigationOff],
      html: `<icon-navigation-off stroke-width="2"></icon-navigation-off>`,
    });

    const svg = createElement(NavigationOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-navigation-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-navigation-off>
    `);
  });
});
