import { newSpecPage } from '@stencil/core/testing';
import { IconEqual } from '../equal';
import { createElement, Equal }  from 'lucide';

describe('icon-equal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEqual],
      html: `<icon-equal></icon-equal>`,
    });

    const svg = createElement(Equal);

    expect(page.root).toEqualHtml(`
      <icon-equal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-equal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEqual],
      html: `<icon-equal stroke="blue"></icon-equal>`,
    });

    const svg = createElement(Equal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-equal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-equal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEqual],
      html: `<icon-equal stroke-width="2"></icon-equal>`,
    });

    const svg = createElement(Equal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-equal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-equal>
    `);
  });
});
