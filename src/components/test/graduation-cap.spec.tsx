import { newSpecPage } from '@stencil/core/testing';
import { IconGraduationCap } from '../graduation-cap';
import { createElement, GraduationCap }  from 'lucide';

describe('icon-graduation-cap', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGraduationCap],
      html: `<icon-graduation-cap></icon-graduation-cap>`,
    });

    const svg = createElement(GraduationCap);

    expect(page.root).toEqualHtml(`
      <icon-graduation-cap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-graduation-cap>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGraduationCap],
      html: `<icon-graduation-cap stroke="blue"></icon-graduation-cap>`,
    });

    const svg = createElement(GraduationCap);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-graduation-cap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-graduation-cap>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGraduationCap],
      html: `<icon-graduation-cap stroke-width="2"></icon-graduation-cap>`,
    });

    const svg = createElement(GraduationCap);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-graduation-cap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-graduation-cap>
    `);
  });
});
