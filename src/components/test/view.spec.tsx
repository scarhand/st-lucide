import { newSpecPage } from '@stencil/core/testing';
import { IconView } from '../view';
import { createElement, View }  from 'lucide';

describe('icon-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconView],
      html: `<icon-view></icon-view>`,
    });

    const svg = createElement(View);

    expect(page.root).toEqualHtml(`
      <icon-view class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-view>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconView],
      html: `<icon-view stroke="blue"></icon-view>`,
    });

    const svg = createElement(View);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-view class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-view>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconView],
      html: `<icon-view stroke-width="2"></icon-view>`,
    });

    const svg = createElement(View);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-view class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-view>
    `);
  });
});
