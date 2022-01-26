import { newSpecPage } from '@stencil/core/testing';
import { IconTicket } from '../ticket';
import { createElement, Ticket }  from 'lucide';

describe('icon-ticket', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTicket],
      html: `<icon-ticket></icon-ticket>`,
    });

    const svg = createElement(Ticket);

    expect(page.root).toEqualHtml(`
      <icon-ticket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-ticket>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTicket],
      html: `<icon-ticket stroke="blue"></icon-ticket>`,
    });

    const svg = createElement(Ticket);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-ticket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-ticket>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTicket],
      html: `<icon-ticket stroke-width="2"></icon-ticket>`,
    });

    const svg = createElement(Ticket);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-ticket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-ticket>
    `);
  });
});
