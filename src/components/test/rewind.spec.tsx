import { newSpecPage } from '@stencil/core/testing';
import { IconRewind } from '../rewind';
import { createElement, Rewind }  from 'lucide';

describe('icon-rewind', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRewind],
      html: `<icon-rewind></icon-rewind>`,
    });

    const svg = createElement(Rewind);

    expect(page.root).toEqualHtml(`
      <icon-rewind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-rewind>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRewind],
      html: `<icon-rewind stroke="blue"></icon-rewind>`,
    });

    const svg = createElement(Rewind);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-rewind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-rewind>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRewind],
      html: `<icon-rewind stroke-width="2"></icon-rewind>`,
    });

    const svg = createElement(Rewind);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-rewind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-rewind>
    `);
  });
});
