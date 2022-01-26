import { newSpecPage } from '@stencil/core/testing';
import { IconMail } from '../mail';
import { createElement, Mail }  from 'lucide';

describe('icon-mail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMail],
      html: `<icon-mail></icon-mail>`,
    });

    const svg = createElement(Mail);

    expect(page.root).toEqualHtml(`
      <icon-mail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mail>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMail],
      html: `<icon-mail stroke="blue"></icon-mail>`,
    });

    const svg = createElement(Mail);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mail>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMail],
      html: `<icon-mail stroke-width="2"></icon-mail>`,
    });

    const svg = createElement(Mail);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mail>
    `);
  });
});
