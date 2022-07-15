import { newSpecPage } from '@stencil/core/testing';
import { IconPartyPopper } from '../party-popper';
import { createElement, PartyPopper }  from 'lucide';

describe('icon-party-popper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPartyPopper],
      html: `<icon-party-popper></icon-party-popper>`,
    });

    const svg = createElement(PartyPopper);

    expect(page.root).toEqualHtml(`
      <icon-party-popper class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-party-popper>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPartyPopper],
      html: `<icon-party-popper stroke="blue"></icon-party-popper>`,
    });

    const svg = createElement(PartyPopper);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-party-popper class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-party-popper>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPartyPopper],
      html: `<icon-party-popper stroke-width="2"></icon-party-popper>`,
    });

    const svg = createElement(PartyPopper);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-party-popper class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-party-popper>
    `);
  });
});
