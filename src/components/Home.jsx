import React from 'react';
//style
import './Home.css';

export default function Home() {
	return (
		<div className='Home'>
			<div className='Image'>
				<img src='/images/shape.png' alt='shape' />
			</div>
			<div className='Newsletter'>
				<h6>Subscribe to our Newsletter</h6>
				<form>
					<input type='text' placeholder='Your Email Is Here' />
					<button>Subscribe Now</button>
				</form>
			</div>
		</div>
	);
}
