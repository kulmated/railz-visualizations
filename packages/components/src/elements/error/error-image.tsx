/* eslint-disable max-len, @typescript-eslint/no-unused-vars */
import { Component, h, Prop } from '@stencil/core';

import Translations from '../../config/translations/en.json';

import { Error202, Error204, Error500 } from './images';

@Component({
  tag: 'railz-error-image',
  styleUrl: './error-image.scss',
  shadow: true,
})
export class ErrorImage {
  /**
   * Status code based on HTTP Response codes
   */
  @Prop() readonly statusCode?: number;
  /**
   * Text to display at the bottom of the svg image
   */
  @Prop() readonly text?: string;
  /**
   * Fill color of the svg image representing a status code
   */
  @Prop() readonly fillColor?: string = '#949494';
  /**
   * Color of the image text
   */
  @Prop() readonly textColor?: string = '#424242';

  render(): HTMLElement {
    switch (this.statusCode) {
      case 202:
        return (
          <div>
            <Error202 fillColor={this.fillColor} />
            <p class="railz-error-title" style={{ color: this.textColor }}>
              {this.text || Translations.ERROR_202_TITLE}
            </p>
          </div>
        );
      case 204:
      case 404:
        return (
          <div>
            <Error204 fillColor={this.fillColor} />
            <p class="railz-error-title" style={{ color: this.textColor }}>
              {this.text || Translations.ERROR_204_TITLE}
            </p>
          </div>
        );
      default:
        return (
          <div>
            <Error500 fillColor={this.fillColor} />
            <p class="railz-error-title" style={{ color: this.textColor }}>
              {this.text || Translations.ERROR_500_TITLE}
            </p>
          </div>
        );
    }
  }
}
