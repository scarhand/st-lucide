import { newSpecPage } from '@stencil/core/testing';
import { IconWifi } from '../wifi';
import { createElement, Wifi }  from 'lucide';

describe('icon-wifi', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWifi],
      html: `<icon-wifi></icon-wifi>`,
    });

    const svg = createElement(Wifi);

    expect(page.root).toEqualHtml(`
      <icon-wifi class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wifi>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWifi],
      html: `<icon-wifi stroke="blue"></icon-wifi>`,
    });

    const svg = createElement(Wifi);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wifi class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wifi>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWifi],
      html: `<icon-wifi stroke-width="2"></icon-wifi>`,
    });

    const svg = createElement(Wifi);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wifi class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wifi>
    `);
  });
});
