import { newSpecPage } from '@stencil/core/testing';
import { IconLasso } from '../lasso';
import { createElement, Lasso }  from 'lucide';

describe('icon-lasso', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLasso],
      html: `<icon-lasso></icon-lasso>`,
    });

    const svg = createElement(Lasso);

    expect(page.root).toEqualHtml(`
      <icon-lasso class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lasso>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLasso],
      html: `<icon-lasso stroke="blue"></icon-lasso>`,
    });

    const svg = createElement(Lasso);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lasso class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lasso>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLasso],
      html: `<icon-lasso stroke-width="2"></icon-lasso>`,
    });

    const svg = createElement(Lasso);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lasso class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lasso>
    `);
  });
});
