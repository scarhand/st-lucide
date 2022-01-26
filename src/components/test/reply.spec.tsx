import { newSpecPage } from '@stencil/core/testing';
import { IconReply } from '../reply';
import { createElement, Reply }  from 'lucide';

describe('icon-reply', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconReply],
      html: `<icon-reply></icon-reply>`,
    });

    const svg = createElement(Reply);

    expect(page.root).toEqualHtml(`
      <icon-reply class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-reply>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconReply],
      html: `<icon-reply stroke="blue"></icon-reply>`,
    });

    const svg = createElement(Reply);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-reply class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-reply>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconReply],
      html: `<icon-reply stroke-width="2"></icon-reply>`,
    });

    const svg = createElement(Reply);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-reply class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-reply>
    `);
  });
});
