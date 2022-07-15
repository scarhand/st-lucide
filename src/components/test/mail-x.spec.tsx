import { newSpecPage } from '@stencil/core/testing';
import { IconMailX } from '../mail-x';
import { createElement, MailX }  from 'lucide';

describe('icon-mail-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMailX],
      html: `<icon-mail-x></icon-mail-x>`,
    });

    const svg = createElement(MailX);

    expect(page.root).toEqualHtml(`
      <icon-mail-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailX],
      html: `<icon-mail-x stroke="blue"></icon-mail-x>`,
    });

    const svg = createElement(MailX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailX],
      html: `<icon-mail-x stroke-width="2"></icon-mail-x>`,
    });

    const svg = createElement(MailX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail-x>
    `);
  });
});
