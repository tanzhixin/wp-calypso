/** @format */

/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import { overEvery as and } from 'lodash';

/**
 * Internal dependencies
 */
import { makeTour, Tour, Step, ButtonRow, Quit } from 'layout/guided-tours/config-elements';
import { isEnabled } from 'state/ui/guided-tours/contexts';
import { isDesktop } from 'lib/viewport';
import { getSelectedSiteId } from 'state/ui/selectors';
import isSiteAutomatedTransfer from 'state/selectors/is-site-automated-transfer';

const isAtomic = state => isSiteAutomatedTransfer( state, getSelectedSiteId( state ) );

export const PluginsBasicTour = makeTour(
	<Tour
		name="pluginsBasicTour"
		version="20180718"
		path={ [ '/stats', '/plugins' ] }
		when={ and( isAtomic, isDesktop, isEnabled( 'calypsoify/plugins' ) ) }
	>
		<Step
			name="init"
			arrow="left-middle"
			target=".manage_menu__plugins-extra-icon"
			placement="below"
			style={ { animationDelay: '2s', marginTop: '-89px', marginLeft: '40px' } }
			scrollContainer=".sidebar__region"
		>
			{ ( { translate } ) => (
				<Fragment>
					<p>{ translate( 'Manage plugin settings, and install more plugins here' ) }</p>
					<ButtonRow>
						<Quit primary>{ translate( 'Got it.' ) }</Quit>
					</ButtonRow>
				</Fragment>
			) }
		</Step>
	</Tour>
);
