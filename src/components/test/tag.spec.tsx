import { newSpecPage } from '@stencil/core/testing';
import { IconTag } from '../tag';
import { createElement, Tag }  from 'lucide';

describe('icon-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTag],
      html: `<icon-tag></icon-tag>`,
    });

    const svg = createElement(Tag);

    expect(page.root).toEqualHtml(`
      <icon-tag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tag>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTag],
      html: `<icon-tag stroke="blue"></icon-tag>`,
    });

    const svg = createElement(Tag);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tag>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTag],
      html: `<icon-tag stroke-width="2"></icon-tag>`,
    });

    const svg = createElement(Tag);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tag>
    `);
  });
});
