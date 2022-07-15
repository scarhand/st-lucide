import { newSpecPage } from '@stencil/core/testing';
import { IconLampCeiling } from '../lamp-ceiling';
import { createElement, LampCeiling }  from 'lucide';

describe('icon-lamp-ceiling', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLampCeiling],
      html: `<icon-lamp-ceiling></icon-lamp-ceiling>`,
    });

    const svg = createElement(LampCeiling);

    expect(page.root).toEqualHtml(`
      <icon-lamp-ceiling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lamp-ceiling>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampCeiling],
      html: `<icon-lamp-ceiling stroke="blue"></icon-lamp-ceiling>`,
    });

    const svg = createElement(LampCeiling);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lamp-ceiling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lamp-ceiling>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampCeiling],
      html: `<icon-lamp-ceiling stroke-width="2"></icon-lamp-ceiling>`,
    });

    const svg = createElement(LampCeiling);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lamp-ceiling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lamp-ceiling>
    `);
  });
});
