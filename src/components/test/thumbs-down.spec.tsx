import { newSpecPage } from '@stencil/core/testing';
import { IconThumbsDown } from '../thumbs-down';
import { createElement, ThumbsDown }  from 'lucide';

describe('icon-thumbs-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconThumbsDown],
      html: `<icon-thumbs-down></icon-thumbs-down>`,
    });

    const svg = createElement(ThumbsDown);

    expect(page.root).toEqualHtml(`
      <icon-thumbs-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-thumbs-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThumbsDown],
      html: `<icon-thumbs-down stroke="blue"></icon-thumbs-down>`,
    });

    const svg = createElement(ThumbsDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-thumbs-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-thumbs-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThumbsDown],
      html: `<icon-thumbs-down stroke-width="2"></icon-thumbs-down>`,
    });

    const svg = createElement(ThumbsDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-thumbs-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-thumbs-down>
    `);
  });
});
