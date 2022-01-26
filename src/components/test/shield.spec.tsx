import { newSpecPage } from '@stencil/core/testing';
import { IconShield } from '../shield';
import { createElement, Shield }  from 'lucide';

describe('icon-shield', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShield],
      html: `<icon-shield></icon-shield>`,
    });

    const svg = createElement(Shield);

    expect(page.root).toEqualHtml(`
      <icon-shield class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shield>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShield],
      html: `<icon-shield stroke="blue"></icon-shield>`,
    });

    const svg = createElement(Shield);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shield class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shield>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShield],
      html: `<icon-shield stroke-width="2"></icon-shield>`,
    });

    const svg = createElement(Shield);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shield class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shield>
    `);
  });
});
