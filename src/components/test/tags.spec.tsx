import { newSpecPage } from '@stencil/core/testing';
import { IconTags } from '../tags';
import { createElement, Tags }  from 'lucide';

describe('icon-tags', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTags],
      html: `<icon-tags></icon-tags>`,
    });

    const svg = createElement(Tags);

    expect(page.root).toEqualHtml(`
      <icon-tags class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tags>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTags],
      html: `<icon-tags stroke="blue"></icon-tags>`,
    });

    const svg = createElement(Tags);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tags class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tags>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTags],
      html: `<icon-tags stroke-width="2"></icon-tags>`,
    });

    const svg = createElement(Tags);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tags class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tags>
    `);
  });
});
