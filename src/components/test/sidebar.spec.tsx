import { newSpecPage } from '@stencil/core/testing';
import { IconSidebar } from '../sidebar';
import { createElement, Sidebar }  from 'lucide';

describe('icon-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSidebar],
      html: `<icon-sidebar></icon-sidebar>`,
    });

    const svg = createElement(Sidebar);

    expect(page.root).toEqualHtml(`
      <icon-sidebar class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sidebar>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSidebar],
      html: `<icon-sidebar stroke="blue"></icon-sidebar>`,
    });

    const svg = createElement(Sidebar);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sidebar class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sidebar>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSidebar],
      html: `<icon-sidebar stroke-width="2"></icon-sidebar>`,
    });

    const svg = createElement(Sidebar);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sidebar class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sidebar>
    `);
  });
});
