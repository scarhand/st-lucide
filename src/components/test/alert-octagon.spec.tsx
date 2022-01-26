import { newSpecPage } from '@stencil/core/testing';
import { IconAlertOctagon } from '../alert-octagon';
import { createElement, AlertOctagon }  from 'lucide';

describe('icon-alert-octagon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlertOctagon],
      html: `<icon-alert-octagon></icon-alert-octagon>`,
    });

    const svg = createElement(AlertOctagon);

    expect(page.root).toEqualHtml(`
      <icon-alert-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-alert-octagon>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlertOctagon],
      html: `<icon-alert-octagon stroke="blue"></icon-alert-octagon>`,
    });

    const svg = createElement(AlertOctagon);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-alert-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-alert-octagon>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlertOctagon],
      html: `<icon-alert-octagon stroke-width="2"></icon-alert-octagon>`,
    });

    const svg = createElement(AlertOctagon);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-alert-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-alert-octagon>
    `);
  });
});
