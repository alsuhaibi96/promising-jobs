const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Discover real feedback from users who have utilized the job listing services of Promising Jobs, an innovative platform for job seekers and employers.</p>
        </div> 
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Finding the right job has never been easier</h3>
                    <p className="my-4">I was amazed by how efficiently I could navigate through the Promising Jobs site. The platforms user-friendly interface and comprehensive job listings made it incredibly easy to find exactly what I was looking for.</p>
                    <p className="my-4">The integration of direct applications through the site streamlined the entire process, making job hunting less daunting and much more effective.</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Bonnie Green</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">A platform that understands the needs of employers</h3>
                    <p className="my-4">As an employer, Promising Jobs made it simple to find qualified candidates. The detailed filters and easy posting options helped us reach the right candidates efficiently.</p>
                    <p className="my-4">Their support team was also incredibly helpful, ensuring that our listings were optimized to attract top talent.</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Roberta Casas</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User-friendly and effective</h3>
                    <p className="my-4">Promising Jobs not only looks good but works well too. Its seamless interface and extensive job listings have made it my go-to for job searching. It is rare to find a site that combines great design with such powerful functionality.</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Jese Leos</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Finding the right job has never been easier</h3>
                    <p className="my-4">I was amazed by how efficiently I could navigate through the Promising Jobs site. The platform user-friendly interface and comprehensive job listings made it incredibly easy to find exactly what I was looking for.</p>
                    <p className="my-4">The integration of direct applications through the site streamlined the entire process, making job hunting less daunting and much more effective.</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Bonnie Green</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                    </div>
                </figcaption>    
            </figure>
        </div>
        <div className="text-center">
            <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a> 
        </div>
      </div>
    </section>
  )
}

export default Testimonials
