import React from 'react';

export default function Contact() {
	return (
		<div
			className='row'
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				height: '80%',
			}}
		>
			<div className='col-md-10 offset-md-1'>
				<h2 className='text-center mt-5'>Contact our team</h2>
				<div className='card bg-transparent border-0'>
					<form className='card-body p-lg-4'>
						<div className='text-center'></div>
						<div className='mb-3'>
							<input
								type='text'
								className='form-control'
								id='Use className'
								aria-describedby='emailHelp'
								placeholder='Name & Surname'
							/>
						</div>
						<div className='mb-3'>
							<input
								type='text'
								className='form-control'
								id='Use className'
								aria-describedby='emailHelp'
								placeholder='Email'
							/>
						</div>
						<div className='form-group mb-3'>
							<textarea
								className='form-control'
								id='message'
								rows='6'
								placeholder='Message'
								required
							></textarea>
						</div>
						<div className='text-center py-2'>
							<button type='submit' className='btn bg-white py-3 mb-4 w-50'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
