import { newSpecPage } from '@stencil/core/testing';
import { IconClock } from '../clock';
import { createElement, Clock }  from 'lucide';

describe('icon-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock],
      html: `<icon-clock></icon-clock>`,
    });

    const svg = createElement(Clock);

    expect(page.root).toEqualHtml(`
      <icon-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock],
      html: `<icon-clock stroke="blue"></icon-clock>`,
    });

    const svg = createElement(Clock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock],
      html: `<icon-clock stroke-width="2"></icon-clock>`,
    });

    const svg = createElement(Clock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock>
    `);
  });
});
