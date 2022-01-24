import { newSpecPage } from '@stencil/core/testing';
import { IconShieldCheck } from '../shield-check';
import { createElement, ShieldCheck }  from 'lucide';

describe('icon-shield-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShieldCheck],
      html: `<icon-shield-check></icon-shield-check>`,
    });

    const svg = createElement(ShieldCheck);

    expect(page.root).toEqualHtml(`
      <icon-shield-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shield-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShieldCheck],
      html: `<icon-shield-check stroke="blue"></icon-shield-check>`,
    });

    const svg = createElement(ShieldCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shield-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shield-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShieldCheck],
      html: `<icon-shield-check stroke-width="2"></icon-shield-check>`,
    });

    const svg = createElement(ShieldCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shield-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shield-check>
    `);
  });
});
