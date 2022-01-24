import { newSpecPage } from '@stencil/core/testing';
import { IconPhoneOff } from '../phone-off';
import { createElement, PhoneOff }  from 'lucide';

describe('icon-phone-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPhoneOff],
      html: `<icon-phone-off></icon-phone-off>`,
    });

    const svg = createElement(PhoneOff);

    expect(page.root).toEqualHtml(`
      <icon-phone-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-phone-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneOff],
      html: `<icon-phone-off stroke="blue"></icon-phone-off>`,
    });

    const svg = createElement(PhoneOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-phone-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-phone-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneOff],
      html: `<icon-phone-off stroke-width="2"></icon-phone-off>`,
    });

    const svg = createElement(PhoneOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-phone-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-phone-off>
    `);
  });
});
