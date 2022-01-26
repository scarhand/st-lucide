import { newSpecPage } from '@stencil/core/testing';
import { IconZapOff } from '../zap-off';
import { createElement, ZapOff }  from 'lucide';

describe('icon-zap-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconZapOff],
      html: `<icon-zap-off></icon-zap-off>`,
    });

    const svg = createElement(ZapOff);

    expect(page.root).toEqualHtml(`
      <icon-zap-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-zap-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconZapOff],
      html: `<icon-zap-off stroke="blue"></icon-zap-off>`,
    });

    const svg = createElement(ZapOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-zap-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-zap-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconZapOff],
      html: `<icon-zap-off stroke-width="2"></icon-zap-off>`,
    });

    const svg = createElement(ZapOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-zap-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-zap-off>
    `);
  });
});
