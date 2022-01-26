import { newSpecPage } from '@stencil/core/testing';
import { IconWebcam } from '../webcam';
import { createElement, Webcam }  from 'lucide';

describe('icon-webcam', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWebcam],
      html: `<icon-webcam></icon-webcam>`,
    });

    const svg = createElement(Webcam);

    expect(page.root).toEqualHtml(`
      <icon-webcam class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-webcam>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWebcam],
      html: `<icon-webcam stroke="blue"></icon-webcam>`,
    });

    const svg = createElement(Webcam);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-webcam class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-webcam>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWebcam],
      html: `<icon-webcam stroke-width="2"></icon-webcam>`,
    });

    const svg = createElement(Webcam);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-webcam class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-webcam>
    `);
  });
});
