import { newSpecPage } from '@stencil/core/testing';
import { IconPhoneCall } from '../phone-call';
import { createElement, PhoneCall }  from 'lucide';

describe('icon-phone-call', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPhoneCall],
      html: `<icon-phone-call></icon-phone-call>`,
    });

    const svg = createElement(PhoneCall);

    expect(page.root).toEqualHtml(`
      <icon-phone-call class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-phone-call>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneCall],
      html: `<icon-phone-call stroke="blue"></icon-phone-call>`,
    });

    const svg = createElement(PhoneCall);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-phone-call class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-phone-call>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneCall],
      html: `<icon-phone-call stroke-width="2"></icon-phone-call>`,
    });

    const svg = createElement(PhoneCall);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-phone-call class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-phone-call>
    `);
  });
});
