import { newSpecPage } from '@stencil/core/testing';
import { IconChrome } from '../chrome';
import { createElement, Chrome }  from 'lucide';

describe('icon-chrome', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChrome],
      html: `<icon-chrome></icon-chrome>`,
    });

    const svg = createElement(Chrome);

    expect(page.root).toEqualHtml(`
      <icon-chrome class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chrome>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChrome],
      html: `<icon-chrome stroke="blue"></icon-chrome>`,
    });

    const svg = createElement(Chrome);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chrome class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chrome>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChrome],
      html: `<icon-chrome stroke-width="2"></icon-chrome>`,
    });

    const svg = createElement(Chrome);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chrome class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chrome>
    `);
  });
});
