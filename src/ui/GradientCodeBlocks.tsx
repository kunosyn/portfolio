export function GradientCodeBlocks ({
  from = '#9C89B8',
  via = '#F0A6CA',
  to = '#EFC3E6',
  children
}: {
  from?: string,
  via?: string,
  to?: string,
  children?: React.ReactNode
}) {
  return (
    <>
      <span className={`bg-clip-text bg-gradient-to-br from-[${from}] via-[${via}] to-[${to}] text-transparent`}>&lt;</span> {children} <span className={`bg-clip-text bg-gradient-to-br from-[${from}] via-[${via}] to-[${to}] text-transparent`}>/&gt;</span>
    </>
  )
}