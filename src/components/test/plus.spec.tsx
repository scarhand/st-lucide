import { newSpecPage } from '@stencil/core/testing';
import { IconPlus } from '../plus';
import { createElement, Plus }  from 'lucide';

describe('icon-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPlus],
      html: `<icon-plus></icon-plus>`,
    });

    const svg = createElement(Plus);

    expect(page.root).toEqualHtml(`
      <icon-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlus],
      html: `<icon-plus stroke="blue"></icon-plus>`,
    });

    const svg = createElement(Plus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlus],
      html: `<icon-plus stroke-width="2"></icon-plus>`,
    });

    const svg = createElement(Plus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-plus>
    `);
  });
});
