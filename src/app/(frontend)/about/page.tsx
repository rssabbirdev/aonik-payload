import Link from 'next/link'
import React from 'react'

function page() {
  const team = [
    {
      avatar:
        'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: 'Dr. Sara Ruth',
      title: 'Neurologist',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
      linkedin: 'javascript:void(0)',
      twitter: 'javascript:void(0)',
    },
    {
      avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      name: 'Dr. Micheal Adam',
      title: 'Cardiologist',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
      linkedin: 'javascript:void(0)',
      twitter: 'javascript:void(0)',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'Dr. Brown Luis',
      title: 'General',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
      linkedin: 'javascript:void(0)',
      twitter: 'javascript:void(0)',
    },
  ]
  return (
    <main>
      <section className="relative overflow-hidden py-28 px-4 md:px-8">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
        <div className="max-w-xl mx-auto text-center relative">
          <div className="py-4">
            <h3 className="text-3xl text-primary  font-semibold md:text-4xl">
              _Lets Communication Easier _Though Translator
            </h3>
            <p className=" leading-relaxed mt-3">
              We develop most suitable translator to make our doctor-patient communication easier.
              With AI grammar correction feature no matter how you say, the translation will smooth
              then ever
            </p>
          </div>
          <div className="mt-5 items-center justify-center gap-3 sm:flex">
            <Link
              href="/translator"
              className="md:px-10 md:py-4 md:text-lg px-5 py-3 text-sm font-bold bg-primary transition-all text-white rounded-md hover:bg-primary-foreground border border-primary"
            >
              Try It Out
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="https://health.ucdavis.edu/media-resources/family-medicine/images/Images/Main%20Images/How-Are-Clinic-Works.jpg"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-primary-foreground font-semibold">Advanced Technology</h3>
              <p className="text-primary text-3xl font-semibold sm:text-4xl">
                With modern medical tools, noting hide inside you.
              </p>
              <p className="mt-3 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-1 items-center text-primary-foreground hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-primary text-3xl font-semibold sm:text-4xl">Meet Our Doctors</h3>
            <p className="text-gray-600 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum
              has been the industrys standard dummy.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-24 h-24 mx-auto">
                    <img src={item.avatar} className="w-full h-full rounded-full" alt="" />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                    <p className="text-primary">{item.title}</p>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                    <div className="mt-4 flex justify-center gap-4 text-gray-400">
                      <a href={item.twitter}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <g clipPath="url(#clip0_17_80)">
                            <path
                              fill="currentColor"
                              d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_80">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href={item.linkedin}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <g clipPath="url(#clip0_17_68)">
                            <path
                              fill="currentColor"
                              d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_68">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
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

export default page
