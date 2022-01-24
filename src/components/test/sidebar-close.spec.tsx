import { newSpecPage } from '@stencil/core/testing';
import { IconSidebarClose } from '../sidebar-close';
import { createElement, SidebarClose }  from 'lucide';

describe('icon-sidebar-close', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSidebarClose],
      html: `<icon-sidebar-close></icon-sidebar-close>`,
    });

    const svg = createElement(SidebarClose);

    expect(page.root).toEqualHtml(`
      <icon-sidebar-close class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sidebar-close>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSidebarClose],
      html: `<icon-sidebar-close stroke="blue"></icon-sidebar-close>`,
    });

    const svg = createElement(SidebarClose);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sidebar-close class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sidebar-close>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSidebarClose],
      html: `<icon-sidebar-close stroke-width="2"></icon-sidebar-close>`,
    });

    const svg = createElement(SidebarClose);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sidebar-close class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sidebar-close>
    `);
  });
});
