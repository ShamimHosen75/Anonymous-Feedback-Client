import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='ml-32 my-5 p-8 bg-secondary text-white sm:w-4/6 rounded-md'>
            <p className='text-xl font-medium mb-2'>Hi There</p>
            <h3 className='text-4xl font-bold mb-2'>I am Shamim Hosen</h3>
            <h2 className='text-2xl font-medium mb-3'>I am Front End Developer</h2>
            <h5>Email Address : <span className='text-Sky-900'>developer.shamim96@gamil.com</span></h5>
            <h5>Education : 5th Semester, Computer Science & Technology at Habiganj Polytechnic Institute.</h5>
            <h2 className='text-xl font-medium mt-3 mb-1'>Description : </h2>
            <p>My name is Shamim Hosen.I will learn web development.I am daily learn,practice and working 10-12 hour approx. Web developers have two main career paths to choose from, depending on work style and level of experience. You might opt for a stable, salaried position, or enjoy more autonomy as an independent contractor.Programming skills will always be in demand. Complement your coding prowess with a strong work ethic, and you’ll build a career that comes with high pay and even higher job satisfaction.</p>
            <h2 className='text-2xl font-medium mt-3'>Look What Can I Do ?</h2>
            <ul className='list-disc ml-5'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>BOOTSTRAP</li>
                <li>TAILWIND CSS</li>
                <li>REST API</li>
                <li>REACT JS</li>
                <li>MONGO DB</li>
                <li>EXPRESS</li>
                <li>NODE JS</li>
            </ul>
            
        </div>
    );
};

export default MyPortfolio;