type IntroductionProps = {
  title: string,
  title_strong: string,
  subtitle: string,
  image: string,
  className?: string
}

export default function Introduction(props: IntroductionProps) {
  return (
    <section id='introduction' className={`mx-auto px-8 sm:w-min sm:grid sm:grid-cols-title sm:grid-rows-title sm:gap-x-6 ${props.className}`}>
      <h1 className='mb-3 leading-none sm:mb-4'>
        {props.title}
        <strong className="block">{props.title_strong}</strong>
      </h1>
      <p className='text-h3 font-secondary bg-accent inline-block py-1 px-5 mt-4 sm:self-start sm:text-right sm:py-2 sm:col-start-1 sm:col-span-2 sm:row-start-2 sm:-translate-x-9 sm:w-intro-subtitle sm:-z-10'>{props.subtitle}</p>
      <img src={props.image} alt="" className='shadow-picture mt-5 mb-6 w-full sm:m-0 sm:max-w-none sm:w-[250px] sm:row-start-1 sm:row-span-full sm:col-start-1'/>
    </section>
  )
}