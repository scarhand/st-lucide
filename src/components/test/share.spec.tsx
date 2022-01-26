import { newSpecPage } from '@stencil/core/testing';
import { IconShare } from '../share';
import { createElement, Share }  from 'lucide';

describe('icon-share', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShare],
      html: `<icon-share></icon-share>`,
    });

    const svg = createElement(Share);

    expect(page.root).toEqualHtml(`
      <icon-share class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-share>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShare],
      html: `<icon-share stroke="blue"></icon-share>`,
    });

    const svg = createElement(Share);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-share class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-share>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShare],
      html: `<icon-share stroke-width="2"></icon-share>`,
    });

    const svg = createElement(Share);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-share class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-share>
    `);
  });
});
