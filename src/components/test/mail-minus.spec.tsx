import { newSpecPage } from '@stencil/core/testing';
import { IconMailMinus } from '../mail-minus';
import { createElement, MailMinus }  from 'lucide';

describe('icon-mail-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMailMinus],
      html: `<icon-mail-minus></icon-mail-minus>`,
    });

    const svg = createElement(MailMinus);

    expect(page.root).toEqualHtml(`
      <icon-mail-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailMinus],
      html: `<icon-mail-minus stroke="blue"></icon-mail-minus>`,
    });

    const svg = createElement(MailMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailMinus],
      html: `<icon-mail-minus stroke-width="2"></icon-mail-minus>`,
    });

    const svg = createElement(MailMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail-minus>
    `);
  });
});
