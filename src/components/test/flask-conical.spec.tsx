import { newSpecPage } from '@stencil/core/testing';
import { IconFlaskConical } from '../flask-conical';
import { createElement, FlaskConical }  from 'lucide';

describe('icon-flask-conical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlaskConical],
      html: `<icon-flask-conical></icon-flask-conical>`,
    });

    const svg = createElement(FlaskConical);

    expect(page.root).toEqualHtml(`
      <icon-flask-conical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flask-conical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlaskConical],
      html: `<icon-flask-conical stroke="blue"></icon-flask-conical>`,
    });

    const svg = createElement(FlaskConical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flask-conical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flask-conical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlaskConical],
      html: `<icon-flask-conical stroke-width="2"></icon-flask-conical>`,
    });

    const svg = createElement(FlaskConical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flask-conical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flask-conical>
    `);
  });
});
