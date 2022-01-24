import { newSpecPage } from '@stencil/core/testing';
import { IconHome } from '../home';
import { createElement, Home }  from 'lucide';

describe('icon-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHome],
      html: `<icon-home></icon-home>`,
    });

    const svg = createElement(Home);

    expect(page.root).toEqualHtml(`
      <icon-home class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-home>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHome],
      html: `<icon-home stroke="blue"></icon-home>`,
    });

    const svg = createElement(Home);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-home class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-home>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHome],
      html: `<icon-home stroke-width="2"></icon-home>`,
    });

    const svg = createElement(Home);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-home class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-home>
    `);
  });
});
