'use client'

export function Copyright() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 pelo{' '}
      <a
        href="https://github.com/andersonbosa"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
      >
        @andersonbosa
      </a>{' '}
      no NLW#12 da{' '}
      <a
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
        href="https://rocketseat.com.br"
      >
        Rocketseat
      </a>
    </div>
  )
}
