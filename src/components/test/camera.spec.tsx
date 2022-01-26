import { newSpecPage } from '@stencil/core/testing';
import { IconCamera } from '../camera';
import { createElement, Camera }  from 'lucide';

describe('icon-camera', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCamera],
      html: `<icon-camera></icon-camera>`,
    });

    const svg = createElement(Camera);

    expect(page.root).toEqualHtml(`
      <icon-camera class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-camera>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCamera],
      html: `<icon-camera stroke="blue"></icon-camera>`,
    });

    const svg = createElement(Camera);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-camera class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-camera>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCamera],
      html: `<icon-camera stroke-width="2"></icon-camera>`,
    });

    const svg = createElement(Camera);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-camera class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-camera>
    `);
  });
});
