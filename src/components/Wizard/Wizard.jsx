import React from 'react';
import { Link, Route } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import store, {CANCEL} from '../../store';
import './Wizard.css';

function Wizard() {
	return (
		<div className="main-wiz">
			<header>
				<h2>Add New Listing</h2>
				<Link to='/'>
					<button className="cancel" onClick={() => {
						store.dispatch({type: CANCEL})
						}}>Cancel</button>
				</Link>
			</header>
	
			<Route path='/wizard/step1' component={Step1} />
			<Route path='/wizard/step2' component={Step2} />
			<Route path='/wizard/step3' component={Step3} />
	
		</div>
	)

} 

export default Wizard