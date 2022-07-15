import { newSpecPage } from '@stencil/core/testing';
import { IconMailQuestion } from '../mail-question';
import { createElement, MailQuestion }  from 'lucide';

describe('icon-mail-question', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMailQuestion],
      html: `<icon-mail-question></icon-mail-question>`,
    });

    const svg = createElement(MailQuestion);

    expect(page.root).toEqualHtml(`
      <icon-mail-question class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail-question>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailQuestion],
      html: `<icon-mail-question stroke="blue"></icon-mail-question>`,
    });

    const svg = createElement(MailQuestion);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail-question class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail-question>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMailQuestion],
      html: `<icon-mail-question stroke-width="2"></icon-mail-question>`,
    });

    const svg = createElement(MailQuestion);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail-question class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail-question>
    `);
  });
});
