import { newSpecPage } from '@stencil/core/testing';
import { IconBug } from '../bug';
import { createElement, Bug }  from 'lucide';

describe('icon-bug', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBug],
      html: `<icon-bug></icon-bug>`,
    });

    const svg = createElement(Bug);

    expect(page.root).toEqualHtml(`
      <icon-bug class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bug>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBug],
      html: `<icon-bug stroke="blue"></icon-bug>`,
    });

    const svg = createElement(Bug);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bug class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bug>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBug],
      html: `<icon-bug stroke-width="2"></icon-bug>`,
    });

    const svg = createElement(Bug);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bug class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bug>
    `);
  });
});
