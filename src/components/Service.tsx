type ServiceProps = {
  title: string,
  body: string,
}

export default function Service(props: ServiceProps) {
  return (
    <div>
      <h3 className="font-black leading-none">{props.title}</h3>
      <p className="mt-4">{props.body}</p>
    </div>
  )
}
