import { newSpecPage } from '@stencil/core/testing';
import { IconPhoneForwarded } from '../phone-forwarded';
import { createElement, PhoneForwarded }  from 'lucide';

describe('icon-phone-forwarded', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPhoneForwarded],
      html: `<icon-phone-forwarded></icon-phone-forwarded>`,
    });

    const svg = createElement(PhoneForwarded);

    expect(page.root).toEqualHtml(`
      <icon-phone-forwarded class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-phone-forwarded>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneForwarded],
      html: `<icon-phone-forwarded stroke="blue"></icon-phone-forwarded>`,
    });

    const svg = createElement(PhoneForwarded);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-phone-forwarded class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-phone-forwarded>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneForwarded],
      html: `<icon-phone-forwarded stroke-width="2"></icon-phone-forwarded>`,
    });

    const svg = createElement(PhoneForwarded);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-phone-forwarded class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-phone-forwarded>
    `);
  });
});
