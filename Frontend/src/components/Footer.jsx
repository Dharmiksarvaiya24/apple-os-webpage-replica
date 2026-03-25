const footerColumns = [
  {
    groups: [
      {
        title: 'Shop and Learn',
        items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
      },
      {
        title: 'Apple Wallet',
        items: ['Wallet'],
      },
    ],
  },
  {
    groups: [
      {
        title: 'Account',
        items: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
      },
      {
        title: 'Entertainment',
        items: ['Apple One', 'Apple TV', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple Podcasts', 'Apple Books', 'App Store'],
      },
    ],
  },
  {
    groups: [
      {
        title: 'Apple Store',
        items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Trade In', 'Ways to Buy', 'Recycling Programme', 'Order Status', 'Shopping Help'],
      },
    ],
  },
  {
    groups: [
      {
        title: 'For Business',
        items: ['Apple and Business', 'Shop for Business'],
      },
      {
        title: 'For Education',
        items: ['Apple and Education', 'Shop for Education', 'Shop for University'],
      },
      {
        title: 'For Healthcare',
        items: ['Apple and Healthcare'],
      },
      {
        title: 'For Government',
        items: ['Apple and Government'],
      },
    ],
  },
  {
    groups: [
      {
        title: 'Apple Values',
        items: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supply Chain Innovation'],
      },
      {
        title: 'About Apple',
        items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
      },
    ],
  },
]

const footerPolicies = ['Privacy Policy', 'Terms of Use', 'Sales Policy', 'Legal', 'Site Map']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-[#f5f5f7] px-6 py-10 text-[#6e6e73] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="max-w-auto">
          <p className="mt-2 text-[12px] leading-6">
           1. Visual intelligence is available on any Apple Intelligence-enabled iPhone. Some capabilities may not be available in all languages and regions. For more details, see support.apple.com/en-in/121115#visual-intelligence.<br />
           2.Live Translation in Messages is available in Chinese (Simplified), Chinese (Traditional), Dutch, English (UK, US), French (France), German, Italian, Japanese, Korean, Portuguese (Brazil), Spanish (Spain), Turkish and Vietnamese when Apple Intelligence is enabled on a compatible iPhone, iPad or Mac, as well as on Apple Watch Series 9 and later, Apple Watch Ultra 2 and later, and Apple Watch SE 3 when paired with an Apple Intelligence–enabled iPhone.<br/>
           3.Live Translation in Phone and FaceTime is available for one-on-one calls in Chinese (Mandarin, Simplified), Chinese (Mandarin, Traditional), English (UK, US), French (France), German, Italian, Japanese, Korean, Portuguese (Brazil) and Spanish (Spain) when Apple Intelligence is enabled on a compatible iPhone, iPad or Mac.<br/>
           4.Requires an Apple Intelligence–enabled iPhone nearby and Bluetooth headphones with device and Siri language set to English. Apple Intelligence is available in beta. Some features may not be available in all regions or languages. For feature and language availability and system requirements, see support.apple.com/121115.<br/>
           5.Available on Apple TV 4K (2nd generation and later).<br/>
           6.Available on iPhone 12 and later, iPad Pro (M4), iPad Pro 12.9″ (5th generation and later), iPad Pro 11″ (3rd generation and later), iPad Air (M2 and later), iPad Air (5th generation and later), iPad (A16), iPad mini (A17 Pro) and iPad mini (6th generation).<br/>
           7.Apple Intelligence is available in beta. Some features may not be available in all regions or languages. For feature and language availability and system requirements, see support.apple.com/en-in/121115.<br/>
           8.Live Translation with AirPods works on AirPods 4 with Active Noise Cancellation and AirPods Pro 2 and later with the latest firmware when paired with an Apple Intelligencee–enabled iPhone running iOS 26 and later. Available in beta. Some features may not be available in all regions or languages; for more information, see Feature Availability.<br/>
           9.Available in Cantonese (China mainland, Hong Kong, Macao), English, French (Canada, France), German (Germany), Japanese, Korean, Mandarin Chinese (China mainland, Macao, Taiwan), Portuguese (Brazil) and Spanish (Mexico, Puerto Rico, Spain, US).<br/>
           10.Available in English (Australia, Canada, India, Singapore, UK, US), French (France), German (Germany), Japanese, Mandarin Chinese (China mainland), Portuguese (Brazil) and Spanish (Mexico, Spain, US).<br/>
           11.CarPlay support is either standard or available as an option on many new 2016 cars and later, with some manufacturers offering software updates for earlier models. Some models may support CarPlay only in certain configurations, and not all models are available in all regions. CarPlay support is subject to change. See your dealer for details.<br/>
           12.Available on iPhone SE (2nd generation and later) and iPhone 11 and later with Apple TV 4K (3rd generation) running the latest operating system software. Apple Music subscription is required.<br/>
           13.Apple Pencil is sold separately.<br/>
           VIZHI VEEKURA (from “Think Indie”) Written By: Adesh Krishna, Sai Abhyankkar<br/>
           A Minecraft Movie © 2025 WBEI. and Legendary.<br/>
           Features are subject to change. Some features, applications and services may not be available in all regions or all languages. <br/>
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center gap-3 text-sm text-[#6e6e73]">
            <span className="text-base text-[#1d1d1f]"> </span>
            <span>&gt;</span>
            <span>Operating Systems</span>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {footerColumns.map((column, columnIndex) => (
              <div key={`footer-column-${columnIndex}`} className="space-y-8">
                {column.groups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-semibold text-[#1d1d1f]">{group.title}</h3>
                    <div className="mt-3 space-y-3 text-sm">
                      {group.items.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 border-b border-gray-200 pb-6 text-sm leading-6">
            <p>
              More ways to shop:{' '}
              <a href="/" className="text-blue-600 underline underline-offset-2">
                Find an Apple Store
              </a>{' '}
              or{' '}
              <a href="/" className="text-blue-600 underline underline-offset-2">
                other retailer
              </a>{' '}
              near you. Or call{' '}
              <a  className="text-blue-600 underline underline-offset-2">
                000800 040 1966
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4 text-xs sm:gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <p>Copyright © {year} Apple Inc. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {footerPolicies.map((item) => (
                  <a key={item} href="/" className="text-[#424245]">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <p>India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
