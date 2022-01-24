import { newSpecPage } from '@stencil/core/testing';
import { IconShieldAlert } from '../shield-alert';
import { createElement, ShieldAlert }  from 'lucide';

describe('icon-shield-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShieldAlert],
      html: `<icon-shield-alert></icon-shield-alert>`,
    });

    const svg = createElement(ShieldAlert);

    expect(page.root).toEqualHtml(`
      <icon-shield-alert class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shield-alert>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShieldAlert],
      html: `<icon-shield-alert stroke="blue"></icon-shield-alert>`,
    });

    const svg = createElement(ShieldAlert);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shield-alert class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shield-alert>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShieldAlert],
      html: `<icon-shield-alert stroke-width="2"></icon-shield-alert>`,
    });

    const svg = createElement(ShieldAlert);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shield-alert class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shield-alert>
    `);
  });
});
