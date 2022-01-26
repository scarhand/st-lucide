import { newSpecPage } from '@stencil/core/testing';
import { IconClock6 } from '../clock-6';
import { createElement, Clock6 }  from 'lucide';

describe('icon-clock-6', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock6],
      html: `<icon-clock-6></icon-clock-6>`,
    });

    const svg = createElement(Clock6);

    expect(page.root).toEqualHtml(`
      <icon-clock-6 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-6>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock6],
      html: `<icon-clock-6 stroke="blue"></icon-clock-6>`,
    });

    const svg = createElement(Clock6);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-6 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-6>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock6],
      html: `<icon-clock-6 stroke-width="2"></icon-clock-6>`,
    });

    const svg = createElement(Clock6);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-6 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-6>
    `);
  });
});
