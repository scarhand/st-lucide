import { newSpecPage } from '@stencil/core/testing';
import { IconAnnoyed } from '../annoyed';
import { createElement, Annoyed }  from 'lucide';

describe('icon-annoyed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAnnoyed],
      html: `<icon-annoyed></icon-annoyed>`,
    });

    const svg = createElement(Annoyed);

    expect(page.root).toEqualHtml(`
      <icon-annoyed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-annoyed>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAnnoyed],
      html: `<icon-annoyed stroke="blue"></icon-annoyed>`,
    });

    const svg = createElement(Annoyed);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-annoyed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-annoyed>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAnnoyed],
      html: `<icon-annoyed stroke-width="2"></icon-annoyed>`,
    });

    const svg = createElement(Annoyed);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-annoyed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-annoyed>
    `);
  });
});
