import React from 'react';

const About = () => {
    return (
        <div>
            {/* here we some word about our site */}
            <div className='p-5'>
                <h2>About Us</h2>
                <p>
                    Eduonix introduces it’s biggest and best course yet! To cater to the changing role of developers and technologies around the world, we have introduced a brand new master course to become a Full Stack Web Developer.

                    With the fast paced nature of technology, developers can no longer become experts in aspects of development, but now must learn the entire process of development from design to actual deployment. This has introduced a new role for developers – Full Stack Developers. <br />

                    <span className='text-danger fs-3'>What are Full Stack Developers?</span><br />

                    Full Stack Developers are developers that design complete apps and websites. These developers work on all facets of development, from frontend, to backend, to database and even debugging and testing. In short, the developer must understand the app through and through. Frontend developers are more sought after because of their expertise of not in one but multiple technologies. They can handle all aspects of development, and it can result in a more seamlessly created product.

                    However, resources to become a Full Stack Developer are limited and only offer sections or just random technologies that you must learn and combine on your own. So, we introduced this course that compiles all technologies in perfect sync to help developers transition from a simple developer to become a Full Stack Developer.

                    Starting from frontend development, the learner will slowly progress to become to other aspects of development including backend, database, debugging, version control and other essential technologies that are helpful for a developer.

                    Our Full Stack Course breaks down the fundamentals of each technology that you would require to become a Full Stack Developer. The entire course is broken down into five separate segments: Frontend, Backend, Database, Other Essential Technologies and Debugging/Version Control. Each section includes multiple technologies to help you gain more experience as a developer.

                    That’s not it! In addition to theory based learning, the course also focuses on practical applications by covering multiple projects in great detail, helping you learn with hands-on experience.

                    Let’s look at the different technologies and frameworks that you will learn:

                    Frontend – HTML, HMTL5, CSS3, Twitter Bootstrap, JavaScript, jQuery

                    Backend – Node.js, Meteor.js, Angular 2, PHP, Ruby on Rails

                    Database – MySQL, PostgreSQL, MongoDB, CouchDB, Apache Cassandra

                    Other Essential Technologies – Memcached, Redis, Apache Lucene, Apache Solr

                    Debugging/Version Control – GIT, Subversion, Task Runners (Grunt, Gulp), Debuggers (Xdebug, Firedebug)</p>
            </div>
            <div className='p-5'>
            <h2>Advantages</h2>
            <h4>The advantage of being a full stack web developer is:</h4>
            <p className='text-justify'>
                You can master all the techniques involved in a development project
                You can make a prototype very rapidly
                You can provide help to all the team members
                You can reduce the cost of the project
                You can reduce the time used for team communication
                You can switch between front and back end development based on requirements
                You can better understand all aspects of new and upcoming technologies</p>
            </div>
        </div>
    );
};

export default About;