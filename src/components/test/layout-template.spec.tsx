import { newSpecPage } from '@stencil/core/testing';
import { IconLayoutTemplate } from '../layout-template';
import { createElement, LayoutTemplate }  from 'lucide';

describe('icon-layout-template', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLayoutTemplate],
      html: `<icon-layout-template></icon-layout-template>`,
    });

    const svg = createElement(LayoutTemplate);

    expect(page.root).toEqualHtml(`
      <icon-layout-template class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-layout-template>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayoutTemplate],
      html: `<icon-layout-template stroke="blue"></icon-layout-template>`,
    });

    const svg = createElement(LayoutTemplate);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-layout-template class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-layout-template>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayoutTemplate],
      html: `<icon-layout-template stroke-width="2"></icon-layout-template>`,
    });

    const svg = createElement(LayoutTemplate);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-layout-template class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-layout-template>
    `);
  });
});
