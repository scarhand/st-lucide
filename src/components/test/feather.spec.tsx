import { newSpecPage } from '@stencil/core/testing';
import { IconFeather } from '../feather';
import { createElement, Feather }  from 'lucide';

describe('icon-feather', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFeather],
      html: `<icon-feather></icon-feather>`,
    });

    const svg = createElement(Feather);

    expect(page.root).toEqualHtml(`
      <icon-feather class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-feather>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFeather],
      html: `<icon-feather stroke="blue"></icon-feather>`,
    });

    const svg = createElement(Feather);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-feather class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-feather>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFeather],
      html: `<icon-feather stroke-width="2"></icon-feather>`,
    });

    const svg = createElement(Feather);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-feather class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-feather>
    `);
  });
});
