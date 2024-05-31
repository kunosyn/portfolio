export function Video ({
  className,
  src,
  width,
  height,
  mediaType = 'video/mp4',
  preload = 'none',
  kind = 'subtitles'
}:
{
  className?: string,
  src: string,
  width: number,
  height: number,
  mediaType?: string,
  preload?: string,
  kind?: string
}) {
  return (
    <video className={className} width={width} height={height} controls preload={preload}>
      <source src={src} type={mediaType} />
      <track src={src} kind={kind} srcLang='en' label='English'/>

      Could not load video. Your browser does not support video tags.
    </video>
  )
}