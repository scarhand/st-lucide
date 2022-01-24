import { newSpecPage } from '@stencil/core/testing';
import { IconShieldClose } from '../shield-close';
import { createElement, ShieldClose }  from 'lucide';

describe('icon-shield-close', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShieldClose],
      html: `<icon-shield-close></icon-shield-close>`,
    });

    const svg = createElement(ShieldClose);

    expect(page.root).toEqualHtml(`
      <icon-shield-close class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shield-close>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShieldClose],
      html: `<icon-shield-close stroke="blue"></icon-shield-close>`,
    });

    const svg = createElement(ShieldClose);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shield-close class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shield-close>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShieldClose],
      html: `<icon-shield-close stroke-width="2"></icon-shield-close>`,
    });

    const svg = createElement(ShieldClose);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shield-close class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shield-close>
    `);
  });
});
