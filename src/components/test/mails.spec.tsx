import { newSpecPage } from '@stencil/core/testing';
import { IconMails } from '../mails';
import { createElement, Mails }  from 'lucide';

describe('icon-mails', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMails],
      html: `<icon-mails></icon-mails>`,
    });

    const svg = createElement(Mails);

    expect(page.root).toEqualHtml(`
      <icon-mails class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mails>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMails],
      html: `<icon-mails stroke="blue"></icon-mails>`,
    });

    const svg = createElement(Mails);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mails class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mails>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMails],
      html: `<icon-mails stroke-width="2"></icon-mails>`,
    });

    const svg = createElement(Mails);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mails class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mails>
    `);
  });
});
