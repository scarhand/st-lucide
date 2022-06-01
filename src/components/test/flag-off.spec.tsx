import { newSpecPage } from '@stencil/core/testing';
import { IconFlagOff } from '../flag-off';
import { createElement, FlagOff }  from 'lucide';

describe('icon-flag-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlagOff],
      html: `<icon-flag-off></icon-flag-off>`,
    });

    const svg = createElement(FlagOff);

    expect(page.root).toEqualHtml(`
      <icon-flag-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flag-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlagOff],
      html: `<icon-flag-off stroke="blue"></icon-flag-off>`,
    });

    const svg = createElement(FlagOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flag-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flag-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlagOff],
      html: `<icon-flag-off stroke-width="2"></icon-flag-off>`,
    });

    const svg = createElement(FlagOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flag-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flag-off>
    `);
  });
});
