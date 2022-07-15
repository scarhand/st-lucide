#!/usr/bin/env ruby

def capitalize(str)
  str.split('-').map(&:capitalize).join
end

def generate_e2e(icon)
  content = <<-BODY.chomp
import { newE2EPage } from '@stencil/core/testing';

describe('icon-#{icon}', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon}></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon} stroke="blue"></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-#{icon} > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon} stroke-width="2"></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-#{icon} > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});

BODY
end

def generate_spec(icon)
  content = <<-BODY.chomp
import { newSpecPage } from '@stencil/core/testing';
import { Icon#{capitalize(icon)} } from '../#{icon}';
import { createElement, #{capitalize(icon)} }  from 'lucide';

describe('icon-#{icon}', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Icon#{capitalize(icon)}],
      html: `<icon-#{icon}></icon-#{icon}>`,
    });

    const svg = createElement(#{capitalize(icon)});

    expect(page.root).toEqualHtml(`
      <icon-#{icon} class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-#{icon}>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [Icon#{capitalize(icon)}],
      html: `<icon-#{icon} stroke="blue"></icon-#{icon}>`,
    });

    const svg = createElement(#{capitalize(icon)});
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-#{icon} class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-#{icon}>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [Icon#{capitalize(icon)}],
      html: `<icon-#{icon} stroke-width="2"></icon-#{icon}>`,
    });

    const svg = createElement(#{capitalize(icon)});
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-#{icon} class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-#{icon}>
    `);
  });
});

BODY
end

icons = %W(accessibility activity air-vent airplay alarm-check alarm-clock-off alarm-clock alarm-minus alarm-plus album alert-circle alert-octagon alert-triangle align-center-horizontal align-center-vertical align-center align-end-horizontal align-end-vertical align-horizontal-distribute-center align-horizontal-distribute-end align-horizontal-distribute-start align-horizontal-justify-center align-horizontal-justify-end align-horizontal-justify-start align-horizontal-space-around align-horizontal-space-between align-justify align-left align-right align-start-horizontal align-start-vertical align-vertical-distribute-center align-vertical-distribute-end align-vertical-distribute-start align-vertical-justify-center align-vertical-justify-end align-vertical-justify-start align-vertical-space-around align-vertical-space-between anchor angry annoyed aperture apple archive-restore archive armchair arrow-big-down arrow-big-left arrow-big-right arrow-big-up arrow-down-circle arrow-down-left arrow-down-right arrow-down arrow-left-circle arrow-left-right arrow-left arrow-right-circle arrow-right arrow-up-circle arrow-up-left arrow-up-right arrow-up asterisk at-sign award axe axis-3d baby backpack baggage-claim banana banknote bar-chart-2 bar-chart-3 bar-chart-4 bar-chart-horizontal bar-chart baseline bath battery-charging battery-full battery-low battery-medium battery beaker bed-double bed-single bed beer bell-minus bell-off bell-plus bell-ring bell bike binary bitcoin bluetooth-connected bluetooth-off bluetooth-searching bluetooth bold bomb book-open book bookmark-minus bookmark-plus bookmark bot box-select box boxes briefcase brush bug building-2 building bus cake calculator calendar-check-2 calendar-check calendar-clock calendar-days calendar-heart calendar-minus calendar-off calendar-plus calendar-range calendar-search calendar-x-2 calendar-x calendar camera-off camera car carrot cast check-circle-2 check-circle check-square check chef-hat cherry chevron-down chevron-first chevron-last chevron-left chevron-right chevron-up chevrons-down-up chevrons-down chevrons-left-right chevrons-left chevrons-right-left chevrons-right chevrons-up-down chevrons-up chrome cigarette-off cigarette circle-dot circle-ellipsis circle-slashed circle clapperboard clipboard-check clipboard-copy clipboard-edit clipboard-list clipboard-signature clipboard-type clipboard-x clipboard clock-1 clock-10 clock-11 clock-12 clock-2 clock-3 clock-4 clock-5 clock-6 clock-7 clock-8 clock-9 clock cloud-cog cloud-drizzle cloud-fog cloud-hail cloud-lightning cloud-moon-rain cloud-moon cloud-off cloud-rain-wind cloud-rain cloud-snow cloud-sun-rain cloud-sun cloud cloudy clover code-2 code codepen codesandbox coffee cog coins columns command compass component contact contrast cookie copy copyleft copyright corner-down-left corner-down-right corner-left-down corner-left-up corner-right-down corner-right-up corner-up-left corner-up-right cpu credit-card croissant crop cross crosshair crown cup-soda currency database delete diamond dice-1 dice-2 dice-3 dice-4 dice-5 dice-6 dices diff disc divide-circle divide-square divide dollar-sign download-cloud download dribbble droplet droplets drumstick edit-2 edit-3 edit egg-fried egg equal-not equal eraser euro expand external-link eye-off eye facebook factory fast-forward feather figma file-archive file-audio-2 file-audio file-axis-3d file-badge-2 file-badge file-bar-chart-2 file-bar-chart file-box file-check-2 file-check file-clock file-code file-cog-2 file-cog file-diff file-digit file-down file-edit file-heart file-image file-input file-key-2 file-key file-line-chart file-lock-2 file-lock file-minus-2 file-minus file-output file-pie-chart file-plus-2 file-plus file-question file-scan file-search-2 file-search file-signature file-spreadsheet file-symlink file-terminal file-text file-type file-up file-video-2 file-video file-volume-2 file-volume file-warning file-x-2 file-x file files film filter fingerprint flag-off flag-triangle-left flag-triangle-right flag flame flashlight-off flashlight flask-conical flask-round flower-2 flower focus folder-archive folder-check folder-clock folder-closed folder-cog-2 folder-cog folder-down folder-edit folder-heart folder-input folder-key folder-lock folder-minus folder-open folder-output folder-plus folder-search-2 folder-search folder-symlink folder-tree folder-up folder-x folder folders form-input forward frame framer frown fuel function-square gamepad-2 gamepad gauge gavel gem ghost gift git-branch-plus git-branch git-commit git-fork git-merge git-pull-request github gitlab glass-water glasses globe-2 globe grab graduation-cap grape grid grip-horizontal grip-vertical hammer hand-metal hand hard-drive hard-hat hash haze headphones heart-crack heart-handshake heart-off heart help-circle hexagon highlighter history home hourglass ice-cream image-minus image-off image-plus image import inbox indent indian-rupee infinity info inspect instagram italic japanese-yen key keyboard lamp-ceiling lamp-desk lamp-floor lamp-wall-down lamp-wall-up lamp landmark languages laptop-2 laptop lasso-select lasso laugh layers layout-dashboard layout-grid layout-list layout-template layout leaf library life-buoy lightbulb-off lightbulb line-chart link-2-off link-2 link linkedin list-checks list-end list-minus list-music list-ordered list-plus list-start list-video list-x list loader-2 loader locate-fixed locate-off locate lock log-in log-out luggage magnet mail map-pin-off map-pin map martini maximize-2 maximize megaphone meh menu message-circle message-square mic-2 mic-off mic microscope milestone minimize-2 minimize minus-circle minus-square minus monitor-off monitor-speaker monitor moon more-horizontal more-vertical mountain-snow mountain mouse-pointer-2 mouse-pointer-click mouse-pointer mouse move-3d move-diagonal-2 move-diagonal move-horizontal move-vertical move music-2 music-3 music-4 music navigation-2-off navigation-2 navigation-off navigation network newspaper octagon option outdent package-2 package-check package-minus package-open package-plus package-search package-x package paint-bucket paintbrush-2 paintbrush palette palmtree paperclip party-popper pause-circle pause-octagon pause pen-tool pencil percent person-standing phone-call phone-forwarded phone-incoming phone-missed phone-off phone-outgoing phone pie-chart piggy-bank pin-off pin pipette pizza plane play-circle play plug-zap plus-circle plus-square plus pocket podcast pointer pound-sterling power-off power printer puzzle qr-code quote radio-receiver radio recycle redo-2 redo refresh-ccw refresh-cw regex repeat-1 repeat reply-all reply rewind rocket rocking-chair rotate-3d rotate-ccw rotate-cw rss ruler russian-ruble save scale-3d scale scaling scan-line scan scissors screen-share-off screen-share scroll search send separator-horizontal separator-vertical server-cog server-crash server-off server settings-2 settings share-2 share sheet shield-alert shield-check shield-close shield-off shield shirt shopping-bag shopping-cart shovel shrink shrub shuffle sidebar-close sidebar-open sidebar sigma signal-high signal-low signal-medium signal-zero signal siren skip-back skip-forward skull slack slash slice sliders-horizontal sliders smartphone-charging smartphone smile-plus smile snowflake sofa sort-asc sort-desc speaker sprout square star-half star-off star stethoscope sticker sticky-note stop-circle stretch-horizontal stretch-vertical strikethrough subscript sun-dim sun-medium sun-moon sun sunrise sunset superscript swiss-franc switch-camera sword swords syringe table-2 table tablet tag target tent terminal-square terminal text-cursor-input text-cursor thermometer-snowflake thermometer-sun thermometer thumbs-down thumbs-up ticket timer-off timer-reset timer toggle-left toggle-right tornado toy-brick train trash-2 trash tree-deciduous tree-pine trees trello trending-down trending-up triangle truck tv-2 tv twitch twitter type umbrella underline undo-2 undo unlink-2 unlink unlock upload-cloud upload user-check user-cog user-minus user-plus user-x user users utensils-crossed utensils venetian-mask verified vibrate-off vibrate video-off video view voicemail volume-1 volume-2 volume-x volume wallet wand watch waves webcam wifi-off wifi wind wine wrap-text wrench x-circle x-octagon x-square x youtube zap-off zap zoom-in zoom-out)
icons.each do |icon|
  e2e_file = File.join(File.dirname(__FILE__), "src", "components", "test", "#{icon}.e2e.ts")
  File.open(e2e_file, 'w') do |f|
    puts "Generating e2e test for #{icon} in #{e2e_file}..."
    f.write(generate_e2e(icon))
    f.flush
  end
  spec_file = File.join(File.dirname(__FILE__), "src", "components", "test", "#{icon}.spec.tsx")
  File.open(spec_file, 'w') do |f|
    puts "Generating spec test for #{icon} in #{spec_file}..."
    f.write(generate_spec(icon))
    f.flush
  end
end
