import { newSpecPage } from '@stencil/core/testing';
import { IconMailCheck } from '../mail-check';
import { createElement, MailCheck }  from 'lucide';

describe('icon-mail-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMailCheck],
      html: `<icon-mail-check></icon-mail-check>`,
    });

    const svg = createElement(MailCheck);

    expect(page.root).toEqualHtml(`
      <icon-mail-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailCheck],
      html: `<icon-mail-check stroke="blue"></icon-mail-check>`,
    });

    const svg = createElement(MailCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailCheck],
      html: `<icon-mail-check stroke-width="2"></icon-mail-check>`,
    });

    const svg = createElement(MailCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail-check>
    `);
  });
});
