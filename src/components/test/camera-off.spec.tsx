import { newSpecPage } from '@stencil/core/testing';
import { IconCameraOff } from '../camera-off';
import { createElement, CameraOff }  from 'lucide';

describe('icon-camera-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCameraOff],
      html: `<icon-camera-off></icon-camera-off>`,
    });

    const svg = createElement(CameraOff);

    expect(page.root).toEqualHtml(`
      <icon-camera-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-camera-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCameraOff],
      html: `<icon-camera-off stroke="blue"></icon-camera-off>`,
    });

    const svg = createElement(CameraOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-camera-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-camera-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCameraOff],
      html: `<icon-camera-off stroke-width="2"></icon-camera-off>`,
    });

    const svg = createElement(CameraOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-camera-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-camera-off>
    `);
  });
});
