import { newSpecPage } from '@stencil/core/testing';
import { IconPhoneOutgoing } from '../phone-outgoing';
import { createElement, PhoneOutgoing }  from 'lucide';

describe('icon-phone-outgoing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPhoneOutgoing],
      html: `<icon-phone-outgoing></icon-phone-outgoing>`,
    });

    const svg = createElement(PhoneOutgoing);

    expect(page.root).toEqualHtml(`
      <icon-phone-outgoing class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-phone-outgoing>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneOutgoing],
      html: `<icon-phone-outgoing stroke="blue"></icon-phone-outgoing>`,
    });

    const svg = createElement(PhoneOutgoing);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-phone-outgoing class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-phone-outgoing>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneOutgoing],
      html: `<icon-phone-outgoing stroke-width="2"></icon-phone-outgoing>`,
    });

    const svg = createElement(PhoneOutgoing);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-phone-outgoing class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-phone-outgoing>
    `);
  });
});
