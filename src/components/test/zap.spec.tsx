import { newSpecPage } from '@stencil/core/testing';
import { IconZap } from '../zap';
import { createElement, Zap }  from 'lucide';

describe('icon-zap', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconZap],
      html: `<icon-zap></icon-zap>`,
    });

    const svg = createElement(Zap);

    expect(page.root).toEqualHtml(`
      <icon-zap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-zap>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconZap],
      html: `<icon-zap stroke="blue"></icon-zap>`,
    });

    const svg = createElement(Zap);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-zap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-zap>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconZap],
      html: `<icon-zap stroke-width="2"></icon-zap>`,
    });

    const svg = createElement(Zap);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-zap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-zap>
    `);
  });
});
