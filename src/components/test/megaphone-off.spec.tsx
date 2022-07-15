import { newSpecPage } from '@stencil/core/testing';
import { IconMegaphoneOff } from '../megaphone-off';
import { createElement, MegaphoneOff }  from 'lucide';

describe('icon-megaphone-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMegaphoneOff],
      html: `<icon-megaphone-off></icon-megaphone-off>`,
    });

    const svg = createElement(MegaphoneOff);

    expect(page.root).toEqualHtml(`
      <icon-megaphone-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-megaphone-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMegaphoneOff],
      html: `<icon-megaphone-off stroke="blue"></icon-megaphone-off>`,
    });

    const svg = createElement(MegaphoneOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-megaphone-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-megaphone-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMegaphoneOff],
      html: `<icon-megaphone-off stroke-width="2"></icon-megaphone-off>`,
    });

    const svg = createElement(MegaphoneOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-megaphone-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-megaphone-off>
    `);
  });
});
