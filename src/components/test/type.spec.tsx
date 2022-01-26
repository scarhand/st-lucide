import { newSpecPage } from '@stencil/core/testing';
import { IconType } from '../type';
import { createElement, Type }  from 'lucide';

describe('icon-type', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconType],
      html: `<icon-type></icon-type>`,
    });

    const svg = createElement(Type);

    expect(page.root).toEqualHtml(`
      <icon-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-type>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconType],
      html: `<icon-type stroke="blue"></icon-type>`,
    });

    const svg = createElement(Type);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-type>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconType],
      html: `<icon-type stroke-width="2"></icon-type>`,
    });

    const svg = createElement(Type);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-type>
    `);
  });
});
