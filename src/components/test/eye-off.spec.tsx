import { newSpecPage } from '@stencil/core/testing';
import { IconEyeOff } from '../eye-off';
import { createElement, EyeOff }  from 'lucide';

describe('icon-eye-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEyeOff],
      html: `<icon-eye-off></icon-eye-off>`,
    });

    const svg = createElement(EyeOff);

    expect(page.root).toEqualHtml(`
      <icon-eye-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-eye-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEyeOff],
      html: `<icon-eye-off stroke="blue"></icon-eye-off>`,
    });

    const svg = createElement(EyeOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-eye-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-eye-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEyeOff],
      html: `<icon-eye-off stroke-width="2"></icon-eye-off>`,
    });

    const svg = createElement(EyeOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-eye-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-eye-off>
    `);
  });
});
