import { newSpecPage } from '@stencil/core/testing';
import { IconMoreVertical } from '../more-vertical';
import { createElement, MoreVertical }  from 'lucide';

describe('icon-more-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMoreVertical],
      html: `<icon-more-vertical></icon-more-vertical>`,
    });

    const svg = createElement(MoreVertical);

    expect(page.root).toEqualHtml(`
      <icon-more-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-more-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoreVertical],
      html: `<icon-more-vertical stroke="blue"></icon-more-vertical>`,
    });

    const svg = createElement(MoreVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-more-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-more-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoreVertical],
      html: `<icon-more-vertical stroke-width="2"></icon-more-vertical>`,
    });

    const svg = createElement(MoreVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-more-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-more-vertical>
    `);
  });
});
