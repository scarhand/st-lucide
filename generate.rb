#!/usr/bin/env ruby

def capitalize(str)
  str.split('-').map(&:capitalize).join
end

def generate(icon)
  content = <<-BODY.chomp
import { Component, Element, h, Host, Prop } from '@stencil/core';
import { #{capitalize(icon)} as Lucide#{capitalize(icon)}, createElement } from 'lucide';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-#{icon}'
})
export class Icon#{capitalize(icon)} {
  @Element() el: any;

  @Prop({ attribute: 'alignment-baseline' }) alignmentBaseline: any;
  @Prop({ attribute: 'baseline-shift' }) baselineShift: any;
  @Prop({ attribute: 'clip-path' }) clipPath: any;
  @Prop({ attribute: 'clip-rule' }) clipRule: any;
  @Prop({ attribute: 'color' }) color: any;
  @Prop({ attribute: 'color-interpolation' }) colorInterpolation: any;
  @Prop({ attribute: 'color-interpolation-filters' }) colorInterpolationFilters: any;
  @Prop({ attribute: 'color-rendering' }) colorRendering: any;
  @Prop({ attribute: 'cursor' }) cursor: any;
  @Prop({ attribute: 'cx' }) cx: any;
  @Prop({ attribute: 'cy' }) cy: any;
  @Prop({ attribute: 'd' }) d: any;
  @Prop({ attribute: 'direction' }) direction: any;
  @Prop({ attribute: 'display' }) display: any;
  @Prop({ attribute: 'dominant-baseline' }) dominantBaseline: any;
  @Prop({ attribute: 'fill' }) fill: any;
  @Prop({ attribute: 'fill-opacity' }) fillOpacity: any;
  @Prop({ attribute: 'fill-rule' }) fillRule: any;
  @Prop({ attribute: 'filter' }) filter: any;
  @Prop({ attribute: 'flood-color' }) floodColor: any;
  @Prop({ attribute: 'flood-opacity' }) floodOpacity: any;
  @Prop({ attribute: 'font' }) font: any;
  @Prop({ attribute: 'font-family' }) fontFamily: any;
  @Prop({ attribute: 'font-kerning' }) fontKerning: any;
  @Prop({ attribute: 'font-size' }) fontSize: any;
  @Prop({ attribute: 'font-size-adjust' }) fontSizeAdjust: any;
  @Prop({ attribute: 'font-stretch' }) fontStretch: any;
  @Prop({ attribute: 'font-style' }) fontStyle: any;
  @Prop({ attribute: 'font-variant' }) fontVariant: any;
  @Prop({ attribute: 'font-weight' }) fontWeight: any;
  @Prop({ attribute: 'height' }) height: any;
  @Prop({ attribute: 'image-rendering' }) imageRendering: any;
  @Prop({ attribute: 'isolation' }) isolation: any;
  @Prop({ attribute: 'letter-spacing' }) letterSpacing: any;
  @Prop({ attribute: 'lighting-color' }) lightingColor: any;
  @Prop({ attribute: 'marker' }) marker: any;
  @Prop({ attribute: 'marker-end' }) markerEnd: any;
  @Prop({ attribute: 'marker-mid' }) markerMid: any;
  @Prop({ attribute: 'marker-start' }) markerStart: any;
  @Prop({ attribute: 'mask' }) mask: any;
  @Prop({ attribute: 'mask-clip' }) maskClip: any;
  @Prop({ attribute: 'mask-composite' }) maskComposite: any;
  @Prop({ attribute: 'mask-image' }) maskImage: any;
  @Prop({ attribute: 'mask-mode' }) maskMode: any;
  @Prop({ attribute: 'mask-origin' }) maskOrigin: any;
  @Prop({ attribute: 'mask-position' }) maskPosition: any;
  @Prop({ attribute: 'mask-repeat' }) maskRepeat: any;
  @Prop({ attribute: 'mask-size' }) maskSize: any;
  @Prop({ attribute: 'mask-type' }) maskType: any;
  @Prop({ attribute: 'opacity' }) opacity: any;
  @Prop({ attribute: 'overflow' }) overflow: any;
  @Prop({ attribute: 'pointer-events' }) pointerEvents: any;
  @Prop({ attribute: 'r' }) r: any;
  @Prop({ attribute: 'rx' }) rx: any;
  @Prop({ attribute: 'ry' }) ry: any;
  @Prop({ attribute: 'shape-rendering' }) shapeRendering: any;
  @Prop({ attribute: 'stop-color' }) stopColor: any;
  @Prop({ attribute: 'stop-opacity' }) stopOpacity: any;
  @Prop({ attribute: 'stroke' }) stroke: any;
  @Prop({ attribute: 'stroke-dasharray' }) strokeDasharray: any;
  @Prop({ attribute: 'stroke-dashoffset' }) strokeDashoffset: any;
  @Prop({ attribute: 'stroke-linecap' }) strokeLinecap: any;
  @Prop({ attribute: 'stroke-linejoin' }) strokeLinejoin: any;
  @Prop({ attribute: 'stroke-miterlimit' }) strokeMiterlimit: any;
  @Prop({ attribute: 'stroke-opacity' }) strokeOpacity: any;
  @Prop({ attribute: 'stroke-width' }) strokeWidth: any;
  @Prop({ attribute: 'text-anchor' }) textAnchor: any;
  @Prop({ attribute: 'text-decoration' }) textDecoration: any;
  @Prop({ attribute: 'text-orientation' }) textOrientation: any;
  @Prop({ attribute: 'text-rendering' }) textRendering: any;
  @Prop({ attribute: 'transform' }) transform: any;
  @Prop({ attribute: 'transform-box' }) transformBox: any;
  @Prop({ attribute: 'transform-origin' }) transformOrigin: any;
  @Prop({ attribute: 'unicode-bidi' }) unicodeBidi: any;
  @Prop({ attribute: 'visibility' }) visibility: any;
  @Prop({ attribute: 'width' }) width: any;
  @Prop({ attribute: 'word-spacing' }) wordSpacing: any;
  @Prop({ attribute: 'writing-mode' }) writingMode: any;
  @Prop({ attribute: 'x' }) x: any;
  @Prop({ attribute: 'y' }) y: any;

  render() {
    const inner = createElement(Lucide#{capitalize(icon)});
    Object.entries(Object.assign({},attributesToObject(this.el), this.getProps())).forEach(([name,value]) => inner.setAttribute(name, value as string) );
    return <Host innerHTML={inner.outerHTML} class="st-lucide-icon"></Host>;
  }

  private getProps() {
    const props = ['color','cursor','cx','cy','d','direction','display','fill','filter','font','height','isolation','marker','mask','opacity','overflow','r','rx','ry','stroke','transform','visibility','width','x','y'];
    return props.reduce((acc, prop) => {
      if(this[prop] !== undefined && this[prop] !== null) {
        acc[prop] = this[prop];
      }
      return acc;
    }, {});
  }
}

