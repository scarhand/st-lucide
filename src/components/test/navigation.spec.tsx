import { newSpecPage } from '@stencil/core/testing';
import { IconNavigation } from '../navigation';
import { createElement, Navigation }  from 'lucide';

describe('icon-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconNavigation],
      html: `<icon-navigation></icon-navigation>`,
    });

    const svg = createElement(Navigation);

    expect(page.root).toEqualHtml(`
      <icon-navigation class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-navigation>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNavigation],
      html: `<icon-navigation stroke="blue"></icon-navigation>`,
    });

    const svg = createElement(Navigation);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-navigation class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-navigation>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNavigation],
      html: `<icon-navigation stroke-width="2"></icon-navigation>`,
    });

    const svg = createElement(Navigation);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-navigation class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-navigation>
    `);
  });
});
