import { newSpecPage } from '@stencil/core/testing';
import { IconTwitter } from '../twitter';
import { createElement, Twitter }  from 'lucide';

describe('icon-twitter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTwitter],
      html: `<icon-twitter></icon-twitter>`,
    });

    const svg = createElement(Twitter);

    expect(page.root).toEqualHtml(`
      <icon-twitter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-twitter>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTwitter],
      html: `<icon-twitter stroke="blue"></icon-twitter>`,
    });

    const svg = createElement(Twitter);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-twitter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-twitter>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTwitter],
      html: `<icon-twitter stroke-width="2"></icon-twitter>`,
    });

    const svg = createElement(Twitter);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-twitter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-twitter>
    `);
  });
});
