import { newSpecPage } from '@stencil/core/testing';
import { IconSyringe } from '../syringe';
import { createElement, Syringe }  from 'lucide';

describe('icon-syringe', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSyringe],
      html: `<icon-syringe></icon-syringe>`,
    });

    const svg = createElement(Syringe);

    expect(page.root).toEqualHtml(`
      <icon-syringe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-syringe>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSyringe],
      html: `<icon-syringe stroke="blue"></icon-syringe>`,
    });

    const svg = createElement(Syringe);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-syringe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-syringe>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSyringe],
      html: `<icon-syringe stroke-width="2"></icon-syringe>`,
    });

    const svg = createElement(Syringe);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-syringe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-syringe>
    `);
  });
});
