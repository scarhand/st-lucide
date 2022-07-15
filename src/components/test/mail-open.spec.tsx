import { newSpecPage } from '@stencil/core/testing';
import { IconMailOpen } from '../mail-open';
import { createElement, MailOpen }  from 'lucide';

describe('icon-mail-open', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMailOpen],
      html: `<icon-mail-open></icon-mail-open>`,
    });

    const svg = createElement(MailOpen);

    expect(page.root).toEqualHtml(`
      <icon-mail-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail-open>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailOpen],
      html: `<icon-mail-open stroke="blue"></icon-mail-open>`,
    });

    const svg = createElement(MailOpen);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail-open>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailOpen],
      html: `<icon-mail-open stroke-width="2"></icon-mail-open>`,
    });

    const svg = createElement(MailOpen);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail-open>
    `);
  });
});
