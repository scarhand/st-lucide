import { newSpecPage } from '@stencil/core/testing';
import { IconStretchVertical } from '../stretch-vertical';
import { createElement, StretchVertical }  from 'lucide';

describe('icon-stretch-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStretchVertical],
      html: `<icon-stretch-vertical></icon-stretch-vertical>`,
    });

    const svg = createElement(StretchVertical);

    expect(page.root).toEqualHtml(`
      <icon-stretch-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-stretch-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStretchVertical],
      html: `<icon-stretch-vertical stroke="blue"></icon-stretch-vertical>`,
    });

    const svg = createElement(StretchVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-stretch-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-stretch-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStretchVertical],
      html: `<icon-stretch-vertical stroke-width="2"></icon-stretch-vertical>`,
    });

    const svg = createElement(StretchVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-stretch-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-stretch-vertical>
    `);
  });
});
