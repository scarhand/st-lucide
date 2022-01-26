import { newSpecPage } from '@stencil/core/testing';
import { IconSidebarOpen } from '../sidebar-open';
import { createElement, SidebarOpen }  from 'lucide';

describe('icon-sidebar-open', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSidebarOpen],
      html: `<icon-sidebar-open></icon-sidebar-open>`,
    });

    const svg = createElement(SidebarOpen);

    expect(page.root).toEqualHtml(`
      <icon-sidebar-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sidebar-open>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSidebarOpen],
      html: `<icon-sidebar-open stroke="blue"></icon-sidebar-open>`,
    });

    const svg = createElement(SidebarOpen);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sidebar-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sidebar-open>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSidebarOpen],
      html: `<icon-sidebar-open stroke-width="2"></icon-sidebar-open>`,
    });

    const svg = createElement(SidebarOpen);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sidebar-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sidebar-open>
    `);
  });
});
