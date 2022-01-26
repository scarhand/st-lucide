import { newSpecPage } from '@stencil/core/testing';
import { IconShieldOff } from '../shield-off';
import { createElement, ShieldOff }  from 'lucide';

describe('icon-shield-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShieldOff],
      html: `<icon-shield-off></icon-shield-off>`,
    });

    const svg = createElement(ShieldOff);

    expect(page.root).toEqualHtml(`
      <icon-shield-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shield-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShieldOff],
      html: `<icon-shield-off stroke="blue"></icon-shield-off>`,
    });

    const svg = createElement(ShieldOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shield-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shield-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShieldOff],
      html: `<icon-shield-off stroke-width="2"></icon-shield-off>`,
    });

    const svg = createElement(ShieldOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shield-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shield-off>
    `);
  });
});
