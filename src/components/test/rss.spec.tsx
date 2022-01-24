import { newSpecPage } from '@stencil/core/testing';
import { IconRss } from '../rss';
import { createElement, Rss }  from 'lucide';

describe('icon-rss', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRss],
      html: `<icon-rss></icon-rss>`,
    });

    const svg = createElement(Rss);

    expect(page.root).toEqualHtml(`
      <icon-rss class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-rss>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRss],
      html: `<icon-rss stroke="blue"></icon-rss>`,
    });

    const svg = createElement(Rss);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-rss class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-rss>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRss],
      html: `<icon-rss stroke-width="2"></icon-rss>`,
    });

    const svg = createElement(Rss);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-rss class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-rss>
    `);
  });
});
