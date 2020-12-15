import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-chevrons-down'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['chevrons-down'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

