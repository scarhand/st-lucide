import { newSpecPage } from '@stencil/core/testing';
import { IconBoxSelect } from '../box-select';
import { createElement, BoxSelect }  from 'lucide';

describe('icon-box-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBoxSelect],
      html: `<icon-box-select></icon-box-select>`,
    });

    const svg = createElement(BoxSelect);

    expect(page.root).toEqualHtml(`
      <icon-box-select class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-box-select>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBoxSelect],
      html: `<icon-box-select stroke="blue"></icon-box-select>`,
    });

    const svg = createElement(BoxSelect);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-box-select class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-box-select>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBoxSelect],
      html: `<icon-box-select stroke-width="2"></icon-box-select>`,
    });

    const svg = createElement(BoxSelect);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-box-select class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-box-select>
    `);
  });
});
