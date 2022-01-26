import { newSpecPage } from '@stencil/core/testing';
import { IconFlaskRound } from '../flask-round';
import { createElement, FlaskRound }  from 'lucide';

describe('icon-flask-round', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlaskRound],
      html: `<icon-flask-round></icon-flask-round>`,
    });

    const svg = createElement(FlaskRound);

    expect(page.root).toEqualHtml(`
      <icon-flask-round class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flask-round>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlaskRound],
      html: `<icon-flask-round stroke="blue"></icon-flask-round>`,
    });

    const svg = createElement(FlaskRound);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flask-round class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flask-round>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlaskRound],
      html: `<icon-flask-round stroke-width="2"></icon-flask-round>`,
    });

    const svg = createElement(FlaskRound);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flask-round class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flask-round>
    `);
  });
});
