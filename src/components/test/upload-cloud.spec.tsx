import { newSpecPage } from '@stencil/core/testing';
import { IconUploadCloud } from '../upload-cloud';
import { createElement, UploadCloud }  from 'lucide';

describe('icon-upload-cloud', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUploadCloud],
      html: `<icon-upload-cloud></icon-upload-cloud>`,
    });

    const svg = createElement(UploadCloud);

    expect(page.root).toEqualHtml(`
      <icon-upload-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-upload-cloud>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUploadCloud],
      html: `<icon-upload-cloud stroke="blue"></icon-upload-cloud>`,
    });

    const svg = createElement(UploadCloud);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-upload-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-upload-cloud>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUploadCloud],
      html: `<icon-upload-cloud stroke-width="2"></icon-upload-cloud>`,
    });

    const svg = createElement(UploadCloud);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-upload-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-upload-cloud>
    `);
  });
});
