import AOS from 'aos';
import dayjs from 'dayjs';
import Image from 'next/image';
AOS.init();
const EventDetail = ({ selectedDay }) => {
  return (
    <div className="space-y-3">
      <div className="text-center text-brand text-2xl font-bold mb-12">
        {dayjs(selectedDay?.date).format('dddd, D')}th{' '}
        {dayjs(selectedDay?.date).format('MMMM')}
      </div>
      {selectedDay?.programs?.map((item) => (
        <div
          data-aos="fade-right"
          key={item.id}
          className="md:flex gap-4 py-5 px-8 border border-gray-200 rounded md:mx-40 mx-6 odd:bg-white even:bg-slate-100"
        >
          <div className="flex text-sm font-bold text-gray-700 md:w-2/12">
            {item.startTime}
            {item.endTime}
          </div>
          <div className="md:w-1/12 md:py-0 py-3">
            {item.img && (
              <Image
                className="border rounded-lg "
                src={item.img}
                alt={item.heading}
                height={70}
                width={70}
              />
            )}
          </div>
          <div className="md:w-9/12 flex-1 md:pl-6">
            <div className=" text-brand font-bold">{item.heading}</div>
            <div className="text-xl font-bold pb-2">{item.title}</div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetail;
