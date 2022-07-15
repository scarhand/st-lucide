import { newSpecPage } from '@stencil/core/testing';
import { IconMailSearch } from '../mail-search';
import { createElement, MailSearch }  from 'lucide';

describe('icon-mail-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMailSearch],
      html: `<icon-mail-search></icon-mail-search>`,
    });

    const svg = createElement(MailSearch);

    expect(page.root).toEqualHtml(`
      <icon-mail-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail-search>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailSearch],
      html: `<icon-mail-search stroke="blue"></icon-mail-search>`,
    });

    const svg = createElement(MailSearch);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail-search>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailSearch],
      html: `<icon-mail-search stroke-width="2"></icon-mail-search>`,
    });

    const svg = createElement(MailSearch);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail-search>
    `);
  });
});
