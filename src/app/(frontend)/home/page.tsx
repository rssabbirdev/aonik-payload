import Link from 'next/link'
import React from 'react'
import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
})

function HomePage() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: 'Check Appointment',
      desc: 'You can check your doctor appointment just by your Emirates ID number',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: 'Navigation',
      desc: "Don't have to worry which way you have to go, our navigation system bring navigation easier",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: 'AI Translator',
      desc: 'We implement OpenAI as our translator, give accurate translation by simply ignore your grammatical mistake',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: 'Accessibility',
      desc: 'We focus accessibility driven product, anyone use our product without any hassle.',
    },
  ]

  const testimonials = [
    {
      avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      name: 'Martin escobar',
      title: 'Founder of meta',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Simon andrew',
      title: 'Software engineer',
      quote:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Micheal worin',
      title: 'Product designer',
      quote:
        'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.',
    },
  ]
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: 'Mountain View, California, United State.',
      title: 'Our office',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: '+1 (555) 000-000',
      title: 'Phone',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: 'Support@example.com',
      title: 'Email',
    },
  ]
  return (
    <main className="">
      <section>
        <div className="container mb-20 relative">
          <div className="text-center mt-5 lg:text-left lg:mt-0">
            <h1 className="lg:text-[12rem] text-[6rem] font-bold text-primary">Aonik</h1>
            <p className="text-2xl">Graduation Project Presentation | Team 1</p>
          </div>
          <div className="flex justify-center items-center gap-5 mt-10">
            <div className="flex justify-center">
              <Link
                href="/appointment"
                className="md:px-10 md:py-4 md:text-lg px-5 py-3 text-sm font-bold bg-primary transition-all text-white rounded-md hover:bg-primary-foreground border border-primary"
              >
                Check Appointment
              </Link>
            </div>
            <div className="flex justify-center">
              <button className="md:px-10 md:py-4 md:text-lg px-5 py-3 text-sm font-bold transition-all bg-white text-primary hover:text-primary-foreground border border-primary rounded-md hover:border-primary-foreground">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute h-full w-full bg-no-repeat bg-right-bottom mx-auto top-0"
          style={{
            background: "url('/bg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '100% 50%',
          }}
        ></div>
      </section>
      <section className="bg-gray-100 p-20 relative text-primary-foreground">
        <div className="text-4xl lg:text-7xl text-center">
          <p className={caveat.className}>“GUIDING YOU TO</p>
          <p className={caveat.className}>BETTER HEALTH”</p>
        </div>
        <div
          className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
          style={{
            background:
              'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
          }}
        ></div>
      </section>
      <section className="py-28">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between gap-24 lg:flex md:px-8">
          <div className="max-w-xl">
            <h3 className=" text-3xl font-semibold sm:text-4xl text-primary-foreground">
              Innovation We Offer For You
            </h3>
            <p className="mt-3">
              Here is some important point we let we know, how much we are able to serve to.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <ul className="grid gap-8 sm:grid-cols-2">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4 bg-primary text-white p-3 rounded-xl">
                  <div className="flex-none w-12 h-12 bg-white text-primary rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="mt-3">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-14 bg-gray-100">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl sm:text-center md:mx-auto">
            <h3 className="text-primary-foreground text-3xl font-semibold sm:text-4xl">
              Hear from our customers
            </h3>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta
              nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat
              et.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, idx) => (
                <li key={idx} className="bg-white rounded-xl border shadow-md">
                  <div className="p-4">
                    <svg
                      className="w-9 h-9 text-primary"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 text-lg font-semibold px-4 py-1">{item.quote}</p>
                    </blockquote>
                    <div className="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 rounded-full border-2 border-primary"
                      />
                      <div>
                        <span className="block text-gray-800 font-semibold">{item.name}</span>
                        <span className="block text-primary text-sm mt-0.5">{item.title}</span>
                      </div>
                    </div>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
          style={{
            background:
              'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
          }}
        ></div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 py-10">
          <div className="max-w-xl space-y-3">
            <h3 className="text-indigo-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have, We look forward to hearing
              from you .
            </p>
          </div>
          <div>
            <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
              {contactMethods.map((item, idx) => (
                <li key={idx}>
                  <h4 className="text-gray-800 text-lg font-medium">{item.title}</h4>
                  <div className="mt-3 flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
