import { newSpecPage } from '@stencil/core/testing';
import { IconContact } from '../contact';
import { createElement, Contact }  from 'lucide';

describe('icon-contact', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconContact],
      html: `<icon-contact></icon-contact>`,
    });

    const svg = createElement(Contact);

    expect(page.root).toEqualHtml(`
      <icon-contact class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-contact>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconContact],
      html: `<icon-contact stroke="blue"></icon-contact>`,
    });

    const svg = createElement(Contact);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-contact class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-contact>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconContact],
      html: `<icon-contact stroke-width="2"></icon-contact>`,
    });

    const svg = createElement(Contact);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-contact class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-contact>
    `);
  });
});
