import { newSpecPage } from '@stencil/core/testing';
import { IconThermometerSnowflake } from '../thermometer-snowflake';
import { createElement, ThermometerSnowflake }  from 'lucide';

describe('icon-thermometer-snowflake', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconThermometerSnowflake],
      html: `<icon-thermometer-snowflake></icon-thermometer-snowflake>`,
    });

    const svg = createElement(ThermometerSnowflake);

    expect(page.root).toEqualHtml(`
      <icon-thermometer-snowflake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-thermometer-snowflake>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThermometerSnowflake],
      html: `<icon-thermometer-snowflake stroke="blue"></icon-thermometer-snowflake>`,
    });

    const svg = createElement(ThermometerSnowflake);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-thermometer-snowflake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-thermometer-snowflake>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThermometerSnowflake],
      html: `<icon-thermometer-snowflake stroke-width="2"></icon-thermometer-snowflake>`,
    });

    const svg = createElement(ThermometerSnowflake);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-thermometer-snowflake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-thermometer-snowflake>
    `);
  });
});
