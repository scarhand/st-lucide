import { newSpecPage } from '@stencil/core/testing';
import { IconMountainSnow } from '../mountain-snow';
import { createElement, MountainSnow }  from 'lucide';

describe('icon-mountain-snow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMountainSnow],
      html: `<icon-mountain-snow></icon-mountain-snow>`,
    });

    const svg = createElement(MountainSnow);

    expect(page.root).toEqualHtml(`
      <icon-mountain-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mountain-snow>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMountainSnow],
      html: `<icon-mountain-snow stroke="blue"></icon-mountain-snow>`,
    });

    const svg = createElement(MountainSnow);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mountain-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mountain-snow>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMountainSnow],
      html: `<icon-mountain-snow stroke-width="2"></icon-mountain-snow>`,
    });

    const svg = createElement(MountainSnow);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mountain-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mountain-snow>
    `);
  });
});
