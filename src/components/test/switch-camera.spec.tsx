import { newSpecPage } from '@stencil/core/testing';
import { IconSwitchCamera } from '../switch-camera';
import { createElement, SwitchCamera }  from 'lucide';

describe('icon-switch-camera', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSwitchCamera],
      html: `<icon-switch-camera></icon-switch-camera>`,
    });

    const svg = createElement(SwitchCamera);

    expect(page.root).toEqualHtml(`
      <icon-switch-camera class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-switch-camera>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSwitchCamera],
      html: `<icon-switch-camera stroke="blue"></icon-switch-camera>`,
    });

    const svg = createElement(SwitchCamera);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-switch-camera class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-switch-camera>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSwitchCamera],
      html: `<icon-switch-camera stroke-width="2"></icon-switch-camera>`,
    });

    const svg = createElement(SwitchCamera);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-switch-camera class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-switch-camera>
    `);
  });
});
