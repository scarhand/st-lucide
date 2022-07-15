import { newSpecPage } from '@stencil/core/testing';
import { IconApple } from '../apple';
import { createElement, Apple }  from 'lucide';

describe('icon-apple', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconApple],
      html: `<icon-apple></icon-apple>`,
    });

    const svg = createElement(Apple);

    expect(page.root).toEqualHtml(`
      <icon-apple class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-apple>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconApple],
      html: `<icon-apple stroke="blue"></icon-apple>`,
    });

    const svg = createElement(Apple);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-apple class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-apple>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconApple],
      html: `<icon-apple stroke-width="2"></icon-apple>`,
    });

    const svg = createElement(Apple);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-apple class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-apple>
    `);
  });
});
