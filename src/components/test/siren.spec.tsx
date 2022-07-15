import { newSpecPage } from '@stencil/core/testing';
import { IconSiren } from '../siren';
import { createElement, Siren }  from 'lucide';

describe('icon-siren', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSiren],
      html: `<icon-siren></icon-siren>`,
    });

    const svg = createElement(Siren);

    expect(page.root).toEqualHtml(`
      <icon-siren class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-siren>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSiren],
      html: `<icon-siren stroke="blue"></icon-siren>`,
    });

    const svg = createElement(Siren);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-siren class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-siren>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSiren],
      html: `<icon-siren stroke-width="2"></icon-siren>`,
    });

    const svg = createElement(Siren);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-siren class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-siren>
    `);
  });
});
