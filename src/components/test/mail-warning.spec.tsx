import { newSpecPage } from '@stencil/core/testing';
import { IconMailWarning } from '../mail-warning';
import { createElement, MailWarning }  from 'lucide';

describe('icon-mail-warning', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMailWarning],
      html: `<icon-mail-warning></icon-mail-warning>`,
    });

    const svg = createElement(MailWarning);

    expect(page.root).toEqualHtml(`
      <icon-mail-warning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail-warning>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailWarning],
      html: `<icon-mail-warning stroke="blue"></icon-mail-warning>`,
    });

    const svg = createElement(MailWarning);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail-warning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail-warning>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailWarning],
      html: `<icon-mail-warning stroke-width="2"></icon-mail-warning>`,
    });

    const svg = createElement(MailWarning);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail-warning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail-warning>
    `);
  });
});
