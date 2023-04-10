import AOS from 'aos';
import Image from 'next/image';
import Button from '../atom/Button';
import Subtitle from '../atom/Subtitle';
import Title from '../atom/Title';
AOS.init();

const data = [
  {
    id: 1,
    sponsorBy: 'Platinum Sponsors',
    images: [
      '/images/sponsor1.png',
      '/images/sponsor2.png',
      '/images/sponsor3.png',
    ],
  },
  {
    id: 2,
    sponsorBy: 'Silver Sponsors',
    images: [
      '/images/sponsor4.png',
      '/images/sponsor5.png',
      '/images/sponsor6.png',
      '/images/sponsor7.png',
    ],
  },
  {
    id: 3,
    sponsorBy: 'Creative Sponsors',
    images: [
      '/images/sponsor8.png',
      '/images/sponsor9.png',
      '/images/sponsor10.png',
      '/images/sponsor11.png',
    ],
  },
];

const EventSponsor = () => {
  return (
    <div className="text-center py-16">
      <Title hasTextBrand title="Supporting Our Project" />
      <Subtitle subtitle="Event Sponsors" />
      <div className="py-10 text-2xl font-semibold text-gray-900">
        {data.map((item) => (
          <div data-aos="fade-up" key={item.id}>
            <div>
              <h1>{item.sponsorBy}</h1>
              <div className=" md:flex md:justify-around  md:py-14 py-10 container mx-auto ">
                {item.images.map((img, index) => (
                  <div key={index + 1} className="flex justify-center">
                    <Image
                      className="cursor-pointer py-6 items-center "
                      src={img}
                      alt=""
                      width={120}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button active> BECOME OUR SPONSOR</Button>
    </div>
  );
};

export default EventSponsor;
