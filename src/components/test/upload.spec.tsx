import { newSpecPage } from '@stencil/core/testing';
import { IconUpload } from '../upload';
import { createElement, Upload }  from 'lucide';

describe('icon-upload', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUpload],
      html: `<icon-upload></icon-upload>`,
    });

    const svg = createElement(Upload);

    expect(page.root).toEqualHtml(`
      <icon-upload class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-upload>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUpload],
      html: `<icon-upload stroke="blue"></icon-upload>`,
    });

    const svg = createElement(Upload);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-upload class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-upload>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUpload],
      html: `<icon-upload stroke-width="2"></icon-upload>`,
    });

    const svg = createElement(Upload);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-upload class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-upload>
    `);
  });
});
