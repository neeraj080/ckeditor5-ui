/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/dropdown/button/dropdownbuttonview
 */

import ButtonView from '../../button/buttonview';

import dropdownArrowIcon from '../../../theme/icons/dropdown-arrow.svg';
import IconView from '../../icon/iconview';

/**
 * The default dropdown button view class.
 *
 *		const view = new DropdownButtonView();
 *
 *		view.set( {
 *			label: 'A button',
 *			keystroke: 'Ctrl+B',
 *			tooltip: true
 *		} );
 *
 *		view.render();
 *
 *		document.body.append( view.element );
 *
 * Also see the {@link module:ui/dropdown/utils~createDropdown `createDropdown()` util}.
 *
 * @implements module:ui/dropdown/button/dropdownbuttoninterface~DropdownButtonInterface
 * @extends module:ui/button/buttonview~ButtonView
 */
export default class DropdownButtonView extends ButtonView {
	/**
	 * @inheritDoc
	 */
	constructor( locale ) {
		super( locale );

		/**
		 * An icon that displays arrow to indicate a dropdown button.
		 *
		 * @readonly
		 * @member {module:ui/icon/iconview~IconView}
		 */
		this.arrowView = this._createArrowView();

		// DropdownButtonInterface expects the open event upon which the dropdown will open.
		this.delegate( 'execute' ).to( this, 'open' );
	}

	/**
	 * @inheritDoc
	 */
	render() {
		super.render();

		this.children.add( this.arrowView );
	}

	/**
	 * Creates a {@link module:ui/icon/iconview~IconView} instance as {@link #arrowView}.
	 *
	 * @private
	 * @returns {module:ui/icon/iconview~IconView}
	 */
	_createArrowView() {
		const arrowView = new IconView();

		arrowView.content = dropdownArrowIcon;

		arrowView.extendTemplate( {
			attributes: {
				class: 'ck-dropdown__arrow'
			}
		} );

		return arrowView;
	}
}
