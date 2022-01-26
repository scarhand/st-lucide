import { newSpecPage } from '@stencil/core/testing';
import { IconInbox } from '../inbox';
import { createElement, Inbox }  from 'lucide';

describe('icon-inbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconInbox],
      html: `<icon-inbox></icon-inbox>`,
    });

    const svg = createElement(Inbox);

    expect(page.root).toEqualHtml(`
      <icon-inbox class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-inbox>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInbox],
      html: `<icon-inbox stroke="blue"></icon-inbox>`,
    });

    const svg = createElement(Inbox);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-inbox class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-inbox>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInbox],
      html: `<icon-inbox stroke-width="2"></icon-inbox>`,
    });

    const svg = createElement(Inbox);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-inbox class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-inbox>
    `);
  });
});
