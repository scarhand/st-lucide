import { newSpecPage } from '@stencil/core/testing';
import { IconPhoneMissed } from '../phone-missed';
import { createElement, PhoneMissed }  from 'lucide';

describe('icon-phone-missed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPhoneMissed],
      html: `<icon-phone-missed></icon-phone-missed>`,
    });

    const svg = createElement(PhoneMissed);

    expect(page.root).toEqualHtml(`
      <icon-phone-missed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-phone-missed>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneMissed],
      html: `<icon-phone-missed stroke="blue"></icon-phone-missed>`,
    });

    const svg = createElement(PhoneMissed);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-phone-missed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-phone-missed>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhoneMissed],
      html: `<icon-phone-missed stroke-width="2"></icon-phone-missed>`,
    });

    const svg = createElement(PhoneMissed);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-phone-missed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-phone-missed>
    `);
  });
});
