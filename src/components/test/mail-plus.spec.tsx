import { newSpecPage } from '@stencil/core/testing';
import { IconMailPlus } from '../mail-plus';
import { createElement, MailPlus }  from 'lucide';

describe('icon-mail-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMailPlus],
      html: `<icon-mail-plus></icon-mail-plus>`,
    });

    const svg = createElement(MailPlus);

    expect(page.root).toEqualHtml(`
      <icon-mail-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailPlus],
      html: `<icon-mail-plus stroke="blue"></icon-mail-plus>`,
    });

    const svg = createElement(MailPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailPlus],
      html: `<icon-mail-plus stroke-width="2"></icon-mail-plus>`,
    });

    const svg = createElement(MailPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail-plus>
    `);
  });
});
