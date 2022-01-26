import { newSpecPage } from '@stencil/core/testing';
import { IconPhoneIncoming } from '../phone-incoming';
import { createElement, PhoneIncoming }  from 'lucide';

describe('icon-phone-incoming', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPhoneIncoming],
      html: `<icon-phone-incoming></icon-phone-incoming>`,
    });

    const svg = createElement(PhoneIncoming);

    expect(page.root).toEqualHtml(`
      <icon-phone-incoming class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-phone-incoming>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneIncoming],
      html: `<icon-phone-incoming stroke="blue"></icon-phone-incoming>`,
    });

    const svg = createElement(PhoneIncoming);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-phone-incoming class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-phone-incoming>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneIncoming],
      html: `<icon-phone-incoming stroke-width="2"></icon-phone-incoming>`,
    });

    const svg = createElement(PhoneIncoming);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-phone-incoming class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-phone-incoming>
    `);
  });
});
