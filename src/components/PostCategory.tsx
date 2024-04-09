interface PostCategoryProps {
  title: string
}

export function PostCategory({ title }: PostCategoryProps) {
  return (
    <div className="bg-primary px-[10px] py-1 w-fit rounded-md">
      <p className="text-white text-sm font-medium">{title}</p>
    </div>
  )
}
