import { newSpecPage } from '@stencil/core/testing';
import { IconSnowflake } from '../snowflake';
import { createElement, Snowflake }  from 'lucide';

describe('icon-snowflake', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSnowflake],
      html: `<icon-snowflake></icon-snowflake>`,
    });

    const svg = createElement(Snowflake);

    expect(page.root).toEqualHtml(`
      <icon-snowflake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-snowflake>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSnowflake],
      html: `<icon-snowflake stroke="blue"></icon-snowflake>`,
    });

    const svg = createElement(Snowflake);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-snowflake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-snowflake>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSnowflake],
      html: `<icon-snowflake stroke-width="2"></icon-snowflake>`,
    });

    const svg = createElement(Snowflake);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-snowflake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-snowflake>
    `);
  });
});
