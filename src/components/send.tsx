import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-send'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['send'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

