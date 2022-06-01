import { newSpecPage } from '@stencil/core/testing';
import { IconVenetianMask } from '../venetian-mask';
import { createElement, VenetianMask }  from 'lucide';

describe('icon-venetian-mask', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVenetianMask],
      html: `<icon-venetian-mask></icon-venetian-mask>`,
    });

    const svg = createElement(VenetianMask);

    expect(page.root).toEqualHtml(`
      <icon-venetian-mask class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-venetian-mask>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVenetianMask],
      html: `<icon-venetian-mask stroke="blue"></icon-venetian-mask>`,
    });

    const svg = createElement(VenetianMask);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-venetian-mask class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-venetian-mask>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVenetianMask],
      html: `<icon-venetian-mask stroke-width="2"></icon-venetian-mask>`,
    });

    const svg = createElement(VenetianMask);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-venetian-mask class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-venetian-mask>
    `);
  });
});
