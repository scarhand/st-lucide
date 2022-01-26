import { newSpecPage } from '@stencil/core/testing';
import { IconLink2Off } from '../link-2-off';
import { createElement, Link2Off }  from 'lucide';

describe('icon-link-2-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLink2Off],
      html: `<icon-link-2-off></icon-link-2-off>`,
    });

    const svg = createElement(Link2Off);

    expect(page.root).toEqualHtml(`
      <icon-link-2-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-link-2-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLink2Off],
      html: `<icon-link-2-off stroke="blue"></icon-link-2-off>`,
    });

    const svg = createElement(Link2Off);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-link-2-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-link-2-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLink2Off],
      html: `<icon-link-2-off stroke-width="2"></icon-link-2-off>`,
    });

    const svg = createElement(Link2Off);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-link-2-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-link-2-off>
    `);
  });
});
