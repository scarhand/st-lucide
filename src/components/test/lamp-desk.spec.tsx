import { newSpecPage } from '@stencil/core/testing';
import { IconLampDesk } from '../lamp-desk';
import { createElement, LampDesk }  from 'lucide';

describe('icon-lamp-desk', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLampDesk],
      html: `<icon-lamp-desk></icon-lamp-desk>`,
    });

    const svg = createElement(LampDesk);

    expect(page.root).toEqualHtml(`
      <icon-lamp-desk class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lamp-desk>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampDesk],
      html: `<icon-lamp-desk stroke="blue"></icon-lamp-desk>`,
    });

    const svg = createElement(LampDesk);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lamp-desk class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lamp-desk>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampDesk],
      html: `<icon-lamp-desk stroke-width="2"></icon-lamp-desk>`,
    });

    const svg = createElement(LampDesk);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lamp-desk class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lamp-desk>
    `);
  });
});
