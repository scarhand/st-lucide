import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-life-buoy'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['life-buoy'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