BODY
end

icons = %W(accessibility activity air-vent airplay alarm-check alarm-clock-off alarm-clock alarm-minus alarm-plus album alert-circle alert-octagon alert-triangle align-center-horizontal align-center-vertical align-center align-end-horizontal align-end-vertical align-horizontal-distribute-center align-horizontal-distribute-end align-horizontal-distribute-start align-horizontal-justify-center align-horizontal-justify-end align-horizontal-justify-start align-horizontal-space-around align-horizontal-space-between align-justify align-left align-right align-start-horizontal align-start-vertical align-vertical-distribute-center align-vertical-distribute-end align-vertical-distribute-start align-vertical-justify-center align-vertical-justify-end align-vertical-justify-start align-vertical-space-around align-vertical-space-between anchor angry annoyed aperture apple archive-restore archive armchair arrow-big-down arrow-big-left arrow-big-right arrow-big-up arrow-down-circle arrow-down-left arrow-down-right arrow-down arrow-left-circle arrow-left-right arrow-left arrow-right-circle arrow-right arrow-up-circle arrow-up-left arrow-up-right arrow-up asterisk at-sign award axe axis-3d baby backpack baggage-claim banana banknote bar-chart-2 bar-chart-3 bar-chart-4 bar-chart-horizontal bar-chart baseline bath battery-charging battery-full battery-low battery-medium battery beaker bed-double bed-single bed beer bell-minus bell-off bell-plus bell-ring bell bike binary bitcoin bluetooth-connected bluetooth-off bluetooth-searching bluetooth bold bomb bone book-open book bookmark-minus bookmark-plus bookmark bot box-select box boxes briefcase brush bug building-2 building bus cake calculator calendar-check-2 calendar-check calendar-clock calendar-days calendar-heart calendar-minus calendar-off calendar-plus calendar-range calendar-search calendar-x-2 calendar-x calendar camera-off camera car carrot cast check-circle-2 check-circle check-square check chef-hat cherry chevron-down chevron-first chevron-last chevron-left chevron-right chevron-up chevrons-down-up chevrons-down chevrons-left-right chevrons-left chevrons-right-left chevrons-right chevrons-up-down chevrons-up chrome cigarette-off cigarette circle-dot circle-ellipsis circle-slashed circle clapperboard clipboard-check clipboard-copy clipboard-edit clipboard-list clipboard-signature clipboard-type clipboard-x clipboard clock-1 clock-10 clock-11 clock-12 clock-2 clock-3 clock-4 clock-5 clock-6 clock-7 clock-8 clock-9 clock cloud-cog cloud-drizzle cloud-fog cloud-hail cloud-lightning cloud-moon-rain cloud-moon cloud-off cloud-rain-wind cloud-rain cloud-snow cloud-sun-rain cloud-sun cloud cloudy clover code-2 code codepen codesandbox coffee cog coins columns command compass component contact contrast cookie copy copyleft copyright corner-down-left corner-down-right corner-left-down corner-left-up corner-right-down corner-right-up corner-up-left corner-up-right cpu credit-card croissant crop cross crosshair crown cup-soda curly-braces currency database delete diamond dice-1 dice-2 dice-3 dice-4 dice-5 dice-6 dices diff disc divide-circle divide-square divide dollar-sign download-cloud download dribbble droplet droplets drumstick edit-2 edit-3 edit egg-fried egg equal-not equal eraser euro expand external-link eye-off eye facebook factory fast-forward feather figma file-archive file-audio-2 file-audio file-axis-3d file-badge-2 file-badge file-bar-chart-2 file-bar-chart file-box file-check-2 file-check file-clock file-code file-cog-2 file-cog file-diff file-digit file-down file-edit file-heart file-image file-input file-json-2 file-json file-key-2 file-key file-line-chart file-lock-2 file-lock file-minus-2 file-minus file-output file-pie-chart file-plus-2 file-plus file-question file-scan file-search-2 file-search file-signature file-spreadsheet file-symlink file-terminal file-text file-type-2 file-type file-up file-video-2 file-video file-volume-2 file-volume file-warning file-x-2 file-x file files film filter fingerprint flag-off flag-triangle-left flag-triangle-right flag flame flashlight-off flashlight flask-conical flask-round flip-horizontal-2 flip-horizontal flip-vertical-2 flip-vertical flower-2 flower focus folder-archive folder-check folder-clock folder-closed folder-cog-2 folder-cog folder-down folder-edit folder-heart folder-input folder-key folder-lock folder-minus folder-open folder-output folder-plus folder-search-2 folder-search folder-symlink folder-tree folder-up folder-x folder folders form-input forward frame framer frown fuel function-square gamepad-2 gamepad gauge gavel gem ghost gift git-branch-plus git-branch git-commit git-compare git-fork git-merge git-pull-request-closed git-pull-request-draft git-pull-request github gitlab glass-water glasses globe-2 globe grab graduation-cap grape grid grip-horizontal grip-vertical hammer hand-metal hand hard-drive hard-hat hash haze headphones heart-crack heart-handshake heart-off heart-pulse heart help-circle hexagon highlighter history home hourglass ice-cream image-minus image-off image-plus image import inbox indent indian-rupee infinity info inspect instagram italic japanese-yen joystick key keyboard lamp-ceiling lamp-desk lamp-floor lamp-wall-down lamp-wall-up lamp landmark languages laptop-2 laptop lasso-select lasso laugh layers layout-dashboard layout-grid layout-list layout-template layout leaf library life-buoy lightbulb-off lightbulb line-chart link-2-off link-2 link linkedin list-checks list-end list-minus list-music list-ordered list-plus list-start list-video list-x list loader-2 loader locate-fixed locate-off locate lock log-in log-out luggage magnet mail-check mail-minus mail-open mail-plus mail-question mail-search mail-warning mail-x mail mails map-pin-off map-pin map martini maximize-2 maximize medal megaphone-off megaphone meh menu message-circle message-square mic-2 mic-off mic microscope milestone minimize-2 minimize minus-circle minus-square minus monitor-off monitor-speaker monitor moon more-horizontal more-vertical mountain-snow mountain mouse-pointer-2 mouse-pointer-click mouse-pointer mouse move-3d move-diagonal-2 move-diagonal move-horizontal move-vertical move music-2 music-3 music-4 music navigation-2-off navigation-2 navigation-off navigation network newspaper octagon option outdent package-2 package-check package-minus package-open package-plus package-search package-x package paint-bucket paintbrush-2 paintbrush palette palmtree paperclip party-popper pause-circle pause-octagon pause pen-tool pencil percent person-standing phone-call phone-forwarded phone-incoming phone-missed phone-off phone-outgoing phone pie-chart piggy-bank pin-off pin pipette pizza plane play-circle play plug-zap plus-circle plus-square plus pocket podcast pointer pound-sterling power-off power printer puzzle qr-code quote radio-receiver radio recycle redo-2 redo refresh-ccw refresh-cw regex repeat-1 repeat reply-all reply rewind rocket rocking-chair rotate-3d rotate-ccw rotate-cw rss ruler russian-ruble save scale-3d scale scaling scan-face scan-line scan scissors screen-share-off screen-share scroll search send separator-horizontal separator-vertical server-cog server-crash server-off server settings-2 settings share-2 share sheet shield-alert shield-check shield-close shield-off shield shirt shopping-bag shopping-cart shovel shrink shrub shuffle sidebar-close sidebar-open sidebar sigma signal-high signal-low signal-medium signal-zero signal siren skip-back skip-forward skull slack slash slice sliders-horizontal sliders smartphone-charging smartphone smile-plus smile snowflake sofa sort-asc sort-desc speaker sprout square star-half star-off star stethoscope sticker sticky-note stop-circle stretch-horizontal stretch-vertical strikethrough subscript sun-dim sun-medium sun-moon sun-snow sun sunrise sunset superscript swiss-franc switch-camera sword swords syringe table-2 table tablet tag tags target tent terminal-square terminal text-cursor-input text-cursor thermometer-snowflake thermometer-sun thermometer thumbs-down thumbs-up ticket timer-off timer-reset timer toggle-left toggle-right tornado toy-brick train trash-2 trash tree-deciduous tree-pine trees trello trending-down trending-up triangle trophy truck tv-2 tv twitch twitter type umbrella underline undo-2 undo unlink-2 unlink unlock upload-cloud upload usb user-check user-cog user-minus user-plus user-x user users utensils-crossed utensils venetian-mask verified vibrate-off vibrate video-off video view voicemail volume-1 volume-2 volume-x volume wallet wand-2 wand watch waves webcam webhook wifi-off wifi wind wine wrap-text wrench x-circle x-octagon x-square x youtube zap-off zap zoom-in zoom-out)
icons.each do |icon|
  file = File.join(File.dirname(__FILE__), "src", "components", "#{icon}.tsx")
  File.open(file, 'w') do |f|
    puts "Generating #{icon} in #{file}..."
    f.write(generate(icon))
    f.flush
  end
end

current_icons = Dir.glob("*.tsx", base: File.join(File.dirname(__FILE__), "src", "components")).map {|f| f.gsub('.tsx', '')}
to_remove = current_icons - icons
to_remove.each do |icon|
  file = File.join(File.dirname(__FILE__), "src", "components", "#{icon}.tsx")
  puts "Removing #{file}..."
  File.delete(file)
end

