import { newSpecPage } from '@stencil/core/testing';
import { IconUtensils } from '../utensils';
import { createElement, Utensils }  from 'lucide';

describe('icon-utensils', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUtensils],
      html: `<icon-utensils></icon-utensils>`,
    });

    const svg = createElement(Utensils);

    expect(page.root).toEqualHtml(`
      <icon-utensils class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-utensils>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUtensils],
      html: `<icon-utensils stroke="blue"></icon-utensils>`,
    });

    const svg = createElement(Utensils);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-utensils class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-utensils>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUtensils],
      html: `<icon-utensils stroke-width="2"></icon-utensils>`,
    });

    const svg = createElement(Utensils);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-utensils class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-utensils>
    `);
  });
});
