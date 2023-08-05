type Tag = 'h1' | 'h2' | 'h3'

interface IHeading {
  tag: Tag
  children: React.ReactNode
  className?: string
}

const Heading = ({ tag, children, className }: IHeading) => {
  switch (tag) {
    case 'h1':
      return <h1 className={`${className} text-3xl font-bold`}>{children}</h1>
    case 'h2':
      return (
        <h2 className={`${className} text-2xl font-semibold`}>{children}</h2>
      )
    case 'h3':
      return (
        <h3 className={`${className} text-xl font-semibold`}>{children}</h3>
      )
  }
}

export default Heading
