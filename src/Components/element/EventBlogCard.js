import Image from 'next/image';

const EventBlogCard = (props) => {
  return (
    <div className="cursor-pointer relative">
      <Image src={props.img} alt="" height={400} width={400} />

      <h3 className=" py-4 text-lg font-semibold leading-snug hover:text-brand duration-500 ease-in-out">
        {props.title}
      </h3>
      <div className="absolute left-2 top-2 flex flex-col  border-transparent  rounded-md bg-brand m-auto p-3 py-0 items-center text-white">
        <h1 className="text-xl font-bold"> {props.date}</h1>
        <h3 className="text-lg">{props.month}</h3>
      </div>
    </div>
  );
};

export default EventBlogCard;
