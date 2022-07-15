import { newSpecPage } from '@stencil/core/testing';
import { IconFileSignature } from '../file-signature';
import { createElement, FileSignature }  from 'lucide';

describe('icon-file-signature', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileSignature],
      html: `<icon-file-signature></icon-file-signature>`,
    });

    const svg = createElement(FileSignature);

    expect(page.root).toEqualHtml(`
      <icon-file-signature class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-signature>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSignature],
      html: `<icon-file-signature stroke="blue"></icon-file-signature>`,
    });

    const svg = createElement(FileSignature);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-signature class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-signature>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSignature],
      html: `<icon-file-signature stroke-width="2"></icon-file-signature>`,
    });

    const svg = createElement(FileSignature);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-signature class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-signature>
    `);
  });
});
