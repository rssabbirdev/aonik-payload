import AccessibleText from '@/components/AccessibleText/AccessibleText'
import Link from 'next/link'
import React from 'react'

function HomeTwo() {
  return (
    <section>
      <div className="container mb-20 relative">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center my-16 bg-[#ffffffa8] p-10 rounded-lg shadow-xl">
          <div className="animate-[slideIn_1s_ease-out]">
            <AccessibleText text={'welcome'}>
              <h2 className="text-3xl md:text-5xl text-primary font-bold">Welcome!</h2>
            </AccessibleText>
            <AccessibleText text="this device will make your experience better">
              <p>This device will make your experience better.</p>
            </AccessibleText>

            <div className="my-10">
              <AccessibleText text="Please choose your language you are suitable from below">
                <h3 className="text-primary text-xl md:text-2xl font-mono">
                  Please choose your language from below:
                </h3>
              </AccessibleText>
            </div>
            <Link
              href={'/appointment?lang=en'}
              className="text-white bg-primary px-8 py-3 rounded-lg shadow cursor-pointer hover:shadow-lg hover:px-10 transition-all hover:bg-primary-foreground"
            >
              English
            </Link>
          </div>
          <div className="text-right flex flex-col items-end animate-[slideInRight_1s_ease-out]">
            <AccessibleText text={'مرحباً'} buttonPosition="left" lang="ar-AE">
              <h2 className="text-3xl md:text-5xl text-primary font-bold">!مرحباً</h2>
            </AccessibleText>
            <AccessibleText text="هذا الجهاز سيجعل تجربتك أفضل" buttonPosition="left" lang="ar-AE">
              <p>.هذا الجهاز سيجعل تجربتك أفضل</p>
            </AccessibleText>
            <div className="my-10 flex items-end flex-col">
              <AccessibleText text="يرجى اختيار لغتك من الأسفل" lang="ar-AE" buttonPosition="left">
                <h3 className="text-primary text-xl md:text-2xl font-mono">
                  :يرجى اختيار لغتك من الأسفل
                </h3>
              </AccessibleText>
            </div>
            <Link
              href={'/appointment?lang=ar'}
              className="text-white bg-primary px-8 py-3 rounded-lg shadow cursor-pointer hover:shadow-lg hover:px-10 transition-all hover:bg-primary-foreground"
            >
              عربي
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute h-full w-full bg-no-repeat bg-right-bottom mx-auto top-0"
        style={{
          background: "url('/bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 50%',
          zIndex: '-9999',
        }}
      ></div>
    </section>
  )
}

export default HomeTwo
