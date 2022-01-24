import { newSpecPage } from '@stencil/core/testing';
import { IconSwissFranc } from '../swiss-franc';
import { createElement, SwissFranc }  from 'lucide';

describe('icon-swiss-franc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSwissFranc],
      html: `<icon-swiss-franc></icon-swiss-franc>`,
    });

    const svg = createElement(SwissFranc);

    expect(page.root).toEqualHtml(`
      <icon-swiss-franc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-swiss-franc>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSwissFranc],
      html: `<icon-swiss-franc stroke="blue"></icon-swiss-franc>`,
    });

    const svg = createElement(SwissFranc);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-swiss-franc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-swiss-franc>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSwissFranc],
      html: `<icon-swiss-franc stroke-width="2"></icon-swiss-franc>`,
    });

    const svg = createElement(SwissFranc);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-swiss-franc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-swiss-franc>
    `);
  });
});
