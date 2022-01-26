import { newSpecPage } from '@stencil/core/testing';
import { IconLogOut } from '../log-out';
import { createElement, LogOut }  from 'lucide';

describe('icon-log-out', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLogOut],
      html: `<icon-log-out></icon-log-out>`,
    });

    const svg = createElement(LogOut);

    expect(page.root).toEqualHtml(`
      <icon-log-out class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-log-out>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLogOut],
      html: `<icon-log-out stroke="blue"></icon-log-out>`,
    });

    const svg = createElement(LogOut);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-log-out class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-log-out>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLogOut],
      html: `<icon-log-out stroke-width="2"></icon-log-out>`,
    });

    const svg = createElement(LogOut);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-log-out class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-log-out>
    `);
  });
});
