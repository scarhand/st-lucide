import { newSpecPage } from '@stencil/core/testing';
import { IconPersonStanding } from '../person-standing';
import { createElement, PersonStanding }  from 'lucide';

describe('icon-person-standing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPersonStanding],
      html: `<icon-person-standing></icon-person-standing>`,
    });

    const svg = createElement(PersonStanding);

    expect(page.root).toEqualHtml(`
      <icon-person-standing class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-person-standing>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPersonStanding],
      html: `<icon-person-standing stroke="blue"></icon-person-standing>`,
    });

    const svg = createElement(PersonStanding);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-person-standing class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-person-standing>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPersonStanding],
      html: `<icon-person-standing stroke-width="2"></icon-person-standing>`,
    });

    const svg = createElement(PersonStanding);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-person-standing class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-person-standing>
    `);
  });
});
