import { Link } from "react-router-dom"

type WorkPreviewProps = {
  id: string,
  image: string
}

export function WorkPreview(props: WorkPreviewProps) {
  return (
    <Link to={`/portfolio-item/${props.id}`} className='bg-accent overflow-hidden focus:z-10'>
      <img src={props.image} alt="screenshot of one of my projects" className='min-w-full transition duration-1000 hover:scale-110 hover:opacity-75'/>
    </Link>
  )
}
