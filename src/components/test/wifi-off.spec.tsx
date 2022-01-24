import { newSpecPage } from '@stencil/core/testing';
import { IconWifiOff } from '../wifi-off';
import { createElement, WifiOff }  from 'lucide';

describe('icon-wifi-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWifiOff],
      html: `<icon-wifi-off></icon-wifi-off>`,
    });

    const svg = createElement(WifiOff);

    expect(page.root).toEqualHtml(`
      <icon-wifi-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wifi-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWifiOff],
      html: `<icon-wifi-off stroke="blue"></icon-wifi-off>`,
    });

    const svg = createElement(WifiOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wifi-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wifi-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWifiOff],
      html: `<icon-wifi-off stroke-width="2"></icon-wifi-off>`,
    });

    const svg = createElement(WifiOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wifi-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wifi-off>
    `);
  });
});
