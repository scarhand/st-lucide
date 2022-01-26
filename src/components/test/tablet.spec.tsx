import { newSpecPage } from '@stencil/core/testing';
import { IconTablet } from '../tablet';
import { createElement, Tablet }  from 'lucide';

describe('icon-tablet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTablet],
      html: `<icon-tablet></icon-tablet>`,
    });

    const svg = createElement(Tablet);

    expect(page.root).toEqualHtml(`
      <icon-tablet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tablet>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTablet],
      html: `<icon-tablet stroke="blue"></icon-tablet>`,
    });

    const svg = createElement(Tablet);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tablet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tablet>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTablet],
      html: `<icon-tablet stroke-width="2"></icon-tablet>`,
    });

    const svg = createElement(Tablet);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tablet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tablet>
    `);
  });
});
