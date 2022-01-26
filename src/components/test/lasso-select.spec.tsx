import { newSpecPage } from '@stencil/core/testing';
import { IconLassoSelect } from '../lasso-select';
import { createElement, LassoSelect }  from 'lucide';

describe('icon-lasso-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLassoSelect],
      html: `<icon-lasso-select></icon-lasso-select>`,
    });

    const svg = createElement(LassoSelect);

    expect(page.root).toEqualHtml(`
      <icon-lasso-select class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lasso-select>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLassoSelect],
      html: `<icon-lasso-select stroke="blue"></icon-lasso-select>`,
    });

    const svg = createElement(LassoSelect);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lasso-select class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lasso-select>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLassoSelect],
      html: `<icon-lasso-select stroke-width="2"></icon-lasso-select>`,
    });

    const svg = createElement(LassoSelect);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lasso-select class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lasso-select>
    `);
  });
});
