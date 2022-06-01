import { newSpecPage } from '@stencil/core/testing';
import { IconTrain } from '../train';
import { createElement, Train }  from 'lucide';

describe('icon-train', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTrain],
      html: `<icon-train></icon-train>`,
    });

    const svg = createElement(Train);

    expect(page.root).toEqualHtml(`
      <icon-train class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-train>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrain],
      html: `<icon-train stroke="blue"></icon-train>`,
    });

    const svg = createElement(Train);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-train class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-train>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrain],
      html: `<icon-train stroke-width="2"></icon-train>`,
    });

    const svg = createElement(Train);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-train class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-train>
    `);
  });
});
